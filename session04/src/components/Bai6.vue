<template>
  <div>
    <input v-model.number="inputValue" type="number" />
    <button @click="addToCart">Add to cart</button>
    <p><b>Tổng tiền trong giỏ hàng:</b> {{ inputValue }}</p>
  </div>
</template>

<script setup>
    import { ref, computed } from 'vue'

    const inputValue = ref(0)
    const cartTotal = ref(0)
    const addToCart = () => {
        cartTotal.value += inputValue.value
        inputValue.value = 0 
    }
    const totalCartValue = computed(() => cartTotal.value)
</script>

<style>

</style>