<template>
  <div>
    <p>Giới tính: {{gender}}</p>
    <ul>
        <li><input type="radio" value="nam" v-model="gender">nam</li>
        <li><input type="radio" value="nữ" v-model="gender">nữ</li>
        <li><input type="radio" value="khác" v-model="gender">khác</li>
    </ul>
  </div>
</template>

<script setup>
    import {ref} from "vue"
    const gender = ref("");
</script>

<style>

</style>