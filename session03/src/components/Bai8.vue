<template>
  <div>
    <a href="https://www.google.com" @click="checkLink">Đường dẫn chuẩn</a>
    <br>
    <a href="http://www.google.com" @click="checkLink">Đường dẫn sai</a>
  </div>
</template>

<script setup>
    const checkLink = (event) =>{
        const link = event.target.href;
        if (!link.startsWith("https://")) {
            event.preventDefault();
            alert("Đường dẫn không hợp lệ");
        }
    };
</script>

<style>

</style>