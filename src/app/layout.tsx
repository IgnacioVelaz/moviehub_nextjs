import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import fontPrimary from "./fonts";

export const metadata: Metadata = {
  title: "MovieHub",
  description:
    "Unlock Movie Magic with MovieHub, Your Key to Effortless Movie Tracking.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${fontPrimary.className} antialiased`}>{children}</body>
    </html>
  );
}
