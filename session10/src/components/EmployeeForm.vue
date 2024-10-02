<template>
  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <button @click="close" class="float-right text-gray-500">X</button>
      <h2 class="text-xl font-semibold mb-4">
        {{ isEditing ? 'Sửa thông tin nhân viên' : 'Thêm mới nhân viên' }}
      </h2>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label for="name" class="block font-medium">Họ và tên:</label>
          <input
            id="name"
            v-model="employeeData.name"
            required
            class="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>

        <div>
          <label for="dob" class="block font-medium">Ngày sinh:</label>
          <input
            id="dob"
            type="date"
            v-model="employeeData.dob"
            required
            class="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>

        <div>
          <label for="email" class="block font-medium">Email:</label>
          <input
            id="email"
            type="email"
            v-model="employeeData.email"
            required
            class="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>

        <div>
          <label for="address" class="block font-medium">Địa chỉ:</label>
          <input
            id="address"
            v-model="employeeData.address"
            class="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {{ isEditing ? 'Cập nhật' : 'Thêm mới' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  employee: Object,
});

const emit = defineEmits(['close', 'add']);

const close = () => {
  emit('close');
};

const employeeData = ref({
  name: '',
  dob: '',
  email: '',
  address: '',
});

const isEditing = ref(false);

if (props.employee) {
  isEditing.value = true;
  employeeData.value = { ...props.employee };
}

const handleSubmit = () => {
  if (!employeeData.value.name || !employeeData.value.email) {
    alert('Họ và tên và Email không được để trống!');
    return;
  }

  if (isEditing.value) {
    Object.assign(props.employee, employeeData.value);
  } else {
    emit('add', { ...employeeData.value, id: Date.now(), status: 'Đang hoạt động' });
  }

  emit('close');
};
</script>

<style scoped>
</style>
