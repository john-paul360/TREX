import React from "react";
import logo from "../assets/logo.png";

const links = [
  { title: "Home", to: "#" },
  { title: "Contact us", to: "#" },
  { title: "Gallery", to: "gallery" },
  { title: "Services", to: "#" },
  { title: "How It Works", to: "#" },
  { title: "Privacy", to: "#" },
  { title: "Terms & Service", to: "#" },
];

const Footer = () => {
  return (
    <div className="layout my-5">
      <div className="flex flex-col md:flex-row gap-5 md:justify-between md:h-[28.57px] mb-5 items-center justify-between ">
        <div className="bg-[#000000] w-[85.69px] h-[28.57px]">
          <img src={logo} alt="trex logo" />
        </div>
        <div className="md:h-[27px] text-[16px] font-medium underline items-center flex flex-col md:flex-row gap-5 text-[#1d1d1d]">
          {links.map((link, index) => {
            return (
              <a key={index} href={link.to}>
                {link.title}
              </a>
            );
          })}
        </div>
      </div>
      <p className="h-[66px] font-sm text-[15px] text-[#2f2f2f]">
        This website is owned and operated by Masref Ltd, incorporated in the
        United Kingdom the information provided is not legally binding and does
        not constitute an offering,
        <br />
        endorsement, recommendation or solicitation to enter into any type of
        finencial transaction in this or in any other jurisdiction in which
        solicitation or offer would be unlawful
        <br />
        under the laws of such jurisdiction
      </p>
    </div>
  );
};

export default Footer;
