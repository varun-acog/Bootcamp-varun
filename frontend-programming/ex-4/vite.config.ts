import { defineConfig } from "vite";
import eslintPlugin from "vite-plugin-eslint";

export default defineConfig({
  plugins: [
    eslintPlugin({
      cache: false, // Disable cache if you're adding a new config
      include: ["./src/**/*.ts"],
      overrideConfigFile: "./.eslintrc.js", // Define files to lint
    }),
  ],
  server: {
    hmr: {
      overlay: false, // Disable the error overlay if needed
    },
  },
});
