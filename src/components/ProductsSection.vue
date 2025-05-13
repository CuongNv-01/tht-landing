<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// Sample products - in a real implementation, these would come from an API or data source
const products = [
  { id: 1, name: 'Product 1', fallbackColor: 'bg-gray-200', image: '/images/1.jpg' },
  { id: 2, name: 'Product 2', fallbackColor: 'bg-gray-300', image: '/images/2.jpg' },
  { id: 3, name: 'Product 3', fallbackColor: 'bg-gray-200', image: '/images/3.jpg' },
  { id: 4, name: 'Product 4', fallbackColor: 'bg-gray-300', image: '/images/4.jpg' },
  { id: 5, name: 'Product 5', fallbackColor: 'bg-gray-200', image: '/images/5.jpg' },
  { id: 6, name: 'Product 6', fallbackColor: 'bg-gray-300', image: '/images/6.jpg' },
  { id: 7, name: 'Product 7', fallbackColor: 'bg-gray-200', image: '/images/7.jpg' },
  { id: 8, name: 'Product 8', fallbackColor: 'bg-gray-300', image: '/images/8.jpg' },
  { id: 9, name: 'Product 9', fallbackColor: 'bg-gray-300', image: '/images/9.jpg' },
  { id: 10, name: 'Product 10', fallbackColor: 'bg-gray-300', image: '/images/10.jpg' },
  { id: 11, name: 'Product 11', fallbackColor: 'bg-gray-300', image: '/images/11.jpg' },
  { id: 12, name: 'Product 12', fallbackColor: 'bg-gray-300', image: '/images/12.jpg' },

];
</script>

<template>
  <section id="products" class="py-16 md:py-24 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">{{ t('products.title') }}</h2>
        <p class="text-gray-700 max-w-3xl mx-auto">{{ t('products.description') }}</p>
      </div>

      <!-- Product gallery grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
        <div
          v-for="product in products"
          :key="product.id"
          class="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
        >
          <div class="aspect-square" :class="product.fallbackColor">
            <div class="flex items-center justify-center h-full">
              <img :src="product.image" :alt="product.name" class="w-full h-full object-cover">
            </div>
          </div>
          <!-- <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
            <div class="p-4 w-full">
              <button class="w-full py-2 bg-primary text-white rounded-md text-sm">View Details</button>
            </div>
          </div> -->
        </div>
      </div>

      <!-- View more button -->
      <!-- <div class="text-center mt-10">
        <button class="btn btn-primary">
          View All Products
        </button>
      </div> -->
    </div>
  </section>
</template>