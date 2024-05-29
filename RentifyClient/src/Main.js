import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import PropertiesList from './Pages/PropertyList';
import MyPropertyList from './Pages/MyProertyList';
import RegisterUser from './Pages/RegisterUser';
import LoginUser from './Pages/LoginUser';
import AddProperty from './Pages/AddProperty';
import Navbar from './Components/Navbar';
import MyProfile from './Pages/MyProfile';
import UpdateProperty from './Pages/UpdateProperty';
import './index.css';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Retrieve login state from local storage
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const storedUserName = localStorage.getItem('userName');
    const storedUserId = localStorage.getItem('userId');

    if (storedIsLoggedIn && storedUserName && storedUserId) {
      setIsLoggedIn(storedIsLoggedIn);
      setUserName(storedUserName);
      setUserId(storedUserId);
    }
  }, []);

  const handleLogin = (name, id) => {
    setIsLoggedIn(true);
    setUserName(name);
    setUserId(id);

    // Save login state to local storage
    localStorage.setItem('isLoggedIn', true);
    localStorage.setItem('userName', name);
    localStorage.setItem('userId', id);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
    setUserId(null);

    // Remove login state from local storage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    localStorage.removeItem('userId');

    // Redirect to the home page
    window.location.href = '/';
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} userName={userName} handleLogout={handleLogout} />
      <Routes>
        <Route path="/login" element={<LoginUser onLogin={handleLogin} />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/add-property" element={<AddProperty isLoggedIn={isLoggedIn} ownerId={userId} />} />
        <Route path="/profile" element={<MyProfile userId={userId} />} />
        <Route path="/my-properties" element={<MyPropertyList userId={userId} />} />
        <Route path="/update-property/:id" element={<UpdateProperty />} />
        <Route path="/properties" element={<PropertiesList isLoggedIn={isLoggedIn} />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
