module.exports = {
  appName: "@12degrees/tools",
  buildCommand: ({ isYarn, version }) => {
    return "pnpm build";
  },
  installCommand: ({ isYarn }) => {
    return "pnpm -r install";
  },
  monorepo: {
    mainVersionFile: "package.json",
    packagesToBump: ["packages/*"],
    packagesToPublish: ["packages/*"],
  },
  publishCommand: ({ isYarn, tag, defaultCommand, dir }) => {
    return "pnpm publish --access public";
  },
};
