"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();
  console.log("pathname", pathname);

  const links = [
    { name: "Watchlist", href: "/watchlist" },
    { name: "Watched", href: "/watched" },
    { name: "Discover", href: "/discover" },
  ];

  return (
    <ul className="flex items-center gap-5">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            key={link.name}
            href={link.href}
            className={`font-semibold hover:text-white ${
              pathname === link.href ? "text-white" : "text-gray-400"
            }`}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default NavLinks;
