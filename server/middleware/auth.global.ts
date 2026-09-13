import { navigateTo } from "nuxt/app";

const PROTECTED_PREFIXES = ["/admin", "/app"];

export default defineNuxtRouteMiddleware((to) => {
  const isProtected = PROTECTED_PREFIXES.some(
    (prefix) => to.path === prefix || to.path.startsWith(`${prefix}/`),
  );

  if (!isProtected) return;

  const { loggedIn } = useUserSession();

  if (!loggedIn.value) {
    return navigateTo("/app/login");
  }
});
