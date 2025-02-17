<script setup>
import SidebarPanel from '@/components/sidebar/SidebarPanel.vue'
import { sidebarWidth } from './components/sidebar/sidebarState.js';
</script>

<template>
  <div class="app-container">
    <SidebarPanel />
    <div class="main-content" :style="{ marginLeft: sidebarWidth }">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
      <router-view />
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
