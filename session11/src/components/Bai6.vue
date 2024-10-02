<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="incrementCount">Increment</button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const count = ref(0);
const incrementCount = () => {
  count.value += 1;
};
watch(count, (newCount) => {
  document.title = `Count: ${newCount}`;
});
</script>
