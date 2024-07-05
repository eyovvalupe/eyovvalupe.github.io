import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"
import { FaTelegram } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer>
      <h4>Developed by Micahel Tan</h4>
      <h4>Copyright &copy; 2024 M.T.</h4>
      <div className='footerLinks'>
        <a href="https://github.com/eyovvalupe" target='_blank'><FaGithub/></a>
        <a href="https://de.linkedin.com/in/michaeltanweiming" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:enjoyablecoder1758981@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://t.me/GogoPlav" target="_blank"><FaTelegram/></a>
      </div>
    </footer>
  )
}

export default Footer