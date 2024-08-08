import React from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import { toast } from "react-toastify";
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../Redux/Reducers/userSlice';
import { MdOutlineMail, RiLockPasswordLine } from "../../Services/Icons";
import { API_ENDPOINTS } from '../../Services/Endpoints';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required')
});

const LoginUser = () => {
  const navigate = useNavigate();
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
          setTimeout(() => { navigate('/signin'); }, 2000);
        }
        else if (response.data.status === 'Incorrect password, try again!'){
          toast.error("Invalid Credentials");

        }
        else {
          // console.log(response.data);
          dispatch(userLogin(response.data));
          toast.success("Login successful! Redirecting...");
          // Navigate to home after 2 seconds
          setTimeout(() => { navigate('/');} , 2000); 
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
    <div className='h-[84vh] md:h-screen'>
      <div className="text-sm md:text-base flex justify-center mx-[auto] my-6 p-5">
        <div className="bg-white p-2 md:p-4 border-[1px] border-[solid] border-black rounded-lg w-[450px]">
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
            
            <div className='text-center'>
              <button className='bg-blue-700 w-1/2 md:w-2/5 p-2 text-white border-[none] rounded-md cursor-pointer mb-2
                                 hover:bg-slate-700'
                      type="submit" disabled={formik.isSubmitting}>Login</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
