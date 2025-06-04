<template>
  <div class="npm run dev">
    <Header />
    <HomeWelcome />
    <HomeProject />
    <HomePartner />
    <Footer />
  </div>
</template>

<script setup>
import Header from './Header.vue'
import HomeWelcome from "@/components/HomeWelcome.vue";
import HomeProject from "@/components/HomeProject.vue";
import HomePartner from "@/components/HomePartner.vue";
import Footer from "@/components/Footer.vue";
</script>
