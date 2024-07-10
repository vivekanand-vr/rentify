import React from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogin } from '../Redux/Reducers/userSlice';
import { toast } from "react-toastify";
import { API_ENDPOINTS } from '../Services/Endpoints';

/* Yup Validation Schema */
const validationSchema = Yup.object({
  firstName: Yup.string().required("First name cannot be empty"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  phoneNumber: Yup.string().required("Phone number cannot be empty").matches(/^[0-9]{10}$/, "Please enter correct phone number"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[a-zA-Z]/, "Password must contain at least one letter")
    .matches(/[0-9]/, "Password must contain at least one number")
});

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      city: '',
      password: ''
    },
    validationSchema,
    onSubmit: values => {
      axios.post(API_ENDPOINTS.user.signin, values)
        .then(response => {
          toast.success('You have signed in sucessfully');

          /* Updating the Login State after Signup & storing user details */
          dispatch(userLogin(response.data));
          setTimeout(() => { navigate('/'); }, 2000); 
        })
        .catch(error => {
          console.error('There was an error Signing in:', error);
          toast.error('There was an error Signing in.')
        });
    }
  });

  return (
      <div className="flex justify-center mx-[auto] my-[30px] p-[20px]">
        <div className="bg-white p-[20px] border-[1px] border-[solid] border-[black] rounded-[8px] [box-shadow:0_4px_8px_rgba(0,_0,_0,_0.1)] w-[450px]">
          <h2 className='text-center font-bold mb-[10px] text-4xl'>SIGN IN</h2>

          <span className='block text-center font-medium mb-4'>Already have an account ? <Link to={"/login"}>Login</Link></span>
          
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label className='block ml-[10px] mb-[5px] font-medium'>First Name:</label>
              <input className='w-[calc(100%-20px)] p-[10px] border-[1px] border-[solid] border-[gray] rounded-[4px] ml-[10px]' 
                    type="text" name="firstName" value={formik.values.firstName}
                    onChange={formik.handleChange} onBlur={formik.handleBlur} required />
              {formik.touched.firstName && formik.errors.firstName ? 
              (<div className="text-[red] text-center mx-0 my-[5px]">{formik.errors.firstName}</div>) : null}
            </div>

            <div className="mb-4">
              <label className='block ml-[10px] mb-[5px] font-medium'>Last Name:</label>
              <input className='w-[calc(100%-20px)] p-[10px] border-[1px] border-[solid] border-[gray] rounded-[4px] ml-[10px]'
                     type="text" name="lastName" value={formik.values.lastName} 
                     onChange={formik.handleChange} onBlur={formik.handleBlur} required />
            </div>

            <div className="mb-4">
              <label className='block ml-[10px] mb-[5px] font-medium'>Email:</label>
              <input className='w-[calc(100%-20px)] p-[10px] border-[1px] border-[solid] border-[gray] rounded-[4px] ml-[10px]'
                    type="email" name="email" value={formik.values.email} 
                    onChange={formik.handleChange} onBlur={formik.handleBlur} required />
              {formik.touched.email && formik.errors.email ? 
              ( <div className="text-[red] text-center mx-0 my-[5px]">{formik.errors.email}</div> ) : null}
            </div>

            <div className="mb-4">
              <label className='block ml-[10px] mb-[5px] font-medium'>Phone Number:</label>
              <input className='w-[calc(100%-20px)] p-[10px] border-[1px] border-[solid] border-[gray] rounded-[4px] ml-[10px]'
              type="text" name="phoneNumber" value={formik.values.phoneNumber} 
                    onChange={formik.handleChange} onBlur={formik.handleBlur} required />
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? 
              ( <div className="text-[red] text-center mx-0 my-[5px]">{formik.errors.phoneNumber}</div> ) : null}
            </div>

            <div className="mb-4">
              <label className='block ml-[10px] mb-[5px] font-medium'>City:</label>
              <input className='w-[calc(100%-20px)] p-[10px] border-[1px] border-[solid] border-[gray] rounded-[4px] ml-[10px]'
                     type="text" name="city" value={formik.values.country} 
                     onChange={formik.handleChange} onBlur={formik.handleBlur} required />
            </div>

            <div className="mb-4">
              <label className='block ml-[10px] mb-[5px] font-medium'>Set Password:</label>
              <input className='w-[calc(100%-20px)] p-[10px] border-[1px] border-[solid] border-[gray] rounded-[4px] ml-[10px]'
                     type="password" name="password" value={formik.values.password} 
                     onChange={formik.handleChange} onBlur={formik.handleBlur} required />
              {formik.touched.password && formik.errors.password ? 
              ( <div className="text-[red] text-center mx-0 my-[5px]">{formik.errors.password}</div> ) : null}
            </div>
            
            <div className='text-center'>
              <button className='bg-green-600 w-[calc(50%-20px)] p-[10px] text-[white] border-[none] rounded-[4px] cursor-pointer ml-[10px] mt-[10px] [transition:all_0.1s_ease] [box-shadow:0_8px_15px_rgba(0,_0,_0,_0.2)]
                                 hover:bg-slate-600'
                      type="submit">Register</button>
            </div>

          </form>
        </div>
      </div>
  );
}

export default SignIn;
