import { getAllProduct } from "@/api/productApi";

const products = {
  state: {
    products: [],
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      const data = await getAllProduct();
      commit("setProducts", data);
    }
  }
};

export default products;
