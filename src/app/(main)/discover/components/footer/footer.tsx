import { nanoid } from "nanoid";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const LINKS = [
  {
    title: "Open Source",
    description: (
      <>
        <p>
          See anything you like? Grab it from the{" "}
          <Link
            href="https://github.com/IgnacioVelaz/moviehub_nextjs"
            className="underline italic"
          >
            source code
          </Link>{" "}
          and have fun 🪀
        </p>
        <p>Let&apos;s grow together! 🌱✨</p>
      </>
    ),
  },
  {
    title: "Learning",
    description: (
      <p>
        Learning Next.js, this project aims to maximize server-side potential
        💻. Work in progress. Exciting updates ahead! 🚀
      </p>
    ),
  },
  {
    title: "Project",
    description: (
      <p>
        Discover, track, and enjoy movies 🎬! Uncover rental or purchase
        options, and build your watchlist effortlessly 🍿✨
      </p>
    ),
  },
];

const currentYear = new Date().getFullYear();

const Footer = () => (
  <footer className="relative w-full mt-20">
    <div className="mx-auto w-full max-w-7xl px-8">
      <div className="grid grid-cols-4 justify-between gap-4">
        <div>
          <p className="mb-3">Built in a quest for learning and sharing! 🚀</p>
          <i>&quot;The noblest pleasure is the joy of understanding.&quot;</i>
        </div>
        {LINKS.map(({ title, description }) => (
          <div className="flex flex-col" key={nanoid()}>
            <p className="mb-3 font-medium opacity-40">{title}</p>
            {description}
          </div>
        ))}
      </div>
      <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
        <p className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0">
          &copy; {currentYear} Ignacio Velázquez
        </p>
        <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
          <Link
            href="https://github.com/IgnacioVelaz"
            className="opacity-80 transition-opacity hover:opacity-100"
            target="_blank"
            aria-label="Github Account"
          >
            <FaGithub className="text-3xl" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/veladev/"
            className="opacity-80 transition-opacity hover:opacity-100"
            target="_blank"
            aria-label="Github Account"
          >
            <FaLinkedin className="text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
