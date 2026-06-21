import type { Metadata } from "next";
import { Dongle, Luckiest_Guy } from "next/font/google";
import "./globals.css";

const dongle = Dongle({
  variable: "--font-dongle",
  subsets: ["latin"],
  weight: ["300", "400"],
});

const luckiestGuy = Luckiest_Guy({
  variable: "--font-luckiest-guy",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Kim's Game",
  description: "Memorize the objects on the tray and recall them before time runs out.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dongle.variable} ${luckiestGuy.variable}`}>
      <body>{children}</body>
    </html>
  );
}
