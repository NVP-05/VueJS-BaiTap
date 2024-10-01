<template>
  <div>
    <h2>Thêm mới sản phẩm</h2>
    <label for="">Mã sản phẩm</label>
    <br>
    <input type="text" v-model="code">
    <br>
    <label for="">Tên sản phẩm</label>
    <br>
    <input type="text" v-model="name">
    <br>
    <label for="">Giá</label>
    <br>
    <input type="text" v-model="prices">
    <br>
    <label for="">Số lượng</label>
    <br>
    <input type="number" v-model="quantitys">
    <br>
    <button @click="handleClick">Thêm mới</button>
  </div>
</template>

<script setup>
    import {ref, reactive} from "vue";
    const code = ref("");
    const name = ref("");
    const prices = ref("");
    const quantitys = ref(0);

    const handleClick = () => {
        let newProduct = reactive({
            productCode: code.value,
            productName: name.value,
            price: prices.value,
            quantity: quantitys.value
        })
        console.log(newProduct);
    }
</script>

<style>

</style>