<template>
  <div>
    <h2>Thêm mới tài khoản</h2>
    <label for="">Họ và tên</label>
    <br>
    <input type="text" v-model="name">
    <br>
    <label for="">Email</label>
    <br>
    <input type="email" v-model="email">
    <br>
    <label for="">Mật khẩu</label>
    <br>
    <input type="password" v-model="password">
    <br>
    <label for="">Nhập lại mật khẩu</label>
    <br>
    <input type="password" v-model="rePassword">
    <br>
    <button @click="handleClick">Đăng kí</button>
  </div>
</template>

<script setup>
    import {ref, reactive} from "vue";
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const rePassword = ref("");

    const handleClick = () => {
        let newUser = reactive({
            userName: name.value,
            Email: email.value,
            Password: password.value,
            RePassword: rePassword.value
        })
        console.log(newUser);
    }
</script>

<style>

</style>