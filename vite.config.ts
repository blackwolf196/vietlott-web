import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      pages: "/src/pages",
      hooks: "/src/hooks",
      helper: "/src/helper"
    },
  }
})
