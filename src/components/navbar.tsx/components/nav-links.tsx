"use client";

import { nanoid } from "nanoid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaEye, FaSearch } from "react-icons/fa";
import { IoAddCircleSharp } from "react-icons/io5";

const NavLinks = () => {
  const pathname = usePathname();

  const links = [
    { name: "Watchlist", href: "/watchlist", icon: <IoAddCircleSharp /> },
    { name: "Watched", href: "/watched", icon: <FaEye /> },
    { name: "Discover", href: "/", icon: <FaSearch /> },
  ];

  return (
    <ul className="flex items-center gap-5">
      {links.map((link) => (
        <li key={nanoid()}>
          <Link
            key={link.name}
            href={link.href}
            className={`font-semibold flex items-center  gap-2 hover:text-white ${
              pathname === link.href ? "text-white" : "text-gray-400"
            }`}
          >
            {link.name}
            {link.icon && link.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default NavLinks;
