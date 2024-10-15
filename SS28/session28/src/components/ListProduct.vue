<template>
  <div class="border p-4 w-1/2">
    <h2 class="text-xl font-bold mb-4">List Product</h2>
    <div v-for="product in store.state.products.products" :key="product.id" class="border p-4 mb-4">
      <div class="flex gap-4 items-center">
        <div>
        <img :src="product.image" class="w-16 h-16 object-cover" alt="Product image" />
        </div>
        <div>
          <h3 class="font-bold">{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <p>Total: {{ product.total }}</p>
        </div>
      </div>
      <div class="mt-4 flex items-center space-x-4">
        <input type="number" v-model="product.total" class="border w-12 text-center" min="1" />
        <p>Price: ${{ product.price }}</p>
        <button @click="addToCart(product.id)" class="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const getAllProduct = async () => {
  store.dispatch("getProduct");
}
onMounted(()=>{
  getAllProduct();
});
</script>

<style>

</style>