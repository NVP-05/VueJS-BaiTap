import { createStore } from "vuex";

const store = createStore({
  state: {
    count: 0,
    randomNumbers: [],
    company: "Rikkei Academy",
    user: [
      {
        id: 1,
        userName: "Nguyễn Văn A",
        gender: "Nam",
        dateOfBirth: "20/11/2023",
        address: "Thanh Xuân, Hà Nội",
      },
      {
        id: 2,
        userName: "Nguyễn Thị B",
        gender: "Nữ",
        dateOfBirth: "20/11/2023",
        address: "Cầu Giấy, Hà Nội",
      },
    ],
    products: [
      {
        id: 1,
        productName: "Cam sành",
        price: "20.000 đ",
        quantity: 10,
      },
      {
        id: 2,
        productName: "Bưởi ba roi",
        price: "50.000 đ",
        quantity: 15,
      },
    ],
    mutations: {
      increment(state) {
        state.count++;
      },
      decrement(state) {
        state.count--;
      },
      addRandomNumber(state, number) {
        state.randomNumbers.push(number);
      },
      changeCompany(state) {
        state.company =
          state.company === "Rikkei Academy" ? "RikkeiSoft" : "Rikkei Academy";
      },
    },
    actions: {
      increment({ commit }) {
        commit("increment");
      },
      decrement({ commit }) {
        commit("decrement");
      },
      generateRandomNumber({ commit }) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        commit("addRandomNumber", randomNumber);
      },
    },
  },
});

export default store;
