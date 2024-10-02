<template>
  <div class="p-4">
    <p>Age: {{ age }}</p>
    <p>Company: {{ currentCompany }}</p>
    <button @click="randomizeAge" class="bg-blue-500 text-white px-4 py-2 rounded">Random</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const age = ref(1);
const companies = ['Rikkei Academy', 'Rikkei Education', 'Rikkei Fukuoka'];
const currentCompany = computed(() => {
  return companies[(age.value - 1) % companies.length];
});
const randomizeAge = () => {
  age.value = Math.floor(Math.random() * 10) + 1;
};
</script>

<style scoped>
button {
  cursor: pointer;
}
</style>
