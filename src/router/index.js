import { createRouter, createWebHashHistory } from "vue-router";
import MyMain from "@/views/MyMain.vue";
import MyProducts from "@/views/MyProducts.vue";
import MyAbout from "@/views/MyAbout.vue";
import MyCart from "@/views/MyCart.vue";
import MyContact from "@/views/MyContact.vue";

const routes = [
  {
    name: "my-main",
    path: "/",
    component: MyMain,
  },
  {
    name: "my-products",
    path: "/products",
    component: MyProducts,
  },
  {
    name: "my-about",
    path: "/about",
    component: MyAbout,
  },
  {
    name: "my-cart",
    path: "/cart",
    component: MyCart,
  },
  {
    name: "my-contact",
    path: "/contact",
    component: MyContact,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
