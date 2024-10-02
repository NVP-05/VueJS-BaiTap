<template>
  <div>
    <p>Count: {{count}}</p>
    <button @click="handleClick">Counter</button>
  </div>
</template>

<script setup>
    import {ref , onUpdated} from "vue";
    const count = ref(0);
    const handleClick = () => {
        count.value++;
    }
    onUpdated(()=>{
        console.log("Dữ liệu đã thay đổi");
    })
</script>

<style>

</style>