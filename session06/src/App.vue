<template>
  <div>
    <input 
    v-model="valueInput" 
    type="text" 
    placeholder="Thêm nội dung công việc ">
    <button @click="addJob">Thêm</button>
    <div class="list">
      <h1>Danh sách công việc</h1>
      <!-- Hiển thị danh sách công việc  v-for -->
      <ul>
        <li v-for="job in jobs" :key="job.id">
          <input @change="handleChange(job.id)" type="checkbox" name="" id="">
          <span v-if="job.status" class="success">{{job.name}}</span>
          <span v-else> {{job.name}}</span>
          <button @click="handleDelete(job.id)">Xóa</button>
        </li>
      </ul>
    </div>
    <h2>Số công việc được hoàn thành {{completeJob}}</h2>
  </div>
</template>

<script setup>
  import { computed, reactive, ref } from 'vue'
  // Tạo tên công việc
  const valueInput = ref("");
  // Tạo mảng chứa các công việc
  const jobs = reactive(JSON.parse(localStorage.getItem("jobs"))||[]);
  // Khai báo hàm thêm công việc
  const addJob = () => {
    console.log("Tên công việc", valueInput.value);
    let job = {
      name: valueInput.value,
      status: false,
      id: Math.ceil(Math.random()*999999999)
    }
    jobs.push(job)
    console.log("Mảng chứa danh sách công việc", jobs);
    // Lưu danh sách công việc trên local
    localStorage.setItem("jobs", JSON.stringify(jobs));
    valueInput.value="";
  }
  // Tính toán số lượng công việc đã hoàn thành
  const completeJob = computed(()=>(
    jobs.reduce((accumulator, currentValue)=>{
      return accumulator + currentValue.status
    },0)
  ))
  // Hàm đi cập nhật trạng thái của từng công việc
  const handleChange = (id) => {
    console.log("Giá trị id", id);
    // Tìm vị trí công việc có id trong mảng jobs => đi cập nhật status
    let index = jobs.findIndex((item)=>{
      return item.id == id
    })
    console.log("Vị trí của phần tử cần cập nhật: ",index);
    jobs[index].status = !jobs[index].status
    // Sau khi cập nhật được trạng thái công việc cần phải lưu trên local
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }
  // Hàm đi xóa công việc trong jobs
  const handleDelete = (id) => {
    let arrFilter = jobs.filter((item)=>{
      return item.id != id
    })
    jobs.length = 0;
    jobs.push(...arrFilter)
    // Sau khi xóa xong thì lưu trên local
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }

</script>
  
<style>
  .success{
    text-decoration: line-through;
  }
</style>