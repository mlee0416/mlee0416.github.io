import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Navigation } from "./_components/Navigation";

interface ProtectedLayoutProps {
  children?: React.ReactNode;
}

export default async function ProtectedLayout({
  children,
}: ProtectedLayoutProps) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
        <Navigation />
      <div className="grid gap-8 p-8">
        {children}
      </div>
    </SessionProvider>
  );
}
