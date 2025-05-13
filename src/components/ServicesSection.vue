<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';

const { t } = useI18n();

const categories = [
  { id: 'produce', color: 'bg-primary text-white' },
  { id: 'business', color: 'bg-secondary text-white' },
  { id: 'service', color: 'bg-accent text-white' },
  { id: 'project', color: 'bg-gray-800 text-white' }
];

const activeCategory = ref(categories[0].id);

const setActiveCategory = (id: string) => {
  activeCategory.value = id;
};
</script>

<template>
  <section id="services" class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">{{ t('services.title') }}</h2>
      </div>

      <!-- Service category tabs -->
      <div class="flex flex-wrap justify-center mb-10">
        <button
          v-for="category in categories"
          :key="category.id"
          @click="setActiveCategory(category.id)"
          class="px-5 py-2 m-2 rounded-full font-medium transition-colors"
          :class="activeCategory === category.id ? category.color : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
        >
          {{ t(`services.${category.id}.title`) }}
        </button>
      </div>

      <!-- Service content -->
      <div class="bg-gray-50 p-6 md:p-10 rounded-xl shadow-md">
        <div v-for="category in categories" :key="category.id" v-show="activeCategory === category.id">
          <h3 class="text-2xl font-bold mb-6" :class="{
            'text-primary': category.id === 'produce',
            'text-secondary': category.id === 'business',
            'text-accent': category.id === 'service',
            'text-gray-800': category.id === 'project'
          }">
            {{ t(`services.${category.id}.title`) }}
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              v-for="(item, index) in t(`services.${category.id}.items`)"
              :key="index"
              class="flex bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div class="flex-shrink-0 mr-4">
                <div class="flex items-center justify-center h-10 w-10 rounded-full" :class="{
                  'bg-primary/10 text-primary': category.id === 'produce',
                  'bg-secondary/10 text-secondary': category.id === 'business',
                  'bg-accent/10 text-accent': category.id === 'service',
                  'bg-gray-200 text-gray-800': category.id === 'project'
                }">
                  <span class="font-bold">{{ index + 1 }}</span>
                </div>
              </div>
              <div>
                <p class="text-gray-800">{{ item }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>