<template>
    <div>
      <h2>Danh sách người dùng</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Tên</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Địa chỉ</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.userName }}</td>
            <td>{{ user.gender }}</td>
            <td>{{ user.dateOfBirth }}</td>
            <td>{{ user.address }}</td>
            <td>
              <button @click="editUser(user.id)">Sửa</button>
              <button @click="deleteUser(user.id)">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { useStore } from 'vuex';
  
  const store = useStore();
  const users = store.state.user;
  
  </script>
  
  <style >
    
  </style>
  