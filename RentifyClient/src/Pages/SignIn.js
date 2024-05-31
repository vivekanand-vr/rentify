import React, { useState } from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../Actions/loginActions';

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
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
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
      axios.post('http://localhost:9999/Rentify/user/signin', values)
        .then(response => {
          setSuccessMessage('You have signed in sucessfully');
          setError('');

          /* Updating the Login State after Signup */
          const userId = response.data;
          dispatch(loginUser(userId, values.firstName));

          setTimeout(() => {
            navigate('/');
          }, 2000); 
        })
        .catch(error => {
          console.error('There was an error registering the user:', error);
          setError('There was an error registering the user.');
          setSuccessMessage('');
        });
    }
  });

  return (
    <div className="form-page">
      <div className="register-container">
        <h2>SIGN IN</h2>

        {error && <div className="error">{error}</div>}
        {successMessage && <div className="success">{successMessage}</div>}
        
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label>First Name:</label>
            <input type="text" name="firstName" value={formik.values.firstName}
                   onChange={formik.handleChange} onBlur={formik.handleBlur} required />
            {formik.touched.firstName && formik.errors.firstName ? 
            (<div className="error">{formik.errors.firstName}</div>) : null}
          </div>

          <div className="form-group">
            <label>Last Name:</label>
            <input type="text" name="lastName" value={formik.values.lastName} 
                   onChange={formik.handleChange} onBlur={formik.handleBlur} required />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" value={formik.values.email} 
                   onChange={formik.handleChange} onBlur={formik.handleBlur} required />
            {formik.touched.email && formik.errors.email ? 
            ( <div className="error">{formik.errors.email}</div> ) : null}
          </div>

          <div className="form-group">
            <label>Phone Number:</label>
            <input type="text" name="phoneNumber" value={formik.values.phoneNumber} 
                   onChange={formik.handleChange} onBlur={formik.handleBlur} required />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? 
            ( <div className="error">{formik.errors.phoneNumber}</div> ) : null}
          </div>

          <div className="form-group">
            <label>City:</label>
            <input type="text" name="city" value={formik.values.country} 
                   onChange={formik.handleChange} onBlur={formik.handleBlur} required />
          </div>

          <div className="form-group">
            <label>Set Password:</label>
            <input type="password" name="password" value={formik.values.password} 
                   onChange={formik.handleChange} onBlur={formik.handleBlur} required />
            {formik.touched.password && formik.errors.password ? 
            ( <div className="error">{formik.errors.password}</div> ) : null}
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
