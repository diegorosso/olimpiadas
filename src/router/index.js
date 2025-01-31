import { createRouter, createWebHistory } from "vue-router";
import GalleryComponent from "../components/Galeria.vue";
import Home from "../components/Hero.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/galeria", name: "galeria", component: GalleryComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
