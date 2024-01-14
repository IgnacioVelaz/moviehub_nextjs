import { FC, PropsWithChildren } from "react";
import NavBar from "@/components/navbar.tsx/navbar";
import Container from "@/components/container/container";

const layout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <NavBar />
    <Container>{children}</Container>
  </>
);

export default layout;
