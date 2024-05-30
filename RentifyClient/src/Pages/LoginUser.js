// LoginUser.js
import React, { useState } from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../Actions/loginActions';
import { setUser } from '../Actions/userActions';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required')
});

const LoginUser = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      axios.post('http://localhost:9999/Rentify/user/login', values, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (response.data === 'Register your details first.' || response.data === 'Incorrect password, try again!') {
          setError(response.data);
        } else {
          // Incase of Correct credentials, Username and Id is recieved as a String seperated by s space
          const [userName, userId] = response.data.split(' '); 
          dispatch(loginUser(userId, userName));
          dispatch(setUser({ userId, userName }));
          setSuccess(true);
          setTimeout(() => {
            navigate('/'); // Redirect to home page after 2 seconds
          }, 2000);
        }
      })
      .catch(error => {
        console.error('There was an error logging in:', error);
        setError('An error occurred. Please try again later.');
      })
      .finally(() => {
        setSubmitting(false);
      });
    }
  });

  return (
    <div className="form-page">
      <div className="login-container">
        <h2>LOGIN</h2>
        
        {error && <div className="error">{error}</div>}
        {success && <div className="success">Login successful! Redirecting...</div>}

        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input type="password" name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>

          <button type="submit" disabled={formik.isSubmitting}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginUser;
