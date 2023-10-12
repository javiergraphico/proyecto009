import React from 'react'
import './Navbar.scss'
import { motion } from "framer-motion"
import Sidebar from '../sidebar/Sidebar'

import { AiFillInstagram } from 'react-icons/Ai';
import { AiFillDribbbleCircle } from 'react-icons/Ai';
import { AiFillYoutube } from 'react-icons/Ai';
import { BsFacebook } from 'react-icons/Bs';


const Navbar = () => {
  return (
    <motion.div className='navbar'>
      <Sidebar />
      <div className='wrapper'>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >Lama Dev</motion.span>
        <div className='social'>
          <a href="#">
            <BsFacebook />
          </a>
          <a href="#">
            <AiFillInstagram />
          </a>
          <a href="#">
            <AiFillDribbbleCircle />
          </a>
          <a href="#">
            <AiFillYoutube />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar