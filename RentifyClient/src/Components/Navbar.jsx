import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../Redux/Actions/userActions';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const Navbar = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const userName = useSelector(state => state.user.firstName);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    toast.info("You have logged out successfully.");
    navigate('/');
  };

  return (
    <nav className="bg-[#1F51FF] text-[white] z-[1000] flex justify-between items-center px-2.5 py-0">
      <div className="text-[white] text-[40px] font-bold no-underline">
        <Link to="/">RENTIFY</Link>
      </div>
      <div className="text-[larger] grow text-center">
        {isLoggedIn && <span>Welcome {userName}!</span>}
      </div>
      <div className="navbar-menu">
        <ul className='text-lg flex items-center [list-style:none] m-0 p-0'>
          {isLoggedIn ? (
            <>
              <li className='cursor-pointer mx-2.5 my-0'><Link to="/add-property">Add Property</Link></li>
              <li className='cursor-pointer mx-2.5 my-0'><Link to="/profile">Profile</Link></li>
              <li className='cursor-pointer mx-2.5 my-0' onClick={handleLogout}>Logout</li>
            </>
          ) : (
            <>
              <li className='cursor-pointer mx-2.5 my-0'><Link to="/signin">Sign In</Link></li>
              <li className='cursor-pointer mx-2.5 my-0'><Link to="/login">Login</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
