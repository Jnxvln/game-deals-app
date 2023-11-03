"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();

  return (
    <nav className="flex bg-black text-white">
      <Link
        href="/"
        className={`transition-colors ease-in-out duration-300 hover:bg-gray-600 hover:transition-colors hover:ease-in-out hover:duration-300 px-4 py-2 ${
          pathName === "/" && "bg-amber-700"
        }`}
      >
        Home
      </Link>
      <Link
        href="/deals"
        className={`transition-colors ease-in-out duration-300 hover:bg-gray-600 hover:transition-colors hover:ease-in-out hover:duration-300 px-4 py-2 ${
          pathName === "/deals" && "bg-amber-700"
        }`}
      >
        Deals
      </Link>
      <Link
        href="/games"
        className={`transition-colors ease-in-out duration-300 hover:bg-gray-600 hover:transition-colors hover:ease-in-out hover:duration-300 px-4 py-2 ${
          pathName === "/games" && "bg-amber-700"
        }`}
      >
        Games
      </Link>
    </nav>
  );
}
