import type { Metadata } from "next";
import "../globals.css";
import { FC, PropsWithChildren } from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { fontPrimary } from "@/fonts";
import { Toaster } from "react-hot-toast";
import MoviesContextProvider from "@/context/movies-context";

export const metadata: Metadata = {
  title: "MovieMagnet",
  description: "MovieMagnet: Attracting Cinematic Wonders to Your Watchlist",
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <UserProvider>
      <MoviesContextProvider>
        <body
          className={`${fontPrimary.className} antialiased min-h-screen bg-gradient-to-b from-black to-secondary text-white`}
        >
          {children}
          <Toaster
            toastOptions={{
              success: {
                style: {
                  background: "#282828",
                  color: "#fff",
                },
              },
            }}
          />
        </body>
      </MoviesContextProvider>
    </UserProvider>
  </html>
);

export default RootLayout;
