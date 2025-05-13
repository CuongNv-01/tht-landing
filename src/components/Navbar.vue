<script setup lang="ts">
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const changeLanguage = (lang: string) => {
  locale.value = lang;
  localStorage.setItem('locale', lang);
  // Force refresh of page components
  document.documentElement.setAttribute('lang', lang);
};

// Check if there's a saved language preference
watch(() => locale.value, (val) => {
  localStorage.setItem('locale', val);
}, { immediate: true });

// Initialize from localStorage if available
const savedLocale = localStorage.getItem('locale');
if (savedLocale && (savedLocale === 'en' || savedLocale === 'vi')) {
  locale.value = savedLocale;
}
</script>

<template>
  <nav class="bg-white shadow-md fixed w-full z-50">
    <div class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <div class="flex items-center">
          <img src="/images/logo.jpg" alt="Logo" class="w-10 h-10 rounded-full">
          <a href="#" class="text-2xl font-bold text-primary">{{ t('company.name') }}</a>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex space-x-8">
          <a href="#home" class="text-gray-700 hover:text-primary transition-colors">{{ t('nav.home') }}</a>
          <a href="#about" class="text-gray-700 hover:text-primary transition-colors">{{ t('nav.about') }}</a>
          <a href="#services" class="text-gray-700 hover:text-primary transition-colors">{{ t('nav.services') }}</a>
          <a href="#products" class="text-gray-700 hover:text-primary transition-colors">{{ t('nav.products') }}</a>
          <a href="#contact" class="text-gray-700 hover:text-primary transition-colors">{{ t('nav.contact') }}</a>
        </div>

        <!-- Language Switcher -->
        <div class="hidden md:flex items-center space-x-2">
          <button
            @click="changeLanguage('en')"
            class="px-2 py-1 rounded"
            :class="locale === 'en' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'">
            EN
          </button>
          <button
            @click="changeLanguage('vi')"
            class="px-2 py-1 rounded"
            :class="locale === 'vi' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'">
            VI
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button @click="toggleMenu" class="text-gray-700 focus:outline-none">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="md:hidden pt-4 pb-2 space-y-3">
        <a href="#home" @click="isMenuOpen = false" class="block text-gray-700 hover:text-primary">{{ t('nav.home') }}</a>
        <a href="#about" @click="isMenuOpen = false" class="block text-gray-700 hover:text-primary">{{ t('nav.about') }}</a>
        <a href="#services" @click="isMenuOpen = false" class="block text-gray-700 hover:text-primary">{{ t('nav.services') }}</a>
        <a href="#products" @click="isMenuOpen = false" class="block text-gray-700 hover:text-primary">{{ t('nav.products') }}</a>
        <a href="#contact" @click="isMenuOpen = false" class="block text-gray-700 hover:text-primary">{{ t('nav.contact') }}</a>

        <!-- Mobile Language Switcher -->
        <div class="flex space-x-2 pt-2">
          <button
            @click="changeLanguage('en')"
            class="px-2 py-1 rounded"
            :class="locale === 'en' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'">
            EN
          </button>
          <button
            @click="changeLanguage('vi')"
            class="px-2 py-1 rounded"
            :class="locale === 'vi' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'">
            VI
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>