import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "@widgets/footer";
import Header from "@widgets/header";

import Providers from "@providers";

import "./globals.css";

const inter = Inter({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "SUNLIGHT - Программа лояльности",
  description: "Программа лояльности SUNLIGHT. Получайте бонусы за покупки и участвуйте в акциях.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="flex-base min-w-80">
      <body className={`${inter.className} w-full max-w-360`}>
        <Header />
        <main className="flex-base">
          <Providers>{children}</Providers>
        </main>
        <Footer />
      </body>
    </html>
  );
}
