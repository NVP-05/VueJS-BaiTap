<template>
  <div>
    <form action="">
        <input type="text">
        <button @click="handleClick">Submit</button>
    </form>
  </div>
</template>

<script setup>
    const handleClick = (event) => {
        event.preventDefault();
        console.log("Form submission prevented!");
    }
</script>

<style>

</style>