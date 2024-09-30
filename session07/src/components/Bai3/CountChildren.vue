<template>
  <div>
    <h2>-------- Children Component --------</h2>
    <button @click="emitIncrement">Increment</button>
  </div>
</template>

<script setup>
const emit = defineEmits(['increment']);
const emitIncrement = () => {
  emit('increment');
};
</script>
