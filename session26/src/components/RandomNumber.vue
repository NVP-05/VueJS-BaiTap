<template>
    <div class="text-center">
      <h2>Generated Random Numbers:</h2>
      <p>{{ randomNumbers }}</p>
      <button @click="generateRandomNumber" class="m-2 px-4 py-2 bg-blue-500 text-white rounded">Generate Random Number</button>
    </div>
  </template>
  
  <script setup>
  import { useStore } from 'vuex';
  import { computed } from 'vue';
  
  const store = useStore();
  const randomNumbers = computed(() => store.state.randomNumbers);
  
  const generateRandomNumber = () => {
    store.dispatch('generateRandomNumber');
  };
  </script>
  
  <style >
  </style>
  