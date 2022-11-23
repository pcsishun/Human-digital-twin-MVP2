<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/navbar/Navbar.vue'
import Menu from './components/menu/Menu.vue'
</script>

<template>
    <div class="wrapper"> 
      <Navbar/>
      <div> 
        <div class="set-menu">
          <Menu/>
        </div>
        <RouterView />
      </div>
    </div>
</template>

<style>
body{
  padding: 0px;
  margin: 0px;
  background-color: #EFFAFF;
}
</style>
