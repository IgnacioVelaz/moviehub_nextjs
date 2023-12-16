import { ReactNode } from "react";
import NavBar from "@/components/navbar.tsx/navbar";
import Container from "@/components/container/container";

type layoutProps = {
  children: ReactNode;
};

const layout = ({ children }: layoutProps) => (
  <>
    <NavBar />
    <Container>{children}</Container>
  </>
);

export default layout;
