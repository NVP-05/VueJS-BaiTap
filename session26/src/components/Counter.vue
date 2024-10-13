<template>
  <div class="text-center">
    <h1>Count: {{ store.state.count }}</h1>
    <button @click="increment" class="m-2 px-4 py-2 bg-blue-500 text-white rounded">Increment</button>
    <button @click="decrement" class="m-2 px-4 py-2 bg-red-500 text-white rounded">Decrement</button>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();

const increment = () => {
  store.dispatch('increment');
};

const decrement = () => {
  store.dispatch('decrement');
};
</script>

<style >
</style>
