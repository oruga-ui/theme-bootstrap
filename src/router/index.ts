import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import Home from "../views/Home.vue";

const paths = import.meta.glob("../components/*.vue") as any;
const components = Object.keys(paths)
  .map((c: string) => c.replace(".vue", ""))
  .map((c: string) => c.replace("../components/", ""))
  .map((c: string) => `/${c}`)
  .map((c: string) => {
    const name = c.split("/")[1];
    return {
      name,
      link: c,
    };
  });

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  ...components.map(({ name, link }: any) => ({
    path: link,
    name: name,
    component: () => import("../components" + link + ".vue"),
  })),
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
