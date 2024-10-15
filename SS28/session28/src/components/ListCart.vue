<template>
  <div class="border p-4 w-1/2">
      <h2 class="text-xl font-bold mb-4">Shopping Cart</h2>
      <div v-for="cart in store.state.carts.carts" :key="cart.id" class="border p-4 mb-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-4">
            <img :src="cart.image" class="w-16 h-16 object-cover" alt="Product image" />
            <div>
              <h3 class="font-bold">{{ cart.name }}</h3>
              <p>Quantity: {{ cart.quantity }}</p>
            </div>
          </div>
          <p>${{ cart.price * cart.quantity }}</p>
        </div>
        <div class="mt-2 flex items-center space-x-4">
          <input type="number" v-model="cart.quantity" class="border w-12 text-center" min="1" />
          <button @click="updateCart(cart.id)" class="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
          <button @click="removeFromCart(cart.id)" class="text-red-500">Remove</button>
        </div>
      </div>

      <div class="border-t pt-4 mt-4">
        <p class="text-lg">Subtotal: ${{ cartTotal }}</p>
        <div v-if="updateMessage" class="bg-green-100 text-green-700 p-2 mt-4">
          {{ updateMessage }}
        </div>
      </div>
  </div>
</template>

<script setup>
  import { onMounted } from 'vue';
  import { useStore } from 'vuex';

  const store = useStore();
  const getCart = async () => {
    store.dispatch("getCart");
  }

  onMounted(()=>{
    getCart();
  });
  

</script>

<style>

</style>