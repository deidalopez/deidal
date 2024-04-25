"use client";
import React from "react";
import Link from "next/link";
import NavItem from "./NavItem";
import { IoMenuOutline, IoClose } from "react-icons/io5";
import Menu from "./Menu";

const navComponents = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-95">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 p-2">
        <Link href="/" className="text-2xl  text-white font-semibold">
          LOGO
        </Link>
        <div className="mobile-menu block md:hidden">
          {navBarOpen ? (
            <button
              onClick={() => setNavBarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white"
            >
              <IoClose className="h-6 w-6" />
            </button>
          ) : (
            <button
              onClick={() => setNavBarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white"
            >
              <IoMenuOutline className="h-6 w-6" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-8">
            {navComponents.map((item, index) => (
              <li key={index}>{NavItem(item)}</li>
            ))}
          </ul>
        </div>
      </div>
      {navBarOpen && <Menu links={navComponents} />}
    </nav>
  );
};

export default NavBar;
