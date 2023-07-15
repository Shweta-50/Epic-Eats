import React from "react";
import Logo from "../img/brand-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="h-[60px] py-10 w-[100%] bg-cardOverlay backdrop-filter backdrop-blur-lg text-xl text-white flex items-center justify-center ">
      <Link
        to={"/"}
        className="flex items-center gap-2 hover:scale-125 transition-all"
      >
        <img src={Logo} className="w-14 object-cover" alt="logo" />
        <p className="text-gray-700">&copy;EpicEats {currentYear}</p>
      </Link>
    </div>
  );
};

export default Footer;
