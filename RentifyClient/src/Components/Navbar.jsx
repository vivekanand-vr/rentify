import React, { useState, useEffect } from 'react';
import Logo from '/rentify-icon.png';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userLogout } from '../Redux/Reducers/userSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { CgProfile } from "react-icons/cg";

const Navbar = ({ openLoginModal, openSigninModal }) => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const userName = useSelector((state) => state.userData?.firstName || '');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [mobileView, setMobileView] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setMobileView(!mobileView);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleProfileDropdown = () => setProfileDropdownOpen(!profileDropdownOpen);

  const handleLogout = () => {
    dispatch(userLogout());
    toast.info("You have logged out successfully.");
    navigate('/');
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownOpen && !event.target.closest('.dropdown')) {
        setDropdownOpen(false);
      }
      if (profileDropdownOpen && !event.target.closest('.profile-dropdown')) {
        setProfileDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [dropdownOpen, profileDropdownOpen]);

  return (
    <>
      <nav className="bg-blue-700 text-[white] z-[1000] flex justify-between items-center px-2.5 py-0 relative">
        <div className="flex items-center text-white text-4xl py-1.5 font-bold no-underline sm:text-[40px]">
          <img className="h-10 md:h-12 mt-[-5px]" src={Logo} alt="rentify-icon" />
          <Link to="/" className='ml-1'>RENTIFY</Link>
        </div>
        <div className="text-lg grow text-center hidden sm:block">
          {isLoggedIn && <span>Hey there 👋 {userName}!</span>}
        </div>
        <button
          className="text-2xl sm:hidden ml-auto"
          onClick={toggleMobileMenu}
        >
          {mobileView ? '✖' : '☰'}
        </button>
        <div className={`navbar-menu ${mobileView ? 'block' : 'hidden'} sm:flex`}>
          <ul className='text-lg flex items-center [list-style:none] m-0 p-0'>
            <li className='cursor-pointer mx-2.5 my-0 hidden sm:block'>
              <Link to="/about">About Us</Link>
            </li>
            {isLoggedIn ? (
              <>
                <li className='relative cursor-pointer mx-2.5 my-0 hidden sm:block dropdown'>
                  <div onClick={toggleDropdown} className="flex items-center">
                    <span className='mx-2'>Manage</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                  {dropdownOpen && (
                    <ul className="absolute right-0 mt-3 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
                      <li className="px-4 py-2 hover:bg-neutral-300 text-black">
                        <Link to="/add-property">Add Listing</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-neutral-300 text-black">
                        <Link to="/my-properties">My Listings</Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className='relative cursor-pointer mx-2.5 my-0 hidden sm:block profile-dropdown'>
                  <div onClick={toggleProfileDropdown} className="flex items-center">
                    <CgProfile className='size-7' />
                  </div>
                  {profileDropdownOpen && (
                    <ul className="absolute right-0 mt-3 min-w-32 bg-white border-1 border-gray-300 rounded-md shadow-lg">
                      <li className="px-3 py-2  hover:bg-neutral-300 text-black">
                        <Link to="/profile">My Profile</Link>
                      </li>
                      <li className="px-3 py-2 hover:bg-neutral-300 text-black" onClick={handleLogout}>
                        Logout
                      </li>
                    </ul>
                  )}
                </li>
              </>
            ) : (
              <>
                <li className='cursor-pointer mx-2.5 my-0 hidden sm:block'>
                  <span onClick={openSigninModal}>Sign In</span>
                </li>
                <li className='cursor-pointer mx-2.5 my-0 hidden sm:block'>
                  <span onClick={openLoginModal}>Login</span>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>

      {mobileView && (
        <div className="fixed inset-y-0 right-0 bg-white w-1/2 sm:hidden p-4 shadow-lg z-[1100] flex flex-col">
          <button
            type="button"
            className="text-black text-2xl ml-auto mb-4"
            onClick={toggleMobileMenu}
          >
            ✖
          </button>
          <ul className="text-md flex flex-col space-y-3 [list-style:none] m-0 p-0">
            <li className='cursor-pointer mx-1 my-2 pb-1 border-b border-gray-300'>
                <Link to="/" onClick={() => setMobileView(false)}>Home</Link>
            </li>
            <li className='cursor-pointer mx-1 my-2 pb-1 border-b border-gray-300'>
                <Link to="/about" onClick={() => setMobileView(false)}>About Us</Link>
            </li>
            {isLoggedIn ? (
              <>
                <li className='cursor-pointer mx-1 my-2 pb-1 border-b border-gray-300'>
                  <Link to="/add-property" onClick={() => setMobileView(false)}>Add Listing</Link>
                </li>
                <li className='cursor-pointer mx-1 my-2 pb-1 border-b border-gray-300'>
                  <Link to="/my-properties" onClick={() => setMobileView(false)}>My Listings</Link>
                </li>
                <li className='cursor-pointer mx-1 my-2 pb-1 border-b border-gray-300'>
                  <Link to="/profile" onClick={() => setMobileView(false)}>Profile</Link>
                </li>
                <li className='cursor-pointer mx-1 my-2 pb-1 border-b border-gray-300' onClick={() => { handleLogout(); setMobileView(false); }}>Logout</li>
              </>
            ) : (
              <>
                <li className='cursor-pointer mx-1 my-2 pb-1 border-b border-gray-300'>
                  <span onClick={() => {setMobileView(false); openSigninModal(); }}>Sign In</span>
                </li>
                <li className='cursor-pointer mx-1 my-2 pb-1 border-b border-gray-300'>
                  <span onClick={() => {setMobileView(false); openLoginModal(); }}>Login</span>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
