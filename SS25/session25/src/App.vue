<template>
  <div class="flex justify-center items-center h-screen bg-gray-100">
    <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
      <h1 class="text-2xl font-bold text-center mb-4">Quản lý công việc</h1>
      
      <div class="mb-4">
        <input
          
          class="border border-gray-300 rounded-lg p-2 w-full focus:outline-none"
          placeholder="Nhập tên công việc"
        />
        <br>
        <br>
        <button
          
          class="bg-blue-500 text-white p-2 w-full rounded-lg hover:bg-blue-600"
        >
          Thêm công việc
        </button>
      </div>

      <div class="flex justify-around mb-4">
        <button
          @click="filterJobs('all')"
          class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Tất cả
        </button>
        <button
          @click="filterJobs('completed')"
          class="bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400"
        >
          Hoàn thành
        </button>
        <button
          @click="filterJobs('active')"
          class="bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400"
        >
          Đang thực hiện
        </button>
      </div>

      <ul>
        <li
          v-for="job in jobs"
          :key="job.id"
          class="flex justify-between items-center mb-2"
        >
          <div>
            <input type="checkbox" v-model="job.status" class="mr-2" />
            <span :class="{ 'line-through': job.status }">{{ job.name }}</span>
          </div>
          <div>
            <button @click="editJob(job.id)" class="text-yellow-500 mr-2">✏️</button>
            <button @click="deleteJob(job.id)" class="text-red-500">🗑️</button>
          </div>
        </li>
      </ul>

      <div class="flex justify-between mt-4">
        <button
          @click="deleteCompletedTasks"
          class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Xóa công việc hoàn thành
        </button>
        <button
          @click="deleteAllTasks"
          class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Xóa tất cả công việc
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import axios from "axios";
  import {computed, onMounted, ref} from "vue";

  const jobs = ref([]);
  const filter = ref("all");

  const getAllJobs = async () => {
    const res = await axios.get("http://localhost:3000/jobs");
    jobs.value = res.data;
  }

  onMounted(()=>{
    getAllJobs();
  })

  const filterJobs = (selectedFilter) => {
    filter.value = selectedFilter;
    console.log(filter.value);
    
  }

  computed( async () => {
    if(filter.value == 'completed'){
      return jobs.filter((job)=> job.status == true);
    }else if(filter.value == 'active'){
      return jobs.filter((job)=> job.status == false);
    }else{
      return jobs
    }
  });


</script>

<style>

</style>