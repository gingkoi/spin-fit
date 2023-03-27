import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="relative h-full">
      <div className="bg-black flex justify-between px-5 lg:justify-around py-5 items-center font-poppin gap-4">
        <div className="font-alatsi text-text font-bold text-2xl">
          <Image
            src={
              "https://www.anytimefitness.sg/wp-content/uploads/2022/03/NEW_LOGO.png"
            }
            width={170}
            height={100}
            alt="anytime-fitness"
          />
        </div>
        <div className="hidden lg:flex space-x-5 text-md ml-[100px] text-white">
          <a href="/" className="font-semibold hover:text-primary">
            Benefits
          </a>
          <a href="/" className="font-semibold hover:text-primary">
            Class Schedule
          </a>
          <a href="/" className="font-semibold hover:text-primary">
            Locations
          </a>
          <a href="/" className="font-semibold hover:text-primary">
            Trainers
          </a>
        </div>
        <div className="hidden space-x-3 lg:flex">
          <a
            href="/"
            className="text-text bg-[#f3f4f6] py-3 px-5 font-semibold rounded-lg hover:bg-primary hover:text-white transition"
          >
            Guest Pass
          </a>
          <a
            href="/"
            className="text-white bg-primary py-3 px-5 font-semibold rounded-lg hover:scale-105 ease-in transition"
          >
            Join online
          </a>
        </div>
        {nav ? (
          <div className="bg-[#f3f4f6] p-2 rounded-md lg:hidden">
            <AiOutlineClose
              size={25}
              className="text-text "
              onClick={handleNav}
            />
          </div>
        ) : (
          <div className="bg-[#f3f4f6] p-2 rounded-md lg:hidden">
            <RxHamburgerMenu
              size={25}
              className="text-text "
              onClick={handleNav}
            />
          </div>
        )}
      </div>
      <div
        className={`${
          nav
            ? "flex w-screen h-full justify-around flex-col font-poppin transition duration-200 lg:hidden"
            : "hidden "
        }`}
      >
        <a href="/" className="text-text font-semibold text-xl p-3">
          Benefits
        </a>
        <a href="/" className="text-text font-semibold text-xl p-3">
          Class Schedule
        </a>
        <a href="/" className="text-text font-semibold text-xl p-3">
          Locations
        </a>
        <a href="/" className="text-text font-semibold text-xl p-3">
          Trainers
        </a>
        <a href="/" className="text-xl p-3 bg-primary text-white font-semibold">
          Join Online
        </a>
        <a
          href="/"
          className="text-text text-xl p-3 bg-[#f3f4f6] font-semibold"
        >
          Guess Pass
        </a>
      </div>
    </div>
  );
};

export default Navbar;
