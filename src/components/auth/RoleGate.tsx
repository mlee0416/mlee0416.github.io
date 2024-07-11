"use client";
import { useCurrentRole } from "@/hooks/useCurrentRole";
import { UserRole } from "@prisma/client";
import React, { ReactNode } from "react";
import FormError from "../forms/FormError";

interface IRoleGateProps {
  children: ReactNode;
  allowedRole: UserRole;
}
const RoleGate = ({ children, allowedRole }: IRoleGateProps) => {
  const role = useCurrentRole();
  if (role !== allowedRole) {
    return (
      <FormError message="You do not have permission to viewthis content" />
    );
  }

  return <>{children}</>;
};

export default RoleGate;
