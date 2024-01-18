import { FC, PropsWithChildren } from "react";
import NavBar from "@/components/navbar.tsx/navbar";
import Container from "@/components/container/container";

const layout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <div className="absolute top 0 z-20 left-0 right-0 bg-black/50 h-14 backdrop-blur-sm">
      <NavBar />
    </div>
    <Container>{children}</Container>
  </>
);

export default layout;
