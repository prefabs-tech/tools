const { execFileSync } = require("node:child_process");
const { existsSync, readdirSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

module.exports = {
  appName: "@prefabs.tech/tools",
  // Write a CHANGELOG.md in each package, listing only the commits that touched it
  beforeCommitChanges: ({ dir }) => {
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
          "angular",
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
