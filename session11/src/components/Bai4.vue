<template>
  <div>
    <p>Giá trị của age: {{age}}</p>
    <button @click="handleClick">Increase age</button>
  </div>
</template>

<script setup>
    import {ref, onUpdated} from "vue";

    const age = ref(0);
    const handleClick = () => {
        age.value = 2;
    }
    onUpdated(()=>{
        alert("Giá trị biến age đã thay đổi.");
    })
</script>

<style>

</style>