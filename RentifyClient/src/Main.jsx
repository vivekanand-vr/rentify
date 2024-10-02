import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import PropertiesList from './Pages/PropertyList';
import MyPropertyList from './Pages/MyProertyList';
import AddProperty from './Pages/Forms/AddProperty';
import UpdateProperty from './Pages/Forms/UpdateProperty';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import MyProfile from './Pages/MyProfile';
import Error from './Pages/Error';
import AuthModal from './Components/Authentication/AuthModal';
import './index.css';
import "react-toastify/dist/ReactToastify.css";
import PropertyDetails from './Pages/PropertyDetails';
import About from './Pages/About';

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('login'); // 'login' or 'signin'

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);
  const switchModalType = () => setModalType(prevType => prevType === 'login' ? 'signin' : 'login');

  return (
    <Router>
      <Navbar openLoginModal={() => openModal('login')} openSigninModal={() => openModal('signin')}  />
      <AuthModal isOpen={isModalOpen} 
              modalType={modalType} 
              closeModal={closeModal}
              switchModalType={switchModalType} />
      <Routes>
        <Route path="/about" element={ <About /> } />
        <Route path="/add-property" element={<AddProperty />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/my-properties" element={<MyPropertyList />} />
        <Route path="/update-property" element={<UpdateProperty />} />
        <Route path="/properties" element={<PropertiesList />} />
        <Route path='/property/:pid' element={ <PropertyDetails openModal={() => openModal('login')} /> } />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      <ToastContainer autoClose={2000} position="top-center" theme='colored' />
    </Router>
  );
}                                                                                                                        

export default App;
