<template>
  <div id="app">
  <Header />
    <router-view />
  </div>
  <Footer />
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
// import HeaderSection from './views/HeaderSection.vue';
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
</style>
