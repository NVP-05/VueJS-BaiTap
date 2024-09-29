<template>
  <div>
    <ul>
      <li>name: {{userInfo.name}}</li>
      <li>name: {{userInfo.age}}</li>
    </ul>
    <button @click="changeInfo">Change data</button>
  </div>
</template>

<script setup>
    import { ref } from "vue";

    const userInfo = ref({
    name: "Rikkei Academy",
    age: 2,
  })
    const changeInfo = () => {
        userInfo.value.name = "Rikkei Education";
        userInfo.value.age = 1;
  }
</script>

<style>

</style>