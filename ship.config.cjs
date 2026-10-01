const { execFileSync } = require("node:child_process");
const {
  existsSync,
  readdirSync,
  readFileSync,
  realpathSync,
  writeFileSync,
} = require("node:fs");
const { join } = require("node:path");

// Absolute path to the angular preset pinned in the root package.json.
// Passing the preset by name would let conventional-changelog pick up whichever
// version pnpm hoisted (e.g. shipjs's older one, which it cannot render).
const resolvePreset = (dir) => {
  const presetDir = realpathSync(
    join(dir, "node_modules", "conventional-changelog-angular"),
  );
  const { exports } = JSON.parse(
    readFileSync(join(presetDir, "package.json"), "utf8"),
  );

  return join(presetDir, exports.import);
};

module.exports = {
  appName: "@prefabs.tech/tools",
  // Write a CHANGELOG.md in each package, listing only the commits that touched it
  beforeCommitChanges: ({ dir }) => {
    const preset = resolvePreset(dir);

    for (const name of readdirSync(join(dir, "packages"))) {
      const packageDir = join("packages", name);

      if (!existsSync(join(dir, packageDir, "package.json"))) {
        continue;
      }

      const changelog = join(packageDir, "CHANGELOG.md");

      if (!existsSync(join(dir, changelog))) {
        writeFileSync(join(dir, changelog), "");
      }

      execFileSync(
        "pnpm",
        [
          "exec",
          "conventional-changelog",
          "--preset",
          preset,
          "--infile",
          changelog,
          "--pkg",
          join(packageDir, "package.json"),
          "--commit-path",
          packageDir,
        ],
        { cwd: dir, stdio: "inherit" },
      );
    }

    // shipjs rewrites the package.json files with its own formatting; normalize
    // them so the release commit passes the pre-commit sort check
    execFileSync(
      "pnpm",
      ["exec", "sort-package-json", "package.json", "packages/*/package.json"],
      { cwd: dir, stdio: "inherit" },
    );
  },
  buildCommand: () => {
    return "pnpm build";
  },
  installCommand: () => {
    return "pnpm -r install";
  },
  monorepo: {
    mainVersionFile: "package.json",
    packagesToBump: ["packages/*"],
    packagesToPublish: ["packages/*"],
  },
  publishCommand: () => {
    return "pnpm publish --access public";
  },
};
