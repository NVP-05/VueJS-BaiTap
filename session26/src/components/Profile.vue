<template>
    <div>
      <h2>Thông tin cá nhân</h2>
      <p>Id: {{ user.id }}</p>
      <p>Họ và tên: {{ user.userName }}</p>
      <p>Giới tính: {{ user.gender }}</p>
      <p>Ngày sinh: {{ user.dateOfBirth }}</p>
      <p>Địa chỉ: {{ user.address }}</p>
    </div>
  </template>
  
  <script setup>
  import { useStore } from 'vuex';
  
  const store = useStore();
  const user = store.state.user[0];
  
  </script>
  
  <style>
  </style>
  