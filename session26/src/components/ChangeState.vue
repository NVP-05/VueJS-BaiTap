<template>
    <div>
      <h1>{{ company }}</h1>
      <button @click="changeState">Change state</button>
    </div>
  </template>
  
  <script setup>
  import { useStore } from 'vuex';
  import { computed } from 'vue';
  
  const store = useStore();
  const company = computed(() => store.state.company);
  
  const changeState = () => {
    store.commit('changeCompany');
  };
  </script>
  
  <style >

  </style>
  