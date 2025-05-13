<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';

const { t } = useI18n();

const formData = ref({
  name: '',
  email: '',
  message: ''
});

const isSubmitting = ref(false);
const submitSuccess = ref(false);
const submitError = ref(false);

const handleSubmit = () => {
  isSubmitting.value = true;

  // Simulate form submission
  setTimeout(() => {
    isSubmitting.value = false;
    submitSuccess.value = true;

    // Reset form
    formData.value = {
      name: '',
      email: '',
      message: ''
    };

    // Hide success message after 3 seconds
    setTimeout(() => {
      submitSuccess.value = false;
    }, 3000);
  }, 1000);
};
</script>

<template>
  <section id="contact" class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">{{ t('contact.title') }}</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <!-- Contact information -->
        <div class="bg-gray-50 p-8 rounded-lg shadow-md">
          <h3 class="text-2xl font-bold mb-6 text-primary">THT</h3>

          <div class="space-y-6">
            <div class="flex items-start">
              <div class="flex-shrink-0 mr-4">
                <div class="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-1">Address</h4>
                <p class="text-gray-700">No.4 Tay Son stress , Phung district , Hanoi city, Vietnam</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0 mr-4">
                <div class="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-1">Hotline</h4>
                <p class="text-gray-700">0343158687</p>
              </div>
            </div>

            <!-- <div class="flex items-start">
              <div class="flex-shrink-0 mr-4">
                <div class="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-1">Email</h4>
                <p class="text-gray-700">{{ t('contact.email') }}</p>
              </div>
            </div> -->
          </div>

          <!-- Map placeholder -->
          <!-- <div class="mt-8 h-60 bg-gray-200 rounded-lg flex items-center justify-center">
            <span class="text-gray-500">Map Location</span>
          </div> -->
        </div>

        <!-- Contact form -->
        <!-- <div class="bg-gray-50 p-8 rounded-lg shadow-md">
          <h3 class="text-2xl font-bold mb-6 text-primary">{{ t('contact.formTitle') }}</h3>

          <form @submit.prevent="handleSubmit">
            <div class="mb-6">
              <label for="name" class="block text-gray-700 font-medium mb-2">{{ t('contact.name') }}</label>
              <input
                id="name"
                v-model="formData.name"
                type="text"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>

            <div class="mb-6">
              <label for="email" class="block text-gray-700 font-medium mb-2">{{ t('contact.email') }}</label>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>

            <div class="mb-6">
              <label for="message" class="block text-gray-700 font-medium mb-2">{{ t('contact.message') }}</label>
              <textarea
                id="message"
                v-model="formData.message"
                rows="5"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full btn btn-primary"
              :disabled="isSubmitting"
            >
              <span v-if="isSubmitting">
                <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
              <span v-else>{{ t('contact.submit') }}</span>
            </button>

            <div v-if="submitSuccess" class="mt-4 p-3 bg-green-100 text-green-700 rounded-lg">
              Thank you for your message! We'll get back to you soon.
            </div>

            <div v-if="submitError" class="mt-4 p-3 bg-red-100 text-red-700 rounded-lg">
              There was an error sending your message. Please try again.
            </div>
          </form>
        </div> -->
      </div>
    </div>
  </section>
</template>