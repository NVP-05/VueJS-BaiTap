// Định nghĩa danh sách các route
import HomePage from "../views/HomePage.vue"
import AboutPage from "../views/AboutPage.vue"
import ContactPage from "../views/ContactPage.vue"
import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/", 
        name: "home",
        alias: ["/home", "/home-page"],
        component: () => 
            import(/* webpackChunkName "home" */"@/views/HomePage.vue")
    },
    {
        path: "/about", 
        name: "about",
        component: () =>
            import(/* webpackChunkName "about" */"@/views/AboutPage.vue")
    },
    {
        path: "/contact", 
        name: "contact",
        // redirect: "/feedback", //Tự động chuyển hướng qua trang feedback khi truy cập vào /contact
        component: () => 
            import(/* webpackChunkName "contact" */"@/views/ContactPage.vue")
    },
];

// Tạo cơ chế định tuyến thông qua hàm createRouter
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior: (to, from, savePosition) => {x
        if (savePosition){
            return savePosition;
        }else{
            return {top: 0, behavior: "smooth"};
        }
    }
});

export default router;