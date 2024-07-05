import React from "react";
import { auth, signOut } from "@/auth";
import { AUTH_ROUTES } from "@/routes";
const SettingsPage = async () => {
  const session = await auth();
  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";
          //   AUTH_ROUTES -> "/auth/login"
          await signOut({ redirectTo: AUTH_ROUTES[0] });
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
    </div>
  );
};

export default SettingsPage;
