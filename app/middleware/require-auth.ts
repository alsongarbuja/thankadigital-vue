const PROTECTED_RESOURCE_PATTERN =
  /^\/api\/(projects|careers|users|teams)(\/|$)/;
const MUTATING_METHODS = new Set(["POST", "PUT", "PATCH", "DELETE"]);

export default defineEventHandler(async (event) => {
  const path = event.path ?? "";

  if (
    !MUTATING_METHODS.has(event.method) ||
    !PROTECTED_RESOURCE_PATTERN.test(path)
  ) {
    return;
  }

  await requireUserSession(event);
});
