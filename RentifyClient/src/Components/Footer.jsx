import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import logo from '../Assets/rentify-logo.png'; 

const Footer = () => {
  return (
    <footer className="bg-[#2a2a2a] text-gray-400 w-full flex flex-col items-center relative mt-auto bottom-0">
      <div className="w-full text-center">
        
        <div id='footer-logo'
             className="relative flex justify-center items-center w-full before:mr-5 before:left-0 after:ml-5 after:right-0 before:w-[calc(50%_-_85px)] after:w-[calc(50%_-_85px)]">
          <img className='max-w-[120px] inline-block z-[1]' src={logo} alt="Rentify Logo" />
        </div>
        
        <div className="flex justify-center gap-[18px] mb-[5px]">
          <a className='text-gray-400 transition-[color] duration-[0.3s] hover:text-[white]' 
              href="https://facebook.com" aria-label="Facebook"><FaFacebook size={24} />
          </a>
          <a className='text-gray-400 transition-[color] duration-[0.3s] hover:text-[white]' 
             href="https://twitter.com" aria-label="Twitter"><FaXTwitter size={24} />
          </a>
          <a className='text-gray-400 transition-[color] duration-[0.3s] hover:text-[white]' 
            href="https://www.instagram.com/vvek_9/" aria-label="Instagram"><FaInstagram size={24} />
          </a>
          <a className='text-gray-400 transition-[color] duration-[0.3s] hover:text-[white]' 
             href="https://www.linkedin.com/in/vivekanand-vernekar/" aria-label="LinkedIn"><FaLinkedin size={24} />
          </a>
        </div>

        <div className="w-full relative">
          <p className='text-sm relative m-0 px-[5px] py-2.5'>&copy; 2024 Rentify. &nbsp; All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
