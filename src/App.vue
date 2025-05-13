<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import CapabilitiesSection from './components/CapabilitiesSection.vue';
import ValuesSection from './components/ValuesSection.vue';
// import ServicesSection from './components/ServicesSection.vue';
import ProductsSection from './components/ProductsSection.vue';
import ContactSection from './components/ContactSection.vue';
import FooterSection from './components/FooterSection.vue';

// Check for stored language preference during app initialization
// This is already implemented in the Navbar component
</script>

<template>
  <div class="font-sans">
    <Navbar />

    <main>
      <HeroSection />
      <AboutSection />
      <CapabilitiesSection />
      <ValuesSection />
      <!-- <ServicesSection /> -->
      <ProductsSection />
      <ContactSection />
    </main>

    <FooterSection />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
