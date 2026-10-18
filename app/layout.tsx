import type { Metadata } from "next";
import { Geist_Mono, Noto_Serif_Georgian } from "next/font/google";
import localFont from 'next/font/local';

import Nav from "./components/nav";
import "./globals.css";

const sf_pro = localFont({
  variable: '--font-sf-sans',
  src: '../lib/fonts/SF-Pro.ttf',
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const georgian = Noto_Serif_Georgian({
  variable: "--font-georgian-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "This is where I write stuff",
  description: "All my thoughts in one place",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt"
      className={`${geistMono.variable} ${georgian.variable} ${sf_pro.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col lg:px-2.5 px-6 gap-2.5 bg-[#FFFDF0] dark:bg-black">
        <Nav />
        {children}
      </body>
    </html>
  );
}
