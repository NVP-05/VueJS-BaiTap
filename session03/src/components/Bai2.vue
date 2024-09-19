<template>
    <div>
        <p>Bai2</p>
        <h1 v-bind:class="className">Heading</h1>
    </div>
</template>

<script setup>
    const className = "heading";
</script>

<style>
    .heading{
        color: red;
    }
</style>