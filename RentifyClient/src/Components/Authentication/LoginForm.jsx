import React from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import { toast } from "react-toastify";
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../Redux/Reducers/userSlice';
import { MdOutlineMail, RiLockPasswordLine } from "../../Services/Icons";
import { API_ENDPOINTS } from '../../Services/Endpoints';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required')
});

const LoginForm = ({ closeModal, switchToSignin }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      axios.post(API_ENDPOINTS.user.login, values, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (response.data.status === 'You need to sign in first.') {
          toast.error("Email not found. You need to sign in first.");
          // Navigate to Signin after 2 seconds
          setTimeout(() => { switchToSignin(); }, 1000);
        }
        else if (response.data.status === 'Incorrect password, try again!'){
          toast.error("Invalid Credentials");

        }
        else {
          // console.log(response.data);
          dispatch(userLogin(response.data));
          toast.success("Login successful! Redirecting...");
          // Navigate to home after 2 seconds
          setTimeout(() => { closeModal();} , 1000); 
        }
      })
      .catch(error => {
        console.error('There was an error logging in:', error);
        toast.error('An error occurred. Please try again later.')
      })
      .finally(() => {
        setSubmitting(false);
      });
    }
  });

  return (
        <div className="bg-white rounded-2xl p-3 w-80 md:w-96">
          <button onClick={closeModal} className="float-right text-xl font-bold">
            &times;
          </button>

          <h2 className='font-nunito text-center font-bold my-3 text-2xl md:text-3xl'>Login</h2>
          
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label className='relative ml-3 mb-1 font-medium flex items-center'>Email&nbsp; <MdOutlineMail size={18} /> </label>
              <input className='w-[calc(100%-20px)] p-2 md:p-3 border-1 border-slate-400 rounded-sm ml-3'
                      type="email" name="email" value={formik.values.email} onChange={formik.handleChange} required />
              {formik.touched.email && formik.errors.email ? 
                  ( <div className="text-[red] text-center mx-0 my-[5px]">{formik.errors.email}</div> ) : null}
            </div>

            <div className="mb-4">
              <label className='ml-3 mb-1 font-medium flex items-center'>Password&nbsp; <RiLockPasswordLine size={18} /></label>
              <input className='w-[calc(100%-20px)] p-2 md:p-3 border-1 border-slate-400 rounded-sm ml-3'
                      type="password" name="password" value={formik.values.password} onChange={formik.handleChange} required />
              {formik.touched.password && formik.errors.password ? 
                  ( <div className="text-[red] text-center mx-0 my-[5px]">{formik.errors.password}</div> ) : null}
            </div>
            
            <div className='flex flex-col items-center'>
              <button className='bg-blue-700 w-1/2 p-2 text-white rounded-md cursor-pointer hover:bg-slate-700'
                      type="submit" disabled={formik.isSubmitting}>Login</button>
              
              <span className='text-gray-700 mx-auto mt-3'>Don't have an account ? 
                <span className='text-blue-700 cursor-pointer' onClick={switchToSignin}> Register</span> 
              </span>
            </div>
          </form>
      </div>
  );
};

export default LoginForm;
