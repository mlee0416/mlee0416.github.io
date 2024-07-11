import LoginForm from "@/components/auth/LoginForm";
import React from "react";
import packageJSON from "@/../package.json";
const Login = () => {
  return (
    <div className="space-y-4">
      <LoginForm />
      <p className="w-full flex justify-end">v.{packageJSON.version}</p>
    </div>
  );
};

export default Login;
