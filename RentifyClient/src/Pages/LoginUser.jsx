import React from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import { toast } from "react-toastify";
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../Redux/Actions/userActions';
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
          dispatch(setUser(response.data));
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
    <body>
      <div className="form-page">
        <div className="login-container">
          <h2>LOGIN</h2>
          
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} required />
              {formik.touched.email && formik.errors.email ? 
                  ( <div className="error">{formik.errors.email}</div> ) : null}
            </div>

            <div className="form-group">
              <label>Password:</label>
              <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} required />
              {formik.touched.password && formik.errors.password ? 
                  ( <div className="error">{formik.errors.password}</div> ) : null}
            </div>
            
            <div className='button-container'>
              <button type="submit" disabled={formik.isSubmitting}>Login</button>
            </div>

          </form>
        </div>
      </div>
    </body>
  );
};

export default LoginUser;
