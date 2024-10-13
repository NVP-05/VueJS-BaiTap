<template>
    <div>
      <h2>Danh sách sản phẩm</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng (kg)</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.productName }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.quantity }}</td>
            <td>
              <button @click="editProduct(product.id)">Sửa</button>
              <button @click="deleteProduct(product.id)">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { useStore } from 'vuex';
  
  const store = useStore();
  const products = store.state.products;

  </script>
  
  <style >
    
  </style>
  