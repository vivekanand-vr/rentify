import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import PropertiesList from './Pages/PropertyList';
import MyPropertyList from './Pages/MyProertyList';
import SignIn from './Pages/SignIn';
import LoginUser from './Pages/LoginUser';
import AddProperty from './Pages/AddProperty';
import Navbar from './Components/Navbar';
import MyProfile from './Pages/MyProfile';
import UpdateProperty from './Pages/UpdateProperty';
import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginUser/>} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/add-property" element={<AddProperty />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/my-properties" element={<MyPropertyList />} />
        <Route path="/update-property/:id" element={<UpdateProperty />} />
        <Route path="/properties" element={<PropertiesList />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
