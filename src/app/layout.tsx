import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import NavBar from "@/app/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deida",
  description: "Deida Lopez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className={`bg-bkg text-textPrimary ${inter.className}`}>
        <Providers>
          <NavBar />
          <main className="flex flex-col min-h-screen px-4 md:px-6">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
