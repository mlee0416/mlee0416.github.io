import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Navigation } from "../../components/ui/navbar/Navigation";
import { ERoutes } from "@/types/routes/routeTypes";

interface ProtectedLayoutProps {
  children?: React.ReactNode;
}

export default async function ProtectedLayout({
  children,
}: ProtectedLayoutProps) {
  const session = await auth();

  const NAVBAR_MENU_ITEMS = [
    {
      name: "Pokemon TCG Demo",
      pathName: ERoutes.API_DEMO,
      disabled: false,
    },
    {
      name: "NFL",
      pathName: ERoutes.NFL_TOOLS,
      disabled: true,
    },
    {
      name: "Admin",
      pathName: ERoutes.ADMIN,
      disabled: false,
    },
    {
      name: "Settings",
      pathName: ERoutes.SETTINGS,
      disabled: false,
    },
    {
      name: "Download Resume",
      pathName: ERoutes.DOWNLOAD_RESUME,
      newPage: true,
      disabled: false,
    },
  ];

  return (
    <SessionProvider session={session}>
      <Navigation navbarList={NAVBAR_MENU_ITEMS} displayUserButton />
      <div className="grid gap-8 p-8 backgroundImage  justify-center">
        {children}
      </div>
    </SessionProvider>
  );
}
