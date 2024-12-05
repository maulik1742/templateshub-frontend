import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="h-10 w-12 relative">
          <Image
            src="/logo2.png" // Ensure the image is in the public folder
            alt="Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className=" w-full md:w-auto md:flex items-center space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
          <button
            onClick={() => router.push("/")}
            className="block text-lg font-semibold text-indigo-600 hover:text-indigo-800"
          >
            Home
          </button>
          <button
            onClick={() => router.push("/about")}
            className="block text-lg font-semibold text-indigo-600 hover:text-indigo-800"
          >
            About
          </button>
          <button
            onClick={() => router.push("/contact")}
            className="block text-lg font-semibold text-indigo-600 hover:text-indigo-800"
          >
            Contact
          </button>
          <button
            onClick={() => router.push("/categories")}
            className="block text-lg font-semibold text-indigo-600 hover:text-indigo-800"
          >
            Category
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
