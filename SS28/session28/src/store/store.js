import { createStore } from "vuex";
import products from "../modules/product";
import carts from "../modules/cart";

const store = createStore({
  modules: {
    products: products,
    carts: carts,
  },
});

export default store;
