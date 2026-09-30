module.exports = {
  appName: "@prefabs.tech/tools",
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
