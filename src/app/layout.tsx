import type { Metadata } from "next";
import "../globals.css";
import { FC, PropsWithChildren } from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { fontPrimary } from "@/fonts";
import { Toaster } from "react-hot-toast";
import MoviesContextProvider from "@/context/movies-context";
import NavBar from "@/components/navbar.tsx/navbar";
import Container from "@/components/container/container";
import Footer from "../components/footer/footer";

export const metadata: Metadata = {
  title: "MovieMagnet",
  description: "MovieMagnet: Attracting Cinematic Wonders to Your Watchlist",
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <head>
      <title>MovieMagnet</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link
        rel="icon"
        href="https://res.cloudinary.com/dsinhkkv3/image/upload/c_thumb,w_200,g_face/v1705960391/Movie_Magnet_Mixed_2_ewlins.png"
      />
    </head>
    <UserProvider>
      <MoviesContextProvider>
        <body
          className={`${fontPrimary.className} antialiased min-h-screen bg-gradient-to-b from-black to-secondary text-white`}
        >
          <div className="min-h-screen flex flex-col space-between">
            <div className="fixed top 0 z-30 left-0 right-0 bg-black/50 h-14 backdrop-blur-sm">
              <NavBar />
            </div>
            <Container>{children}</Container>
            <Footer />
          </div>

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
