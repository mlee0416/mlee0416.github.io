import Userinfo from "@/components/user-info/UserInfo";
import { currentUser } from "@/lib/auth";
import React from "react";

const Server = async () => {
  const user = await currentUser();
  return (
    <div className="flex flex-wrap">
      <Userinfo user={user} label="User Information" />
    </div>
  );
};

export default Server;
