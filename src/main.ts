import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import './style.css'
import App from './App.vue'

// Import locales files directly
import en from './locales/en.json'
import vi from './locales/vi.json'

const i18n = createI18n({
  legacy: false, // Use Composition API
  globalInjection: true, // Make translations available in template
  locale: localStorage.getItem('locale') || 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    vi
  },
  // Settings for production
  fallbackWarn: false,
  missingWarn: false
})

// Create app and install plugins
const app = createApp(App)
app.use(i18n)
app.mount('#app')
