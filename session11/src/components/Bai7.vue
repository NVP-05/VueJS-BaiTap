<template>
  <div>
    <input type="text" v-model="input">
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const input = ref("");
watch(input, (newInput) => {
  document.title = `${newInput}`;
});
</script>
