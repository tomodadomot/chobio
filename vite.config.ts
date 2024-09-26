import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin({identifiers: ({ hash }) => `cssfile_${hash}`}),
  ],
  build: {
    outDir: './docs',
  },
  server: {
    open: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests",
    mockReset: true,
  },
})
