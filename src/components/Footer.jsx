import React from "react";
import logo from "../assets/LittleLemonLogo.svg";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        backgroundColor: "#D9D9D9",
      }}
    >
      <footer
        style={{
          display: "flex",
          margin: "0px 0px 0px 160px",
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{
            width: "190px",
            borderRadius: "8px",
            marginLeft: "20px",
          }}
        />
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            listStyle: "none",
            gap: "20px",
          }}
        >
          <div
            style={{
              width: "1440px",
              background: "#D9D9D9",
              flexShrink: "0",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Doormat Nav
          </div>
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
      </footer>
    </div>
  );
};

export default Footer;
