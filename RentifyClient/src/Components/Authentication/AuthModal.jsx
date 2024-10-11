import React from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import 'animate.css';

const AuthModal = ({ isOpen, modalType, closeModal, switchModalType }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white animate__animated animate__fadeInDown rounded-md flex max-w-4xl">
        <div className="hidden md:block md:bg-[url('./Assets/Modal-poster.jpg')] w-96 bg-cover bg-center">
          <h2 className="mt-36 text-white text-3xl font-bold text-center px-4">
              Find Your Dream Home Today
          </h2>
        </div>
        <div className="flex-1 p-6 md:min-h-[600px] ">
          {modalType === 'login' ? (
            <LoginForm closeModal={closeModal} switchToSignin={switchModalType} />
          ) : (
            <SignUpForm closeModal={closeModal} switchToLogin={switchModalType} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;