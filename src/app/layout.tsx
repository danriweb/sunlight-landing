import type { Metadata } from "next";
import { Jost } from "next/font/google";

import Providers from "@providers";

import Footer from "@components/footer/Footer";
import Header from "@components/header/Header";

import "./globals.css";

const jost = Jost({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "SUNLIGHT - Программа лояльности",
  description: "Программа лояльности SUNLIGHT. Получайте бонусы за покупки и участвуйте в акциях.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="relative flex-base min-w-80">
      <body
        className={`${jost.className} flex min-h-screen w-full max-w-382.5 flex-col px-4 sm:px-6 md:px-7 lg:px-9 xl:flex xl:px-12.5`}
      >
        <Header />
        <main className="flex-base flex-1">
          <Providers>{children}</Providers>
        </main>
        <Footer />
      </body>
    </html>
  );
}
