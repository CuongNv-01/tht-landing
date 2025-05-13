<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <section id="about" class="py-16 md:py-24 bg-gray-50">
    <div class="container mx-auto px-4">
      <!-- About section -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">{{ t('about.title') }}</h2>
        <p class="text-gray-700 max-w-3xl mx-auto">{{ t('about.description') }}</p>
      </div>

      <!-- Mission & Vision -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <!-- Mission -->
        <div class="bg-white p-8 rounded-lg shadow-md">
          <div class="flex items-center mb-6">
            <div class="bg-primary/10 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-primary">{{ t('mission.title') }}</h3>
          </div>
          <ul class="space-y-4">
            <li class="flex">
              <div class="mr-3 mt-1 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p class="text-gray-700">{{ t('mission.item1') }}</p>
            </li>
            <li class="flex">
              <div class="mr-3 mt-1 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p class="text-gray-700">{{ t('mission.item2') }}</p>
            </li>
            <li class="flex">
              <div class="mr-3 mt-1 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p class="text-gray-700">{{ t('mission.item3') }}</p>
            </li>
          </ul>
        </div>

        <!-- Vision -->
        <div class="bg-white p-8 rounded-lg shadow-md">
          <div class="flex items-center mb-6">
            <div class="bg-secondary/10 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-secondary">{{ t('vision.title') }}</h3>
          </div>
          <ul class="space-y-4">
            <li class="flex">
              <div class="mr-3 mt-1 text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p class="text-gray-700">{{ t('vision.item1') }}</p>
            </li>
            <li class="flex">
              <div class="mr-3 mt-1 text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p class="text-gray-700">{{ t('vision.item2') }}</p>
            </li>
            <li class="flex">
              <div class="mr-3 mt-1 text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p class="text-gray-700">{{ t('vision.item3') }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
