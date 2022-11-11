<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/navbar/Navbar.vue'
import Home from './views/Home.vue'
import Footer from './components/footer/Footer.vue'
</script>

<template>
  <Navbar/>
  <div  class="set-app">
      <RouterView />
  </div>
  <Footer/>
</template>

<style scoped>
.set-max-h{
  height: 130vh;
  z-index: -9999px !important;
}

.set-app{
  z-index: 9999px !important;
}
</style>
