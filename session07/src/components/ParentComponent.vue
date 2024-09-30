<template>
  <div>
    <h2>-------- Parent Component --------</h2>
    <p>Parent Company: {{ companyName }}</p>
    <ChildrenComponent :company="companyName" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ChildrenComponent from './ProductChildren.vue';
const companyName = ref('Rikkei Academy');
</script>
