import React from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../Redux/Reducers/userSlice';
import { toast } from "react-toastify";
import { API_ENDPOINTS } from '../../Services/Endpoints';
import { MdLocationOn, CgProfile, IoCallOutline, RiLockPasswordLine, 
         MdOutlineMail, IoCloseCircleOutline } from '../../Services/Icons';

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

const SignUpForm = ({ closeModal, switchToLogin }) => {
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
    onSubmit: async (values) => {
      try {
        const response = await axios.post(API_ENDPOINTS.user.signin, values);
        if(response.data.status === "Email is already registered."){
          toast.error('Email is already registered.');
          return;
        }

        // If email not registered, proceed with the registeration
        toast.success('You have signed in successfully');

        /* Updating the Login State after Signup & storing user details */
        dispatch(userLogin(response.data));
        setTimeout(() => { closeModal(); }, 2000); 
      } 
      catch (error) {
        console.error('There was an error Signing in:', error);
        toast.error('There was an error Signing in.');
      }
    }
  });

  return (
      <div className="flex justify-center mx-[auto]">
        <div className="text-sm md:text-base rounded-2xl w-80 md:w-96 p-3">
          <button onClick={closeModal} className="absolute right-4 top-4 text-xl font-bold">
            <IoCloseCircleOutline className='md:size-6' />
          </button>

          <h2 className='font-nunito text-center font-bold mb-3 text-2xl md:text-3xl'>Sign In</h2>
          
          <span className='block text-center font-medium mb-4'>Already have an account? <span className='text-blue-700 font-medium cursor-pointer' onClick={switchToLogin}>Login</span></span>
          
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label className='flex items-center ml-3 mb-1 font-medium'>First Name <CgProfile className='ml-1 text-xl' /></label>
              <input className='w-[calc(100%-20px)] p-2 border-1 border-slate-400 rounded-md ml-3' 
                    type="text" name="firstName" value={formik.values.firstName}
                    onChange={formik.handleChange} onBlur={formik.handleBlur} required />
              {formik.touched.firstName && formik.errors.firstName ? 
              (<div className="text-[red] text-center mx-0 my-[5px]">{formik.errors.firstName}</div>) : null}
            </div>

            <div className="mb-4">
              <label className='flex items-center ml-3 mb-1 font-medium'>Last Name <CgProfile className='ml-1 text-xl' /></label>
              <input className='w-[calc(100%-20px)] p-2 border-1 border-slate-400 rounded-md ml-3'
                    type="text" name="lastName" value={formik.values.lastName} 
                    onChange={formik.handleChange} onBlur={formik.handleBlur} required />
            </div>

            <div className="mb-4">
              <label className='flex items-center ml-3 mb-1 font-medium'>Email <MdOutlineMail className='ml-1 text-xl' /></label>
              <input className='w-[calc(100%-20px)] p-2 border-1 border-slate-400 rounded-md ml-3'
                    type="email" name="email" value={formik.values.email} 
                    onChange={formik.handleChange} onBlur={formik.handleBlur} required />
              {formik.touched.email && formik.errors.email ? 
              (<div className="text-[red] text-center mx-0 my-[5px]">{formik.errors.email}</div>) : null}
            </div>

            <div className="mb-4">
              <label className='flex items-center ml-3 mb-1 font-medium'>Phone Number <IoCallOutline className='ml-2' /></label>
              <input className='w-[calc(100%-20px)] p-2 border-1 border-slate-400 rounded-md ml-3'
              type="text" name="phoneNumber" value={formik.values.phoneNumber} 
                    onChange={formik.handleChange} onBlur={formik.handleBlur} required />
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? 
              (<div className="text-[red] text-center mx-0 my-[5px]">{formik.errors.phoneNumber}</div>) : null}
            </div>

            <div className="mb-4">
              <label className='flex items-center ml-3 mb-1 font-medium'>City <MdLocationOn className='ml-1 text-xl' /></label>
              <input className='w-[calc(100%-20px)] p-2 border-1 border-slate-400 rounded-md ml-3'
                    type="text" name="city" value={formik.values.city} 
                    onChange={formik.handleChange} onBlur={formik.handleBlur} required />
            </div>

            <div className="mb-4">
              <label className='flex items-center ml-3 mb-1 font-medium'>Set Password <RiLockPasswordLine className='ml-1 text-xl' /></label>
              <input className='w-[calc(100%-20px)] p-2 border-1 border-slate-400 rounded-md ml-3'
                    type="password" name="password" value={formik.values.password} 
                    onChange={formik.handleChange} onBlur={formik.handleBlur} required />
              {formik.touched.password && formik.errors.password ? 
              (<div className="text-[red] text-center mx-0 my-[5px]">{formik.errors.password}</div>) : null}
            </div>
            
            <div className='text-center'>
              <button className='bg-blue-700 w-1/2 md:w-2/5 p-2 text-[white] border-[none] rounded-md cursor-pointer ml-3 mb-2
                                hover:bg-slate-700'
                      type="submit">Register</button>
            </div>

          </form>
        </div>
      </div>
  );
}

export default SignUpForm;
