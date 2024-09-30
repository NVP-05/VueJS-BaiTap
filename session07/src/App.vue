<template>
  <div>
    <ParentCompoent></ParentCompoent>
    <Bai2></Bai2>
    <Bai3></Bai3>
    <Bai4></Bai4>

    <div id="app">
      <Modal :title="'Thông báo từ hệ thống'">
      Đây là nội dung của modal. Bạn có thể đóng modal bằng cách nhấn vào nút 'Close'.
      </Modal>
  </div>

  <div id="app">
    <Card>
      <template #header>
        Thông tin sản phẩm
      </template>
      <template #body>
        Đây là mô tả ngắn gọn về sản phẩm này. Sản phẩm có các tính năng nổi bật và giá cả hợp lý.
      </template>
      <template #footer>
        <button @click="handleClick">Xem chi tiết</button>
      </template>
    </Card>
  </div>

  </div>
  
</template>

<script setup>
  import ParentCompoent from "./components/ParentComponent.vue"
  import Bai2 from "./components/Bai2/ProductParent.vue"
  import Bai3 from "./components/Bai3/CountParent.vue"
  import Bai4 from "./components/Bai4/TodoApp.vue"
  import Modal from './components/Bai5/Modal.vue';
  import Card from './components/Bai6/Card.vue';


  const handleClick = () => {
    alert('Chi tiết sản phẩm được hiển thị!');
  };
</script>

<style>

</style>