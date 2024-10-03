<template>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="4"
      rounded="circle"
    ></v-pagination>

    <v-pagination
      v-model="page"
      :length="4"
      rounded="0"
    ></v-pagination>
  </div>
</template>
<script setup>
    import {ref} from "vue";
    const page = (1);
</script>


