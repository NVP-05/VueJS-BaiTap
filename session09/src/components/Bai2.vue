<template>
  <div>
    <p>Màu sắc</p>
    <input type="color" v-model="choseColor">
    <p>Mã màu: {{choseColor}}</p>
  </div>
</template>

<script setup>
    import {ref} from "vue";
    const choseColor = ref("");
</script>

<style>

</style>