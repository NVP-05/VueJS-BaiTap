<template>
  <div>
    <h2>Dữ liệu trong component con</h2>
    <p>Id: {{ product.id }}</p>
    <p>Product name: {{ product.name }}</p>
    <p>Price: {{ product.price }} đ</p>
    <p>Quantity: {{ product.quantity }}</p>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
});
</script>
