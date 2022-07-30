import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaFacebook, FaTwitter, FaYoutube, FaPinterest, FaInstagram } from "react-icons/fa"

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const [logo, setLogo] = useState(false)

  const handleNav = () => {
    setNav(prev => !prev)
    setLogo(prev => !prev)
  }

  return (
    <div className="w-full flex justify-between items-center h-20 px-4 absolute z-10 text-white">
      <div className="z-10">
        <h1 className={logo ? "hidden" : "block"}>Beaches.</h1>
      </div>
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>Views</li>
        <li>Book</li>
      </ul>
      <div className="hidden md:flex">
        <BsPerson size={20} />
        <BiSearch size={20} />
      </div>

      {/* Hamburger */}
      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? <AiOutlineClose className="text-black" size={20} /> : <HiOutlineMenuAlt4 size={20} />}
        
      </div>

      {/* mobile menu dropdown */}
      <div onClick={handleNav} className={nav ? "absolute top-0 left-0 w-full text-black bg-gray-100/90 px-4 py-7 flex flex-col md:hidden" : "absolute left-[-100%] md:hidden"}>
        <ul>
          <h1>Beaches.</h1>
          <li className="border-b mt-6">Home</li>
          <li className="border-b">Destinations</li>
          <li className="border-b">Travel</li>
          <li className="border-b">Views</li>
          <li className="border-b">Book</li>
          <div className="flex flex-col">
            <button className="my-6">Search</button>
            <button>Account</button>
          </div>
          <div className="flex justify-between my-6">
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
