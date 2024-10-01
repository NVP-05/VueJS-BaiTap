<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <h2 class="text-2xl font-semibold mb-4">Nhân viên</h2>
    <div class="flex justify-between items-center mb-4">
      <button
        @click="openForm"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Thêm mới nhân viên
      </button>
      <input
        v-model="search"
        placeholder="Tìm kiếm theo email"
        class="border border-gray-300 rounded px-4 py-2"
      />
    </div>

    <table class="min-w-full bg-white border border-gray-300">
      <thead class="bg-gray-50">
        <tr>
          <th class="border px-4 py-2">STT</th>
          <th class="border px-4 py-2">Họ và tên</th>
          <th class="border px-4 py-2">Ngày sinh</th>
          <th class="border px-4 py-2">Email</th>
          <th class="border px-4 py-2">Địa chỉ</th>
          <th class="border px-4 py-2">Trạng thái</th>
          <th class="border px-4 py-2">Chức năng</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(employee, index) in filteredEmployees"
          :key="employee.id"
          class="hover:bg-gray-100"
        >
          <td class="border px-4 py-2 text-center">{{ index + 1 }}</td>
          <td class="border px-4 py-2">{{ employee.name }}</td>
          <td class="border px-4 py-2">{{ employee.dob }}</td>
          <td class="border px-4 py-2">{{ employee.email }}</td>
          <td class="border px-4 py-2">{{ employee.address }}</td>
          <td
            class="border px-4 py-2 text-center"
            :class="employee.status === 'Đang hoạt động' ? 'text-green-600' : 'text-red-600'"
          >
            {{ employee.status }}
          </td>
          <td class="border px-4 py-2 flex justify-around">
            <button
              @click="blockEmployee(employee)"
              class="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
            >
              {{ employee.status === 'Đang hoạt động' ? 'Chặn' : 'Bỏ chặn' }}
            </button>
            <button
              @click="editEmployee(employee)"
              class="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
            >
              Sửa
            </button>
            <button
              @click="deleteEmployee(employee)"
              class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Xóa
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="mt-4 text-right">
      <select class="border border-gray-300 rounded px-2 py-1">
        <option>Hiển thị 10 bản ghi trên trang</option>
      </select>
    </div>
    <EmployeeForm v-if="showForm" :employee="selectedEmployee" @close="closeForm" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import EmployeeForm from './EmployeeForm.vue';

const search = ref('');
const employees = ref([
  { id: 1, name: 'Nguyễn Văn A', dob: '28/02/1990', email: 'nvana@gmail.com', address: 'Ba Đình, Hà Nội', status: 'Đang hoạt động' },
  { id: 2, name: 'Trần Thị B', dob: '15/07/1985', email: 'ttb@gmail.com', address: 'Cầu Giấy, Hà Nội', status: 'Ngừng hoạt động' },
  // Add more employees here
]);
const showForm = ref(false);
const selectedEmployee = ref(null);

const filteredEmployees = computed(() =>
  employees.value.filter((employee) =>
    employee.email.toLowerCase().includes(search.value.toLowerCase())
  )
);

const openForm = () => {
  selectedEmployee.value = null;
  showForm.value = true;
};

const closeForm = () => {
  showForm.value = false;
};

const blockEmployee = (employee) => {
  employee.status = employee.status === 'Đang hoạt động' ? 'Ngừng hoạt động' : 'Đang hoạt động';
};

const editEmployee = (employee) => {
  selectedEmployee.value = employee;
  showForm.value = true;
};

const deleteEmployee = (employee) => {
  employees.value = employees.value.filter((e) => e.id !== employee.id);
};
</script>

<style scoped>
.text-green-600 {
  color: #22c55e;
}

.text-red-600 {
  color: #ef4444;
}
</style>
