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

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-indigo-600 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-indigo-600"></span>
            <span className="block w-6 h-0.5 bg-indigo-600"></span>
            <span className="block w-6 h-0.5 bg-indigo-600"></span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6 mt-4 md:mt-0">
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

        {/* Mobile Navigation Links */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg flex flex-col items-center space-y-4 py-4`}
        >
          <button
            onClick={() => {
              router.push("/");
              setMenuOpen(false);
            }}
            className="text-lg font-semibold text-indigo-600 hover:text-indigo-800"
          >
            Home
          </button>
          <button
            onClick={() => {
              router.push("/about");
              setMenuOpen(false);
            }}
            className="text-lg font-semibold text-indigo-600 hover:text-indigo-800"
          >
            About
          </button>
          <button
            onClick={() => {
              router.push("/contact");
              setMenuOpen(false);
            }}
            className="text-lg font-semibold text-indigo-600 hover:text-indigo-800"
          >
            Contact
          </button>
          <button
            onClick={() => {
              router.push("/categories");
              setMenuOpen(false);
            }}
            className="text-lg font-semibold text-indigo-600 hover:text-indigo-800"
          >
            Category
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
