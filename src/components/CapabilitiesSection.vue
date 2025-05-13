<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <section class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">{{ t('capabilities.title') }}</h2>
        <p class="text-white max-w-3xl mx-auto">{{ t('capabilities.description') }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Machine gallery tiles - a sample of machinery -->
        <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
          <div class="h-56 bg-gray-200 flex items-center justify-center">
            <div class="text-center p-4">
              <img src="/images/1.jpg" alt="CNC Machine" class="w-full h-full object-cover">
              <span class="text-white">CNC Machine</span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-primary mb-2">CNC Milling</h3>
            <p class="text-white">Precision multi-axis CNC milling for complex parts.</p>
          </div>
        </div>

        <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
          <div class="h-56 bg-gray-200 flex items-center justify-center">
            <div class="text-center p-4">
              <img src="/images/2.jpg" alt="CNC Turning" class="w-full h-full object-cover">
              <span class="text-white">CNC Turning</span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-primary mb-2">CNC Turning</h3>
            <p class="text-white">High-precision turning for cylindrical components.</p>
          </div>
        </div>

        <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
          <div class="h-56 bg-gray-200 flex items-center justify-center">
            <div class="text-center p-4">
              <img src="/images/3.jpg" alt="Custom Parts" class="w-full h-full object-cover">
              </img>
              <span class="text-white">Custom Parts</span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-primary mb-2">Custom Production</h3>
            <p class="text-white">Custom parts manufacturing for various industries.</p>
          </div>
        </div>
      </div>

      <!-- Philosophy section -->
      <div class="mt-20">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">{{ t('philosophy.title') }}</h2>
        </div>

        <div class="bg-gray-50 p-8 rounded-lg shadow-md">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="text-center p-4">
              <div class="bg-blue-100 p-4 rounded-full inline-flex mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-3 text-primary">{{ t('philosophy.item1') }}</h3>
            </div>

            <div class="text-center p-4">
              <div class="bg-blue-100 p-4 rounded-full inline-flex mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-3 text-primary">{{ t('philosophy.item2') }}</h3>
            </div>

            <div class="text-center p-4">
              <div class="bg-blue-100 p-4 rounded-full inline-flex mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-3 text-primary">{{ t('philosophy.item3') }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>