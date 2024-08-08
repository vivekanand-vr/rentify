import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import logo from '../Assets/Footer-logo.png'; 

const Footer = () => {
  return (
    <footer className="bg-[#2a2a2a] text-gray-400 w-full flex flex-col items-center relative mt-auto bottom-0">
      <div className="w-full text-center">
        
        <div id='footer-logo'
             className="relative flex justify-center items-center w-full">
          <img className='w-20 inline-block z-[1] md:w-32' src={logo} alt="Rentify Logo" />
        </div>
        
        <div className="flex justify-center gap-[18px] my-1">
          <a className='text-gray-400 transition-[color] duration-[0.3s] hover:text-[white]' 
              href="https://facebook.com" aria-label="Facebook"><FaFacebook className='text-md md:text-[24px]' />
          </a>
          <a className='text-gray-400 transition-[color] duration-[0.3s] hover:text-[white]' 
             href="https://twitter.com" aria-label="Twitter"><FaXTwitter className='text-md md:text-[24px]' />
          </a>
          <a className='text-gray-400 transition-[color] duration-[0.3s] hover:text-[white]' 
            href="https://www.instagram.com/vvek_9/" aria-label="Instagram"><FaInstagram className='text-md md:text-[24px]' />
          </a>
          <a className='text-gray-400 transition-[color] duration-[0.3s] hover:text-[white]' 
             href="https://www.linkedin.com/in/vivekanand-vernekar/" aria-label="LinkedIn"><FaLinkedin className='text-md md:text-[24px]' />
          </a>
        </div>

        <div className="w-full relative">
          <p className='text-xs relative m-0 px-[5px] py-2.5 md:text-sm'>&copy; 2024 Rentify. &nbsp; All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
