import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
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
      <UserProvider>
        <body
          className={`${fontPrimary.className} antialiased min-h-screen bg-gradient-to-b from-black to-secondary text-white`}
        >
          {children}
          <a href="/api/auth/logout">Logout</a>
        </body>
      </UserProvider>
    </html>
  );
}
