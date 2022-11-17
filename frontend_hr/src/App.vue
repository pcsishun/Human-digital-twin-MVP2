<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/navbar/Navbar.vue'
import Menu from './components/menu/Menu.vue'
import Footer from './components/footer/Footer.vue'
</script>

<template>
  <div>
    <div class="top-page">
      <Navbar/>
    </div>
    <div class="body-page">
      <div class="menu-set">
        <Menu/>
      </div>
      <div class="body-set">
        <RouterView />
      </div>
    </div>
    <div class="footer-page">
      <Footer/>
    </div>
    <!-- <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div> -->
  </div>

  
</template>

<style >
body{
  padding:0px;
  margin:0px;
}

</style>
