import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body>
        <header>
          <nav></nav>
        </header>
        {children}
        <footer>
          <nav></nav>
        </footer>
      </body>
    </html>
  );
}
