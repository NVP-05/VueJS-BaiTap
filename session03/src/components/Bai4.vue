<template>
<div>
    <div v-if="isActive == true" v-bind:class="red">
    Block
  </div>
    <div v-if="isActive == false" v-bind:class="green">
    Block
  </div>
  <p>isActive: {{isActive}}</p>
</div>
  
  
</template>

<script setup>
    const isActive = true;
    const green = "red";
    const red = "green";
</script>   

<style>
    .red{
        color: red;
    }
    .green{
        color: green;
    }
</style>