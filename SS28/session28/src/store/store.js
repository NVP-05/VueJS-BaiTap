import { createStore } from 'vuex';
import products from './product';
import carts from './cart';

const store = createStore({
  modules: {
    products,
    carts,
  },
});

export default store;
