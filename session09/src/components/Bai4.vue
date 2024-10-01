<template>
  <div>
    <p>Tiến độ hoàn thành: {{ leww }}%</p>
    <input type="range" v-model="leww" min="0" max="100">        
  </div>
</template>

<script setup>
    import { ref } from 'vue'
    const leww = ref(0);

</script>

<style>

</style>
