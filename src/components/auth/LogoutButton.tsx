"use client";
import { logout } from "@/actions/logout";
import React from "react";

interface ILogoutButtonProps {
  children?: React.ReactNode;
}
const LogoutButton = ({ children }: ILogoutButtonProps) => {
  const onClickLogoutButton = () => {
    logout();
  };
  return (
    <span onClick={onClickLogoutButton} className="cursor-pointer">
      {children}
    </span>
  );
};

export default LogoutButton;
