import { getCart } from "@/api/cartApi";

const carts = {
  state: {
    carts: [],
  },
  getters: {},
  mutations: {
    getCart: (state, payload) => {
      state.carts = payload;
    },
  },
  actions: {
    getCart: async ({ commit }) => {
      const data = await getCart();
      commit("getCart", data);
    },
  },
};

export default carts;
