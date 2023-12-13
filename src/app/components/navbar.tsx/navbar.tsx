import Link from "next/link";
import Container from "../container/container";

const NavBar = () => (
  <header className="bg-primary text-white">
    <Container>
      <div className="flex justify-between items-center py-2">
        <div className="logo">
          <img
            src="https://res.cloudinary.com/dsinhkkv3/image/upload/v1700480644/Artboard_1_d1n7j7.png"
            alt="moviehub logo"
            className="h-16"
          />
        </div>
        <ul className="flex items-center gap-5">
          <li>
            <Link href="/watchlist">Watchlist</Link>
          </li>
          <li>
            <Link href="/watched">Watched</Link>
          </li>
          <li>
            <Link href="/add">Add Movie</Link>
          </li>
        </ul>
      </div>
    </Container>
  </header>
);
export default NavBar;
