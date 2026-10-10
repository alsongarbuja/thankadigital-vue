const LOGIN_PATH = "/app/login";
const PROTECTED_PREFIXES = ["/app/admin", "/app"];

export default defineNuxtRouteMiddleware((to) => {
  if (to.path === LOGIN_PATH) return;

  const isProtected = PROTECTED_PREFIXES.some(
    (prefix) => to.path === prefix || to.path.startsWith(`${prefix}/`),
  );

  if (!isProtected) return;

  const { loggedIn } = useUserSession();

  if (!loggedIn.value) {
    return navigateTo(LOGIN_PATH);
  }
});