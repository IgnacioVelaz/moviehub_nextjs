import Image from "next/image";
import Container from "../container/container";
import NavLinks from "./nav-links";

const NavBar = () => (
  <header className="bg-primary text-white">
    <Container>
      <div className="flex justify-between items-center py-2">
        <div className="logo">
          <Image
            src="https://res.cloudinary.com/dsinhkkv3/image/upload/v1700480644/Artboard_1_d1n7j7.png"
            alt="moviehub logo"
            width={60}
            height={25}
          />
        </div>
        <NavLinks />
      </div>
    </Container>
  </header>
);
export default NavBar;
