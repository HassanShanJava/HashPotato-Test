import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import Text from "../assets/text.svg";


import Dash from "../assets/Icons/dash.svg";
import Analy from "../assets/Icons/analytics.svg";
import Bond from "../assets/Icons/bond.svg";
import Chart from "../assets/Icons/chart.svg";
import Doc from "../assets/Icons/doc.svg";
import Pass from "../assets/Icons/pass.svg";
import Stake from "../assets/Icons/stake.svg";

import {AiOutlineMenu} from "react-icons/ai"


import Tweet from "../assets/Icons/social/twitter.svg"
import Tele from "../assets/Icons/social/telegram.svg"
import Discord from "../assets/Icons/social/discord.svg"

const Navbar = () => {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  return (
    <div className="bg-transparent w-full  py-4 ">
      <div className="max-w-[1450px] flex justify-between items-center mx-auto text-white">
        <div
          onClick={handleClick}
          className={click ? "invisible" : "sm:hidden cursor-pointer ml-2"}
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
          <div
            className="flex justify-between items-center m-4"
            onClick={handleClick}
          >
            <div className="flex justify-between items-center sm:mr-4">
              <img src={Logo} alt="/" className="w-12 px-2" />
              <img src={Text} alt="/" className="pl-4 w-40 sm:w-48" />
            </div>
          </div>

          <nav>
            <ul className="flex flex-col p-4 px-8 text-white">
              <li className="text-lg py-2 flex items-center">
                <img src={Dash} alt="/" className="w-5 mr-4" />
                <p className="py-auto font-bold">Dashboard</p>
              </li>
              <li className="text-lg py-2 flex items-center">
                <img src={Analy} alt="/" className="w-5 mr-4" />
                <p className="py-auto font-bold">Analytics</p>
              </li>
              <li className="text-lg py-2 flex items-center">
                <img src={Stake} alt="/" className="w-5 mr-4" />
                <p className="py-auto font-bold">Stake</p>
              </li>
              <li className="text-lg py-2 flex items-center">
                <img src={Bond} alt="/" className="w-5 mr-4" />
                <p className="py-auto font-bold">Bond</p>
              </li>
              <li className="text-lg py-2  items-center">
                <p className="text-[#6A6971] ml-[35px]  mb-4">Bond Discount</p>
                <ul className="ml-[35px]">
                  <li className="py-1">
                    <div className="flex justify-between items-center font-bold">
                      <p>XIV-BNB LP</p>
                      <p>-16.28%</p>
                    </div>
                  </li>
                  <li className="py-1">
                    <div className="flex justify-between items-center font-bold">
                      <p>PASS-BNB LP</p>
                      <p>-16.28%</p>
                    </div>
                  </li>
                  <li className="py-1">
                    <div className="flex justify-between items-center font-bold">
                      <p>XIV</p>
                      <p>-16.28%</p>
                    </div>
                  </li>
                  <li className="py-1">
                    <div className="flex justify-between items-center font-bold">
                      <p>BNB</p>
                      <p>-16.28%</p>
                    </div>
                  </li>
                  <li className="py-1">
                    <div className="flex justify-between items-center font-bold">
                      <p>BUSD</p>
                      <p>-16.28%</p>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="text-lg py-2 flex items-center">
                <img src={Pass} alt="/" className="w-5 mr-4" />
                <p className="py-auto font-bold">Buy Pass</p>
              </li>
              <li className="text-lg py-2 flex items-center">
                <img src={Chart} alt="/" className="w-5 mr-4" />
                <p className="py-auto font-bold">Price Chart</p>
              </li>
              <li className="text-lg py-2 flex items-center">
                <img src={Doc} alt="/" className="w-5 mr-4" />
                <p className="py-auto font-bold">Documentation</p>
              </li>
            </ul>

            <div className="flex justify-between items-center mt-6 px-12">
              <img src={Tweet} alt='/'  className="w-7"/>
              <img src={Discord} alt='/'  className="w-7"/>
              <img src={Tele} alt='/' className="w-7" />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
