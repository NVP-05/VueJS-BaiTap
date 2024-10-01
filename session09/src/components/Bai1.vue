<template>
  <div>
    <p>Email</p>
    <input type="text" v-model="data">
    <p>Giá trị: {{data}}</p>
  </div>
</template>

<script setup>
    import {ref} from "vue"
    const data = ref("");
</script>

<style>

</style>