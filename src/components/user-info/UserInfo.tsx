import React from "react";
import { ExtendedUser } from "../../../next-auth";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";

interface IUserInfoProps {
  user?: ExtendedUser;
  label: string;
}
const Userinfo = ({ user, label }: IUserInfoProps) => {
  const USER_INFO = [
    {
      title: "ID",
      value: user?.id,
    },
    {
      title: "Name",
      value: user?.name,
    },
    {
      title: "Email",
      value: user?.email,
    },
    {
      title: "Role",
      value: user?.role,
    },
    {
      title: "Two Factor Authentication",
      value: user?.isTwoFactorEnabled ? "ON" : "OFF",
    },
  ];

  return (
    <Card className="w-[600px] shadow-md">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">{label}</p>

        <CardContent className="space-y-4">
          {USER_INFO.map((info) => (
            <div
              className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm"
              key={info.title}
            >
              <p className="text-sm font-medium">{info.title}:</p>
              {info.title === "Two Factor Authentication" ? (
                <Badge
                  variant={user?.isTwoFactorEnabled ? "success" : "destructive"}
                >
                  {info.value}
                </Badge>
              ) : (
                <p className="truncate text-sx max-w-[280px] font-mono p-1 bg-slate-100 rounded-md">
                  {info.value}
                </p>
              )}
            </div>
          ))}
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default Userinfo;
