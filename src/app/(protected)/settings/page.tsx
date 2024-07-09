"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { logout } from "@/app/actions/logout";
const SettingsPage = () => {
  const session = useSession();
  const signOutClick = async () => {
    await logout();
  };
  
  return (
    <div>
      {JSON.stringify(session)}

      <button type="submit" onClick={signOutClick}>
        Sign Out
      </button>
    </div>
  );
};

export default SettingsPage;
