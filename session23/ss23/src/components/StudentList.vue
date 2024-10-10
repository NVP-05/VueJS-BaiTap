<template>
  <div>

    <div>
    <ul>
        <li v-for="student in students" :key="student.id">
            {{ student.student_name }}
            <button @click="updateStudentById(student.id)">Sửa</button>
            <button @click="removeById(student.id)">Xóa</button>
        </li>
    </ul>
    <button @click="createStudent">Thêm student</button>
  </div>

    <br>
    <br>
    <br>

    <div>

        <div class="bg-slate-400 flex justify-between items-center mb-4">
            <h1 class="text-xl font-bold text-gray-800">Quản lý sinh viên</h1>
            <button
                class="bg-green-500 text-white px-4 py-2 rounded flex items-center"
                @click="addStudent" 
            >
                <span class="mr-2">Thêm mới sinh viên</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                </svg>
            </button>
    </div>

    <!-- Student Table -->
    <table class="w-full border-collapse bg-white shadow-md rounded-lg">
      <thead>
        <tr>
          <th class="p-3 text-left"><input type="checkbox" /></th>
          <th class="p-3 text-left">Tên sinh viên</th>
          <th class="p-3 text-left">Email</th>
          <th class="p-3 text-left">Địa chỉ</th>
          <th class="p-3 text-left">Số điện thoại</th>
          <th class="p-3 text-left">Lựa chọn</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(student, index) in students" :key="index" class="border-b">
          <td class="p-3"><input type="checkbox" /></td>
          <td class="p-3">{{ student.student_name }}</td>
          <td class="p-3">{{ student.email }}</td>
          <td class="p-3">{{ student.address }}</td>
          <td class="p-3">{{ student.phone }}</td>
          <td class="p-3 flex space-x-2 ">
            <button 
            class="bg-orange-300 w-12 h-8 rounded-md"
            @click="editStudent(student)">
              Sửa
            </button>
            <button 
            class="bg-red-400 w-12 h-8 rounded-md"
            @click="deleteStudent(student.id)">
              Xóa
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    </div>


  </div>
</template>

<script setup>
    import axios from 'axios';
    import { onMounted, ref } from 'vue';

    const students = ref([]);
    const getAllStudent = async () => {
        const res = await axios.get("http://localhost:3000/students");
        students.value = res.data;
    }

    onMounted(()=>{
        getAllStudent();
    })

    const getStudentById = async () => {
        const res = await axios.get(`http://localhost:3000/students/1`);
        console.log(res.data);
    }
    getStudentById();

    const removeById = async (id) => {
        const res = await axios.get(`http://localhost:3000/students/${id}`);
        await axios.delete(`http://localhost:3000/students/${id}`);
        console.log(res.data);
        getAllStudent();
    }

    const createStudent = async () => {
        const newStudent = {
            student_name: "Nguyễn Văn Minh",
            email: "mkPhuc1234567@gmail.com",
            address: "Hà Đông",
            phone: "0922112238",
            status: true,
            created_at: "2024-10-01",
        }
        await axios.post("http://localhost:3000/students", newStudent);
        getAllStudent();
    }

    const updateStudentById = async (id) => {
        const updateStudent = {
            student_name: "Nguyễn Văn Thanh",
            email: "mkThanh1234567@gmail.com",
            address: "Thanh Hóa",
            phone: "0963820086",
            status: true,
            created_at: "2024-10-11",
        }
        await axios.put(`http://localhost:3000/students/${id}`, updateStudent);
        getAllStudent();
    }


</script>

<style>

</style>