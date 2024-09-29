<template>
  <div>
    <input v-model="inputValue" type="text"/>
  </div>
</template>

<script setup>
    import { ref, watch } from 'vue'

    const inputValue = ref('')
    const oldValue = ref('')
    watch(inputValue, (newValue, prevValue) => {
    console.log(`Giá trị thay đổi từ "${prevValue}" thành "${newValue}"`)
    oldValue.value = newValue
})

</script>

<style>

</style>