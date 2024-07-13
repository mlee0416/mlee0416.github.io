import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Personal App",
    template: "%s | Next.js 14",
  },
  description: "Personal App",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className={`${inter.className} splashPage`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
