import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./_components/header";
import Sidebar from "./_components/sidebar";
import Footer from "./_components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FreeCreate",
  description: "A hosting platform for fiction writers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">
        <Header />
        <main className="fixed h-full top-6 bg-blue-100 sm:flex sm:mb-0 ">
          <Sidebar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
