import Image from "next/image";
import Container from "../container/container";
import NavLinks from "./components/nav-links";
import UserIcon from "./components/user-icon";

const NavBar = () => (
  <header className="text-white">
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
        <UserIcon />
      </div>
    </Container>
  </header>
);
export default NavBar;
