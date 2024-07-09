"use server";

import { signOut } from "@/auth";
import { ERoutes } from "@/types/routes/routeTypes";

export const logout = async () => {
  // use here to add other server actions
  await signOut({ redirectTo: ERoutes.LOGIN });
};
