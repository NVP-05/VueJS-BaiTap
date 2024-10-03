<template>
  <v-container class="mt-8">
    <v-card class="p-6">
      <v-row>
        <!-- Tabs Header -->
        <v-col>
          <v-tabs v-model="tab" background-color="teal lighten-5" grow>
            <v-tab class="capitalize">
              <v-icon left>mdi-cart</v-icon> Item Cart
            </v-tab>
            <v-tab class="capitalize">
              <v-icon left>mdi-credit-card</v-icon> Billing
            </v-tab>
            <v-tab class="capitalize">
              <v-icon left>mdi-card</v-icon> Payment
            </v-tab>
          </v-tabs>
        </v-col>
      </v-row>

      <!-- Cart Content -->
      <v-row v-if="tab === 0" class="mt-4">
        <v-col>
          <v-card class="p-4 mb-4">
            <v-row>
              <v-col cols="2">
                <v-img :src="product.image" alt="product" contain></v-img>
              </v-col>
              <v-col>
                <h3>{{ product.name }}</h3>
                <p class="text-sm">Size: {{ product.size }} | Color: {{ product.color }}</p>
              </v-col>
              <v-col class="text-right">
                <div class="text-lg font-bold">{{ product.price }}</div>
                <del class="text-gray-400">{{ product.oldPrice }}</del>
              </v-col>
              <v-col>
                <v-btn icon @click="decreaseQuantity">
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
                <span>{{ quantity }}</span>
                <v-btn icon @click="increaseQuantity">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-col>
              <v-col class="text-right">
                <div>{{ product.price * quantity }}</div>
              </v-col>
              <v-col class="text-right">
                <v-btn icon @click="removeItem">
                  <v-icon color="red">mdi-delete</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

      <!-- Order Summary -->
      <v-row class="mt-8">
        <v-col cols="8" offset="2">
          <v-card class="p-4">
            <h3>Order Summary</h3>
            <v-row>
              <v-col>Subtotal</v-col>
              <v-col class="text-right">{{ product.price * quantity }}</v-col>
            </v-row>
            <v-row>
              <v-col>Discount (5%)</v-col>
              <v-col class="text-right text-red-500">-{{ discount }}</v-col>
            </v-row>
            <v-row>
              <v-col>Shipping Charges</v-col>
              <v-col class="text-right">-</v-col>
            </v-row>
            <v-row class="font-bold">
              <v-col>Total</v-col>
              <v-col class="text-right">{{ totalPrice }}</v-col>
            </v-row>
            <v-btn color="orange" class="mt-4">Checkout</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue';

const tab = ref(0);
const quantity = ref(1);

const product = {
  name: "Cute Soft Teddybear",
  size: "8",
  color: "Dark Red",
  price: 200,
  oldPrice: 175,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLHFH3hv085AjohiCLKxhCfMzDYEyzsf5Law&s",
};

const discount = computed(() => (product.price * quantity.value * 0.05).toFixed(2));
const totalPrice = computed(() => (product.price * quantity.value - discount.value).toFixed(2));

const increaseQuantity = () => {
  quantity.value++;
};

const decreaseQuantity = () => {
  if (quantity.value > 1) quantity.value--;
};

const removeItem = () => {
  // Logic to remove item from cart
};
</script>

<style scoped>
.v-btn {
  border-radius: 50px;
}
</style>
