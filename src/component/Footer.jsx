import React from 'react';
import logo from "../assets/logo.png";



const links = [
  { title: "Home", to: "#" },
  { title: "Contact us", to: "#"},
  { title: "Gallery", to: "gallery" },
  { title: "Services", to: "#" },
  { title: "How It Works", to: "#" },
  { title: "Privacy", to:"#"},
  { title: "Terms & Service", to: "#"},
];


const Footer = () => {
  return (
    <div className="layout h-[118.57px] gap-[24px] my-5">
      <div className='flex items-center justify-between '>
        <div className='bg-[#000000] w-[85.69px] h-[28.57px]'>
          <img src={logo} alt="trex logo" />
        </div>
        <div className="h-[27px] text-[16px] font-medium underline  flex gap-6 text-[#1d1d1d]">
          {links.map((link, index) => {
            return (
              <a key={index} href={link.to}>
                {link.title}
              </a>
            );
          })}
        </div>
      </div>
      <p className='h-[66px] font-sm text-[15px] spacing-0% text-[#2f2f2f] text-center my-5'>
        This website is owned and operated by Masref Ltd, incorporated in the United Kingdom the information provided is not legally binding and does not constitute an offering, 
        <br/>endorsement, recommendation or solicitation to enter into any type of finencial transaction in this or in any other jurisdiction in which solicitation or offer would be unlawful
        <br />under the laws of such jurisdiction
      </p>
    </div>
  );
}

export default Footer;