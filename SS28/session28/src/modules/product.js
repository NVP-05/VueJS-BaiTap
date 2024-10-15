import { getAllProduct } from "@/api/productApi";

const products = {
  state: {
    products: [],
  },
  getters: {},
  mutations: {
    getProduct: (state, payload) => {
      state.products = payload;
    },
  },
  actions: {
    getProduct: async ({ commit }) => {
      const data = await getAllProduct();
      commit("getProduct", data);
    },
  },
};

export default products;
