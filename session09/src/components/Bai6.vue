<template>
  <div>
    <p>Sở thích: {{sportLike}}</p>
    <ul>
        <li><input type="checkbox" v-model="sportLike" value="Đá bóng">Đá bóng</li>
        <li><input type="checkbox" v-model="sportLike" value="Bóng rổ">Bóng rổ</li>
        <li><input type="checkbox" v-model="sportLike" value="Bóng chuyền">Bóng chuyền</li>
        <li><input type="checkbox" v-model="sportLike" value="Cầu lông">Cầu lông</li>
    </ul>
  </div>
</template>

<script setup>
    import {ref} from "vue";
    const sportLike = ref([]);
</script>

<style>

</style>