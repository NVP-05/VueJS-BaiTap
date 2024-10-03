<template>
  <v-container class="mt-8">
    <v-row>
      <v-col cols="6">
        <v-img :src="product.image" alt="product" class="rounded-md"></v-img>
        <!-- Image Thumbnails -->
        <v-row class="mt-4">
          <v-col v-for="(image, index) in product.thumbnails" :key="index" cols="2">
            <v-img :src="image" class="rounded-md" contain></v-img>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-row>
          <v-col>
            <h2>{{ product.name }}</h2>
            <p class="text-gray-400">{{ product.description }}</p>
          </v-col>
        </v-row>
        <v-row class="my-4">
          <v-col>
            <span class="font-bold">{{ product.price }}</span>
            <del class="text-gray-400">{{ product.oldPrice }}</del>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <p>Colors</p>
            <v-chip-group>
              <v-chip v-for="(color, index) in product.colors" :key="index">{{ color }}</v-chip>
            </v-chip-group>
          </v-col>
          <v-col>
            <p>Quantity</p>
            <v-btn icon @click="decreaseQuantity">
              <v-icon>mdi-minus</v-icon>
            </v-btn>
            <span>{{ quantity }}</span>
            <v-btn icon @click="increaseQuantity">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="mt-8">
          <v-btn color="orange" class="mr-4">Buy Now</v-btn>
          <v-btn color="cyan">Add to Cart</v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const quantity = ref(1);

const product = {
  name: "Cute Soft Teddybear",
  price: 200,
  oldPrice: 175,
  description: "Mô tả sản phẩm đáng yêu",
  colors: ["Red", "Blue", "Yellow"],
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLHFH3hv085AjohiCLKxhCfMzDYEyzsf5Law&s",
  thumbnails: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsj0UUvL90L5O_Q8fouPDSYCcsEEURSh4CDA&s",
    "https://thuviensach.vn/img/news/2022/11/larger/7867-nhung-nguoi-khon-kho-1.jpg?v=9309",
    "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/nhung_nguoi_khon_kho_hop_3_cuon/2022_06_07_15_45_42_9-390x510.jpg",
    "https://product.hstatic.net/200000017360/product/nhung-nguoi-khon-kho_tap1_e22746091cc14140a129477e828d17bc.jpg",
    "https://upload.wikimedia.org/wikipedia/vi/b/b0/Les-miserables-movie-poster1.jpg",
  ],
};

const increaseQuantity = () => {
  quantity.value++;
};

const decreaseQuantity = () => {
  if (quantity.value > 1) quantity.value--;
};
</script>

<style scoped>
.v-btn {
  border-radius: 50px;
}
</style>
