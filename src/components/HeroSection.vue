<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <section id="home" class="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary/90 to-primary">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center">
        <!-- Text content -->
        <div class="w-full md:w-1/2 text-white mb-10 md:mb-0">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ t('hero.title') }}</h1>
          <p class="text-xl md:text-2xl mb-8">{{ t('hero.subtitle') }}</p>
          <a href="#about" class="btn bg-white text-primary hover:bg-gray-100">
            {{ t('hero.cta') }}
          </a>
        </div>

        <!-- Image grid - representing machinery/products -->
        <div class="w-full md:w-1/2 grid grid-cols-2 gap-4">
          <div class="bg-white p-3 rounded-lg shadow-lg">
            <div class="h-40 bg-gray-200 rounded-md overflow-hidden flex items-center justify-center">
              <div class="bg-gray-300 flex items-center justify-center w-full h-full">
                <img src="/images/logo.jpg" alt="CNC Machine" class="w-full h-full object-cover">
                <!-- <span class="text-primary text-center">CNC Machine</span> -->
              </div>
            </div>
          </div>
          <div class="bg-white p-3 rounded-lg shadow-lg">
            <div class="h-40 bg-gray-200 rounded-md overflow-hidden flex items-center justify-center">
              <div class="bg-gray-300 flex items-center justify-center w-full h-full">
                <img src="/images/8.jpg" alt="CNC Milling" class="w-full h-full object-cover">
                <!-- <span class="text-primary text-center">CNC Milling</span> -->
              </div>
            </div>
          </div>
          <div class="bg-white p-3 rounded-lg shadow-lg">
            <div class="h-40 bg-gray-200 rounded-md overflow-hidden flex items-center justify-center">
              <div class="bg-gray-300 flex items-center justify-center w-full h-full">
                <img src="/images/9.jpg" alt="Industrial Components" class="w-full h-full object-cover">
                <!-- <span class="text-primary text-center">Industrial Components</span> -->
              </div>
            </div>
          </div>
          <div class="bg-white p-3 rounded-lg shadow-lg">
            <div class="h-40 bg-gray-200 rounded-md overflow-hidden flex items-center justify-center">
              <div class="bg-gray-300 flex items-center justify-center w-full h-full">
                <img src="/images/12.jpg" alt="Precision Parts" class="w-full h-full object-cover">
                <!-- <span class="text-primary text-center">Precision Parts</span> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>