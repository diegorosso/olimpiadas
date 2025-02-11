import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue"; // Ahora importamos HomeView
import GalleryComponent from "../components/Galeria.vue";

const routes = [
  { path: "/", name: "home", component: HomeView }, // Cambiamos Hero por HomeView
  { path: "/galeria", name: "Galeria", component: () => import("../components/Galeria.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;