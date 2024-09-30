<template>
  <div>
    <h2>-------- TodoItem Component --------</h2>
    <button @click="emitDelete">Delete</button>
  </div>
</template>

<script setup>
const emit = defineEmits(['deleteItem']);
const props = defineProps({
  itemId: Number
});

const emitDelete = () => {
  emit('deleteItem', props.itemId);
};
</script>
