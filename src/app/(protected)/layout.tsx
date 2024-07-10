import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import Navbar from "./_components/Navbar";

interface ProtectedLayoutProps {
  children?: React.ReactNode;
}

export default async function ProtectedLayout({
  children,
}: ProtectedLayoutProps) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center bg-sky-500">
        <Navbar />
        {children}
      </div>
    </SessionProvider>
  );
}
