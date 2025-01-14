import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Provider } from "@/utils/Providers";
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
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/pokemon-solid"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} backgroundImage h-full`}>
        <Provider>{children}</Provider>
        <Toaster />
      </body>
    </html>
  );
}
