import { createRouter, createWebHistory } from "vue-router";
import Menu from "./components/Menu";
import Admin from "./components/Admin";
import Orders from "./components/Orders";

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: "bg-green-800 text-white",
    routes: [
        {
            path: "/",
            name: "menu",
            component: Menu,
        },
        {
            path: "/admin",
            name: "admin",
            component: Admin,
            children: [
                {
                    path: "orders",
                    name: "orders",
                    component: Orders,
                },
            ],
        },
        {
            redirect: { name: "orders" },
            path: "/admin",
        },
    ],
});

export default router;
