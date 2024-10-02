<template>
  <div class="container mx-auto">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold">Quản lý mượn trả sách</h1>

      <div>
        <!-- Filter dropdown -->
        <select v-model="filterStatus" class="border border-gray-300 p-2 rounded">
          <option value="">Lọc theo trạng thái</option>
          <option value="Đã trả">Đã trả</option>
          <option value="Chưa trả">Chưa trả</option>
        </select>
        <button @click="openModal" class="bg-blue-500 text-white px-4 py-2 rounded ml-4">Thêm thông tin</button>
      </div>
    </div>

    <!-- Table displaying the book borrowing info -->
    <table class="min-w-full bg-white mt-4">
      <thead>
        <tr>
          <th class="py-2">STT</th>
          <th class="py-2">Tên sách</th>
          <th class="py-2">Người mượn</th>
          <th class="py-2">Ngày mượn</th>
          <th class="py-2">Ngày trả</th>
          <th class="py-2">Trạng thái</th>
          <th class="py-2">Chức năng</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(book, index) in filteredBooks" :key="book.id">
          <td>{{ index + 1 }}</td>
          <td>{{ book.title }}</td>
          <td>{{ book.borrower }}</td>
          <td>{{ book.borrowDate }}</td>
          <td>{{ book.returnDate }}</td>
          <td>
            <span :class="book.status === 'Đã trả' ? 'bg-green-500 text-white px-2 py-1 rounded' : 'bg-red-500 text-white px-2 py-1 rounded'">
              {{ book.status }}
            </span>
          </td>
          <td>
            <button @click="editBook(book.id)" class="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Sửa</button>
            <button @click="deleteBook(book.id)" class="bg-red-500 text-white px-2 py-1 rounded">Xóa</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal Component -->
    <BookFormModal v-if="isModalOpen" @close="closeModal" @save="saveBook" :bookData="bookToEdit"/>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import BookFormModal from './BookFormModal.vue';

const books = ref([]);
const isModalOpen = ref(false);
const bookToEdit = ref(null);
const filterStatus = ref('');  // State for filter

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  bookToEdit.value = null;
  isModalOpen.value = false;
};

const saveBook = (book) => {
  const existingBook = books.value.find(b => b.id === book.id);
  if (existingBook) {
    Object.assign(existingBook, book);  // Update existing book
  } else {
    books.value.push(book);  // Add new book
  }
  localStorage.setItem('books', JSON.stringify(books.value));
  closeModal();
};

// Load data from localStorage
onMounted(() => {
  const savedBooks = JSON.parse(localStorage.getItem('books')) || [];
  books.value = savedBooks;
});

const editBook = (id) => {
  bookToEdit.value = books.value.find(book => book.id === id);
  openModal();
};

const deleteBook = (id) => {
  books.value = books.value.filter(book => book.id !== id);
  localStorage.setItem('books', JSON.stringify(books.value));
};

// Computed property for filtered books
const filteredBooks = computed(() => {
  if (filterStatus.value) {
    return books.value.filter(book => book.status === filterStatus.value);
  }
  return books.value;
});
</script>

<style scoped>
.container {
  padding: 20px;
}
</style>
