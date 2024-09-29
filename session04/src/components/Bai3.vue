<template>
  <div>
    <p>witdth: {{witdth}}</p>
    <p>height: {{height}}</p>
    <p>Acreage: {{acreage}}</p>
    <button @click="handleClick">Change data</button>

  </div>
</template>

<script setup>
    import { ref } from "vue";
    const witdth = ref(10);
    const height = ref(20);
    const acreage = ref(witdth.value*height.value);

    const handleClick = () => {
        witdth.value = 20;
        acreage.value = witdth.value*height.value
    }
</script>

<style>

</style>