import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return {
    build: {
      lib: {
        entry: resolve(dirname(fileURLToPath(import.meta.url)), "src/index.ts"),
        fileName: (format) => `PrefabsTechToolsUtilities.${format}.js`,
        name: "PrefabsTechToolsUtilities",
      },
      target: "esnext",
    },
    resolve: {
      alias: {
        "@": new URL("src/", import.meta.url).pathname,
      },
    },
  };
});
