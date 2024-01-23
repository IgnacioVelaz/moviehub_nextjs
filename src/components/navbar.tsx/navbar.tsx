import Image from "next/image";
import Container from "../container/container";
import NavLinks from "./components/nav-links";
import UserIcon from "./components/user-icon";
import LogoutBtn from "./components/logout-btn";

const NavBar = () => (
  <header className="text-white w-full">
    <Container>
      <div className="flex justify-between items-center py-2">
        <div className="logo">
          <Image
            src="https://res.cloudinary.com/dsinhkkv3/image/upload/v1705960391/Movie_Magnet_Mixed_2_ewlins.png"
            alt="MovieMagnet logo"
            width={40}
            height={40}
          />
        </div>
        <NavLinks />
        <div className="flex items-center relative">
          <UserIcon />
          <LogoutBtn />
        </div>
      </div>
    </Container>
  </header>
);
export default NavBar;
