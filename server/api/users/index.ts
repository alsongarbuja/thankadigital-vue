import { getAllUsers } from "~~/server/services/user.service";

/**
 * Event handler to handle the /api/users GET API
 * Returns users list that is published
 * */
export default defineEventHandler(async (event) => {
  return getAllUsers();
});
