import React from "react";
import logo from "../assets/LittleLemonLogo.svg";

const NavBar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <nav>
        <img
          src={logo}
          style={{
            margin: "0px 0px 0px 160px",
            alignItems: "center",
            justifyContent: "center",
            width: "180px",
            height: "73px",
            flexShrink: "0",
          }}
          alt="Little Lemon Logo"
        />

        <ul
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0px 0px 0px 120px",

            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",
            listStyle: "none",
            color: "#000",
            fontSize: "18px",
            fontWeight: 500,
          }}
        >
          <li>
            {" "}
            <a href="/">Home</a>{" "}
          </li>
          <li>
            {" "}
            <a href="/about">About</a>{" "}
          </li>
          <li>
            {" "}
            <a href="/menu">Menu</a>{" "}
          </li>
          <li>
            {" "}
            <a href="/reservation">Reservation</a>{" "}
          </li>
          <li>
            {" "}
            <a href="/order">Order Online</a>{" "}
          </li>
          <li>
            {" "}
            <a href="/login">Log In</a>{" "}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
