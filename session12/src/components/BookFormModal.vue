<template>
  <div class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
    <div class="bg-white p-6 rounded shadow-lg w-96">
      <h2 class="text-xl font-bold mb-4">Thêm thông tin mượn sách</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label class="block mb-1">Tên sách</label>
          <input v-model="book.title" type="text" class="border border-gray-300 p-2 w-full" required />
        </div>
        <div class="mb-4">
          <label class="block mb-1">Tên người mượn</label>
          <input v-model="book.borrower" type="text" class="border border-gray-300 p-2 w-full" required />
        </div>
        <div class="mb-4">
          <label class="block mb-1">Ngày mượn</label>
          <input v-model="book.borrowDate" type="date" class="border border-gray-300 p-2 w-full" required />
        </div>
        <div class="mb-4">
          <label class="block mb-1">Ngày trả</label>
          <input v-model="book.returnDate" type="date" class="border border-gray-300 p-2 w-full" required />
        </div>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Thêm</button>
        <button @click="close" type="button" class="bg-gray-500 text-white px-4 py-2 rounded ml-2">Hủy</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
const props = defineProps(['bookData']);
const emit = defineEmits(['save', 'close']);

const book = ref({
  title: '',
  borrower: '',
  borrowDate: '',
  returnDate: '',
  status: 'Chưa trả'
});

const submitForm = () => {
  if (new Date(book.value.borrowDate) > new Date(book.value.returnDate)) {
    alert('Ngày mượn không được lớn hơn ngày trả!');
    return;
  }
  emit('save', { ...book.value, id: Date.now() });
};

const close = () => {
  emit('close');
};

watchEffect(() => {
  if (props.bookData) {
    Object.assign(book.value, props.bookData);
  }
});
</script>

<style scoped>
.fixed {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
