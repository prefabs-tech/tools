#!/usr/bin/env node
// Prepares the release of one package: sets its version and writes the
// changelogs. Publishing, committing and tagging are left to the caller
// (.github/workflows/release.yml).
//
// Usage: node scripts/release.mjs <package> <version> [--to <ref>] [--notes <file>]
//
//   <package>  directory name under packages/ (e.g. eslint-config)
//   <version>  new semver version, without the "v" (e.g. 0.10.0)
//   --to       last commit to include in the changelog (default: HEAD)
//   --notes    also write the new changelog entry to this file
//
// Commits are taken from the package's previous "<package>/v*" tag (or the last
// shared "v*" tag from before per-package releases) up to --to, and only those
// touching packages/<package>. Running it again for a version the package
// already has is a no-op, so it is safe to re-run.

import { execFileSync } from "node:child_process";
import {
  existsSync,
  mkdtempSync,
  readFileSync,
  realpathSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { devNull, tmpdir } from "node:os";
import { join } from "node:path";
import { parseArgs } from "node:util";

const SEMVER =
  /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?$/;

const root = process.cwd();

const fail = (message) => {
  console.error(`release: ${message}`);
  process.exit(1);
};

const run = (command, args, stderr = "inherit") =>
  execFileSync(command, args, {
    cwd: root,
    encoding: "utf8",
    stdio: ["ignore", "pipe", stderr],
  }).trim();

// Compares two semver versions: < 0, 0 or > 0
const compareVersions = (a, b) => {
  const [, ...pa] = SEMVER.exec(a);
  const [, ...pb] = SEMVER.exec(b);

  for (let index = 0; index < 3; index++) {
    const difference = Number(pa[index]) - Number(pb[index]);

    if (difference !== 0) {
      return difference;
    }
  }

  // A pre-release sorts before the release itself
  if (pa[3] === pb[3]) {
    return 0;
  }

  if (pa[3] === undefined) {
    return 1;
  }

  if (pb[3] === undefined) {
    return -1;
  }

  return pa[3].localeCompare(pb[3], "en", { numeric: true });
};

// Absolute path to the angular preset pinned in the root package.json. By name,
// conventional-changelog may load whichever version pnpm hoisted.
const resolvePreset = () => {
  const presetDir = realpathSync(
    join(root, "node_modules", "conventional-changelog-angular"),
  );
  const { exports } = JSON.parse(
    readFileSync(join(presetDir, "package.json"), "utf8"),
  );

  return join(presetDir, exports.import);
};

// Most recent tag reachable from `to` matching `pattern`, if any
const previousTag = (pattern, to) => {
  try {
    return run(
      "git",
      ["describe", "--tags", "--abbrev=0", "--match", pattern, to],
      "ignore",
    );
  } catch {
    return undefined;
  }
};

const { positionals, values } = parseArgs({
  allowPositionals: true,
  options: {
    notes: { type: "string" },
    to: { default: "HEAD", type: "string" },
  },
});

const [name, version] = positionals;

if (!name || !version || positionals.length !== 2) {
  fail(
    "usage: node scripts/release.mjs <package> <version> [--to <ref>] [--notes <file>]",
  );
}

if (!/^[a-z0-9][a-z0-9-]*$/.test(name)) {
  fail(`invalid package name "${name}"`);
}

if (!SEMVER.test(version)) {
  fail(`"${version}" is not a valid semver version (expected e.g. 1.2.3)`);
}

const packageDir = join("packages", name);
const manifestPath = join(root, packageDir, "package.json");

if (!existsSync(manifestPath)) {
  fail(`no package at ${packageDir}`);
}

const manifestText = readFileSync(manifestPath, "utf8");
const manifest = JSON.parse(manifestText);

if (manifest.version === version) {
  console.log(
    `release: ${manifest.name} is already at ${version}, nothing to do`,
  );
  process.exit(0);
}

if (compareVersions(version, manifest.version) <= 0) {
  fail(
    `${version} is not greater than the current version of ${manifest.name} (${manifest.version})`,
  );
}

const tagPrefix = `${name}/v`;
const from =
  previousTag(`${tagPrefix}*`, values.to) ?? previousTag("v*", values.to);

// Set the version, keeping the file's formatting otherwise
writeFileSync(
  manifestPath,
  manifestText.replace(
    /^(\s*"version":\s*)"[^"]*"/m,
    (_, prefix) => `${prefix}"${version}"`,
  ),
);

// The preset only finds the previous tag among "<package>/v*" tags, so pass both
// tags explicitly for the compare link (the first release starts from a "v*" tag)
const contextDir = mkdtempSync(join(tmpdir(), "release-"));
const contextPath = join(contextDir, "context.json");

writeFileSync(
  contextPath,
  JSON.stringify({
    currentTag: `${tagPrefix}${version}`,
    linkCompare: Boolean(from),
    previousTag: from,
  }),
);

const entry = run(
  join(root, "node_modules", ".bin", "conventional-changelog"),
  [
    // An empty input, otherwise the existing CHANGELOG.md is appended to stdout
    "--infile",
    devNull,
    "--preset",
    resolvePreset(),
    "--context",
    contextPath,
    "--pkg",
    manifestPath,
    "--commit-path",
    packageDir,
    "--tag-prefix",
    tagPrefix,
    ...(from ? ["--from", from] : []),
    "--to",
    values.to,
    "--stdout",
  ],
);

rmSync(contextDir, { force: true, recursive: true });

const prepend = (path, text) => {
  const current = existsSync(path) ? readFileSync(path, "utf8") : "";

  writeFileSync(path, `${`${text}\n\n${current}`.trimEnd()}\n`);
};

prepend(join(root, packageDir, "CHANGELOG.md"), entry);

// In the root changelog, name the package in the entry's heading
prepend(
  join(root, "CHANGELOG.md"),
  entry.replace(/^(#+ )/, `$1${manifest.name} `),
);

if (values.notes) {
  writeFileSync(values.notes, `${entry}\n`);
}

console.log(
  `release: ${manifest.name} ${manifest.version} -> ${version} (changes since ${from ?? "the first commit"})`,
);
