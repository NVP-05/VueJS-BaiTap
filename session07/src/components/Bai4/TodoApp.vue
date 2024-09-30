<template>
  <div>
    <h2>-------- TodoApp Component --------</h2>
    <p>Id to delete: {{ idToDelete }}</p>
    <TodoItem @deleteItem="handleDeleteItem" :itemId="1" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TodoItem from './TodoItem.vue';

const idToDelete = ref(null);
const handleDeleteItem = (id) => {
  idToDelete.value = id;
};
</script>
