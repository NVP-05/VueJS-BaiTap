import { getCart } from "@/api/cartApi";

const carts = {
  state: {
    carts: [],
  },
  mutations: {
    setCart(state, payload) {
      state.carts = payload;
    },
    updateCartQuantity(state, { id, quantity }) {
      const cartItem = state.carts.find(item => item.id === id);
      if (cartItem) {
        cartItem.quantity = quantity;
      }
    },
    removeCartItem(state, id) {
      state.carts = state.carts.filter(item => item.id !== id);
    }
  },
  actions: {
    async fetchCart({ commit }) {
      const data = await getCart();
      commit("setCart", data);
    },
    updateCart({ commit }, { id, quantity }) {
      commit("updateCartQuantity", { id, quantity });
    },
    removeFromCart({ commit }, id) {
      commit("removeCartItem", id);
    }
  }
};

export default carts;
