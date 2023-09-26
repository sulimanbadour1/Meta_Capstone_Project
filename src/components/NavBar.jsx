import React from "react";
import logo from "../assets/LittleLemonLogo.svg";

import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
// import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

import { Link } from "react-router-dom";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  // nav scroll
  const [scrollingUp, setScrollingUp] = useState(true);
  const prevScrollY = useRef(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setScrollingUp(currentScrollY < prevScrollY.current);
    prevScrollY.current = currentScrollY;
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // nav scroll

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div>
      <nav
        className={`transform ${
          scrollingUp ? "" : "-translate-y-full"
        } transition-transform duration-75 ease-in-out fixed z-50 w-full bg-white shadow-md`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex mx-auto justify-between items-center w-5/6 ">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-16 my-12">
              {/* logo */}
              <div>
                <a
                  href="/"
                  onClick={handleClick("Home")}
                  className="flex gap-1 font-bold text-gray-700 items-center "
                >
                  <img src={logo} alt="logo" width="auto" />
                </a>
              </div>
              {/* primary */}

              <div className="hidden lg:flex gap-8 pl-24">
                {
                  <>
                    <a href="/#home" onClick={handleClick("home")}>
                      Home
                    </a>
                    <Link to="/menu">Menu</Link>
                    <a href="/#about" onClick={handleClick("about")}>
                      About
                    </a>
                    <Link to="/reservation">Reservations</Link>
                    <Link to="/order">Order Online</Link>
                  </>
                }
                {/* <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/reserve">Reservations</Link>
                <Link to="/order">Order Online</Link>
                <Link to="/" onClick={handleClick}>
                  About
                </Link> */}
              </div>
            </div>
            {/* secondary */}
            <div className="flex gap-6">
              <div className="hidden xs:flex items-center gap-10">
                <div>
                  <Link to="/404">
                    <button className="rounded-full border-solid border-2 border-gray-300 py-2 px-6 hover:bg-[#495E57] hover:text-gray-100">
                      Login
                    </button>
                  </Link>
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
              <Link to="/">Home</Link>
              <Link to="/menu">Menu</Link>
              <Link to="/reserve">Reservations</Link>
              <Link to="/order">Order Online</Link>
              <Link to="/" onClick={handleClick}>
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
