import Link from "next/link";
import Image from "next/image";
import Container from "../container/container";

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
        <ul className="flex items-center gap-5">
          <li>
            <Link
              href="/watchlist"
              className="font-semibold text-gray-300 hover:text-white"
            >
              Watchlist
            </Link>
          </li>
          <li>
            <Link
              href="/watched"
              className="font-semibold text-gray-300 hover:text-white"
            >
              Watched
            </Link>
          </li>
          <li>
            <Link
              href="/add"
              className="font-semibold text-gray-300 hover:text-white"
            >
              Add Movie
            </Link>
          </li>
        </ul>
      </div>
    </Container>
  </header>
);
export default NavBar;
