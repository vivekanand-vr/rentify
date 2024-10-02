import React from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import 'animate.css';

const AuthModal = ({ isOpen, modalType, closeModal, switchModalType }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white animate__animated animate__fadeInDown rounded-md">
        {modalType === 'login' ? (
          <LoginForm closeModal={closeModal} switchToSignin={switchModalType} />
        ) : (
          <SignUpForm closeModal={closeModal} switchToLogin={switchModalType} />
        )}
      </div>
    </div>
  );
};

export default AuthModal;