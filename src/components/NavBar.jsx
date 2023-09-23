import React from "react";
import logo from "../assets/LittleLemonLogo.svg";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div>
      <nav>
        <div className="max-w-7xl mx-auto">
          <div className="flex mx-auto justify-between items-center w-5/6 ">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-16 my-12">
              {/* logo */}
              <div>
                <a
                  href="/"
                  className="flex gap-1 font-bold text-gray-700 items-center "
                >
                  <img src={logo} alt="logo" className="" />
                </a>
              </div>
              {/* primary */}
              <div className="hidden lg:flex gap-8 pl-24 ">
                <a href="\">Home</a>
                <a href="#menu">Menu</a>
                <a href="#reservations">Reservations</a>
                <a href="#Order">Order Online</a>
                <a href="#About">About</a>
              </div>
            </div>
            {/* secondary */}
            <div className="flex gap-6">
              <div className="hidden xs:flex items-center gap-10">
                <div>
                  <button className="rounded-full border-solid border-2 border-gray-300 py-2 px-6 hover:bg-[#495E57] hover:text-gray-100">
                    Login
                  </button>
                </div>
              </div>
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center z-auto">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <Bars3Icon className="h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className="px-8">
            <div className="flex flex-col gap-8 font-bold tracking-wider">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#menu">Menu</a>
              <a href="#Reservations" className=" border-gray-600">
                Reservations
              </a>
              <a href="#" className=" border-gray-600">
                Order online
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
