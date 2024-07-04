"use client";
import React from "react";
import { CardWrapper } from "./CardWrapper";

const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcom Back"
      backButtonHref="/auth/register"
      backButtonLabel="Don't have an account?"
      showSocial
    >
      LoginForm
    </CardWrapper>
  );
};

export default LoginForm;
