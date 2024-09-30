<template>
  <div class="modal" v-if="isVisible">
    <div class="modal-content">
      <h3>{{ title }}</h3>
      <slot></slot>
      <button @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: 'Thông báo từ hệ thống',
  },
});

const isVisible = ref(true);
const closeModal = () => {
  isVisible.value = false;
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}
</style>
