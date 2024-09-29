<template>
  <div>
    <button @click="handleClick">Click {{number}} lần</button>
  </div>
</template>

<script setup>
  import { ref } from "vue";

    const number =ref(0);
    const handleClick = () => {
        number.value+=1
    }
</script>

<style>

</style>