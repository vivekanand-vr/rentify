import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userLogout } from '../Redux/Reducers/userSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { useState } from 'react';

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const userName = useSelector((state) => state.userData.firstName);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [mobileView, setMobileView] = useState(false);
  const toggleMobileMenu = () => setMobileView(!mobileView);

  const handleLogout = () => {
    dispatch(userLogout());
    toast.info("You have logged out successfully.");
    navigate('/');
  };

  return (
    <>
      <nav className="bg-[#1F51FF] text-[white] z-[1000] flex justify-between items-center px-2.5 py-0 relative">
        <div className="text-[white] text-4xl py-2 font-bold no-underline sm:text-[40px]">
          <Link to="/">RENTIFY</Link>
        </div>
        <div className="text-[larger] grow text-center hidden sm:block">
          {isLoggedIn && <span>Welcome {userName}!</span>}
        </div>
        <button
          className="text-2xl sm:hidden ml-auto"
          onClick={toggleMobileMenu}
        >
          {mobileView ? '✖' : '☰'}
        </button>
        <div className={`navbar-menu ${mobileView ? 'block' : 'hidden'} sm:flex`}>
          <ul className='text-lg flex items-center [list-style:none] m-0 p-0'>
            {isLoggedIn ? (
              <>
                <li className='cursor-pointer mx-2.5 my-0 hidden sm:block'>
                  <Link to="/add-property">Add Property</Link>
                </li>
                <li className='cursor-pointer mx-2.5 my-0 hidden sm:block'>
                  <Link to="/profile">Profile</Link>
                </li>
                <li className='cursor-pointer mx-2.5 my-0 hidden sm:block' onClick={handleLogout}>
                  Logout
                </li>
              </>
            ) : (
              <>
                <li className='cursor-pointer mx-2.5 my-0 hidden sm:block'>
                  <Link to="/signin">Sign In</Link>
                </li>
                <li className='cursor-pointer mx-2.5 my-0 hidden sm:block'>
                  <Link to="/login">Login</Link>
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
            {isLoggedIn ? (
              <>
                <li className='cursor-pointer mx-1 my-1 pb-1 border-b border-gray-300'>
                  <Link to="/" onClick={() => setMobileView(false)}>Home</Link>
                </li>
                <li className='cursor-pointer mx-1 my-1 pb-1 border-b border-gray-300'>
                  <Link to="/add-property" onClick={() => setMobileView(false)}>Add Property</Link>
                </li>
                <li className='cursor-pointer mx-1 my-1 pb-1 border-b border-gray-300'>
                  <Link to="/profile" onClick={() => setMobileView(false)}>Profile</Link>
                </li>
                <li className='cursor-pointer mx-1 my-1 pb-1 border-b border-gray-300' onClick={() => { handleLogout(); setMobileView(false); }}>Logout</li>
              </>
            ) : (
              <>
                <li className='cursor-pointer mx-1 my-1 pb-1 border-b border-gray-300'>
                  <Link to="/signin" onClick={() => setMobileView(false)}>Sign In</Link>
                </li>
                <li className='cursor-pointer mx-1 my-1 pb-1 border-b border-gray-300'>
                  <Link to="/login" onClick={() => setMobileView(false)}>Login</Link>
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
