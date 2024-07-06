import React from "react";
import { auth, signOut } from "@/auth";
import { AUTH_ROUTES } from "@/routes";
import { ERoutes } from "@/types/routes/routeTypes";
const SettingsPage = async () => {
  const session = await auth();
  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: ERoutes.LOGIN });
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
    </div>
  );
};

export default SettingsPage;
