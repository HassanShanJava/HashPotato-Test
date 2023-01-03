import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import Text from "../assets/text.svg";

import { AiOutlineMenu, AiFillTag } from "react-icons/ai";
import { BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaWallet, FaUserFriends } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

const Navbar = () => {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  return (
    <div className="bg-transparent w-full  py-4 ">
      <div className="max-w-[1450px] flex justify-between items-center mx-auto text-white">
        <div
          onClick={handleClick}
          className={click?"invisible":"sm:hidden cursor-pointer ml-2"}
        >
          <AiOutlineMenu size={30} />
        </div>

        <div
          className={click ? "hidden" : " hidden sm:flex justify-between"}
          onClick={handleClick}
        >
          <img src={Logo} alt="/" className="w-12 px-2" />
          <img src={Text} alt="/" className="pl-4 w-32 sm:w-48" />
        </div>

        <div className="flex justify-between ">
          <button className="hidden sm:block mx-2 px-4 py-2 bg-[#F89E1B] rounded-full">
            Buy PASS
          </button>
          <button className="mx-2 px-4 py-2 border border-[#F89E1B] rounded-full">
            Connect Wallet
          </button>
        </div>

        {/* Mobile Menu */}

        {/* side drawer menu */}
        <div
          className={
            click
              ? "fixed top-0 left-0 w-[350px] h-screen bg-transparent backdrop-blur-sm z-10 duration-300 border-r border-gray-600"
              : "fixed top-0 left-[-100%] w-[350px] h-screen bg-transparent backdrop-blur-sm z-10 duration-300 border-r border-gray-600"
          }
        >
          <div className="flex justify-between items-center m-4" onClick={handleClick}>
            <div className="flex justify-between items-center sm:mr-4">
              <img src={Logo} alt="/" className="w-12 px-2" />
              <img src={Text} alt="/" className="pl-4 w-40 sm:w-48" />
            </div>
          </div>

          <nav>
            <ul className="flex flex-col p-4 text-white">
              <li className="text-xl py-4 flex items-center">
                <TbTruckDelivery size={25} className="mr-4 " />
                Orders
              </li>
              <li className="text-xl py-4 flex items-center">
                <MdFavorite size={25} className="mr-4 " />
                Favorites
              </li>
              <li className="text-xl py-4 flex items-center">
                <FaWallet size={25} className="mr-4 " />
                Wallet
              </li>
              <li className="text-xl py-4 flex items-center">
                <MdHelp size={25} className="mr-4 " />
                Help
              </li>
              <li className="text-xl py-4 flex items-center">
                <AiFillTag size={25} className="mr-4 " />
                Promotions
              </li>
              <li className="text-xl py-4 flex items-center">
                <BsFillSaveFill size={25} className="mr-4 " />
                Best Ones
              </li>
              <li className="text-xl py-4 flex items-center">
                <FaUserFriends size={25} className="mr-4 " />
                Invite Friends
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
