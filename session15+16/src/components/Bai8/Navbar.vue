<template>
  <nav>
    <router-link
      v-for="route in routes"
      :key="route.name"
      :to="route.path"
      :class="{ active: $route.name === route.name }"
    >
      {{ route.name }}
    </router-link>
  </nav>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const routes = router.options.routes
</script>

<style scoped>
.active {
  background-color: blue;
  color: #fff;
  font-weight: 700;
}
</style>
