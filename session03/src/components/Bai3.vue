<template>
  <div>
    <input type="text" placeholder="Cho phép nhập" :disabled="isDisable"  />
    <p>isDisable={{ isDisable }}</p>
  </div>
</template>

<script setup>
    const isDisable = true;
</script>

<style scoped>

</style>
