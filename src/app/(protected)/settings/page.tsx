"use client";

import React from "react";
import { logout } from "@/app/actions/logout";
import { useCurrentUser } from "@/hooks/useCurrentUser";
const SettingsPage = () => {
  const user = useCurrentUser();
  const signOutClick = async () => {
    await logout();
  };

  return (
    <div className="bg-white p-10 rounded-xl">
      <button type="submit" onClick={signOutClick}>
        Sign Out
      </button>
    </div>
  );
};

export default SettingsPage;
