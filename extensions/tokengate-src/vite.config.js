import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import nodePolyfills from "vite-plugin-node-stdlib-browser";

export default defineConfig({
  plugins: [nodePolyfills(), react()],
  define: {
    global: "globalThis",
  },
  optimizeDeps: {
    // 👈 optimizedeps
    esbuildOptions: {
      target: "esnext",
      // Node.js global to browser globalThis
      define: {
        global: "globalThis",
      },
      supported: {
        bigint: true,
      },
    },
  },
  build: {
    target: ["esnext"],
    assetsDir: "",
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    minify: false,
    emptyOutDir: true,
    rollupOptions: {
      input: "./src/index.jsx",
      output: {
        inlineDynamicImports: true,
        dir: "../tokengate/assets",
        entryFileNames: "index.js",
        assetFileNames: "index.[ext]",
      },
    },
  },
});
