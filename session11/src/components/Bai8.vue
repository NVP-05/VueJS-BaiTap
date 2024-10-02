<template>
  <div>
    <h2>Chiều rộng cửa sổ: {{ windowWidth }}px</h2>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const windowWidth = ref(window.innerWidth);
const updateWidth = () => {
  windowWidth.value = window.innerWidth;
};
onMounted(() => {
  window.addEventListener('resize', updateWidth);
});
onUnmounted(() => {
  window.removeEventListener('resize', updateWidth);
});
</script>

<style scoped>
h2 {
  font-size: 24px;
  font-weight: bold;
}
p {
  font-size: 18px;
  color: gray;
}
</style>
