import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  json: {
    stringify: true, // Force JSON files to be imported as objects
  },
  build: {
    sourcemap: false,
    // Keep locale files in the bundle
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules/vue-i18n')) {
            return 'vue-i18n'
          }
          if (id.includes('locales/') || id.endsWith('.json')) {
            return 'locales'
          }
        }
      }
    }
  }
})
