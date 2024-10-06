import { createWebHistory, createRouter } from "vue-router";

import Bai1 from "../components/Bai1.vue";
import Bai2 from "../components/Bai2.vue";
import Bai3 from "../components/Bai3.vue";
import Bai4 from "../components/Bai4.vue";
import Bai5 from "../components/Bai5.vue";
import Product from "../components/Bai7/Product.vue";
import Detail from "../components/Bai7/Detail.vue";
import Dashboard from '../components/Bai8/Dashboard.vue'
import Account from '../components/Bai8/Account.vue'
import Navbar from '../components/Bai8/Navbar.vue'

const routes = [
  { path: "/", component: Bai1 },
  { path: "/contact", component: Bai2 },
  { path: "/register", component: Bai3 },
  { path: "/login", component: Bai4 },
  { path: "/:pathMatch(.*)*", component: Bai5 },
  { path: "/product", component: Product },
  { path: "/detail", component: Detail },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/account', name: 'Account', component: Account },
  { path: '/products', name: 'Product', component: Product },
  { path: '/navbar',  component: Navbar },
]
export const router = createRouter({
  history: createWebHistory(),
  routes,
});
