import React from 'react'

import Img from "../assets/astro.svg"

import {
    AiOutlineClose,
    AiOutlineMenu,
    AiOutlineSearch,
    AiFillTag,
  } from "react-icons/ai";
  import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
  import { TbTruckDelivery } from "react-icons/tb";
  import { FaWallet, FaUserFriends } from "react-icons/fa";
  import { MdFavorite, MdHelp } from "react-icons/md";

const Background = () => {
  return (
    <div className='fixed bg-black w-full h-full -z-10'>
        <img src={Img} alt='/' className='w-full h-full object-cover fixed'/>
    </div>
  )
}

export default Background