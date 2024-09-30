<template>
  <div>
    <h2>Dữ liệu trong component cha</h2>
    <ProductChildren :product="product" />
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import ProductChildren from './ProductChildren.vue';

const product = reactive({
  id: 1,
  name: 'Bưởi Ba Roi',
  price: 12000,
  quantity: 10
});
</script>
