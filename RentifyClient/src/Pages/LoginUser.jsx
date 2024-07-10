import React from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import { toast } from "react-toastify";
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogin } from '../Redux/Reducers/userSlice';
import { API_ENDPOINTS } from '../Services/Endpoints';

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
    <div className='min-h-screen'>
      <div className="flex justify-center mx-[auto] my-[30px] p-[20px]">
        <div className="bg-white p-[20px] border-[1px] border-[solid] border-[black] rounded-[8px] [box-shadow:0_4px_8px_rgba(0,_0,_0,_0.1)] w-[450px]">
          <h2 className='text-center font-bold mb-[10px] text-4xl'>LOGIN</h2>
          
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label className='block ml-[10px] mb-[5px] font-medium'>Email:</label>
              <input className='w-[calc(100%-20px)] p-[10px] border-[1px] border-[solid] border-[gray] rounded-[4px] ml-[10px]'
                      type="email" name="email" value={formik.values.email} onChange={formik.handleChange} required />
              {formik.touched.email && formik.errors.email ? 
                  ( <div className="text-[red] text-center mx-0 my-[5px]">{formik.errors.email}</div> ) : null}
            </div>

            <div className="mb-4">
              <label className='block ml-[10px] mb-[5px] font-medium'>Password:</label>
              <input className='w-[calc(100%-20px)] p-[10px] border-[1px] border-[solid] border-[gray] rounded-[4px] ml-[10px]'
                      type="password" name="password" value={formik.values.password} onChange={formik.handleChange} required />
              {formik.touched.password && formik.errors.password ? 
                  ( <div className="text-[red] text-center mx-0 my-[5px]">{formik.errors.password}</div> ) : null}
            </div>
            
            <div className='text-center'>
              <button className='bg-green-600 w-[calc(50%-20px)] p-[10px] text-[white] border-[none] rounded-[4px] cursor-pointer ml-[10px] mt-[10px] [transition:all_0.1s_ease] [box-shadow:0_8px_15px_rgba(0,_0,_0,_0.2)]
                                 hover:bg-slate-600'
                      type="submit" disabled={formik.isSubmitting}>Login</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
