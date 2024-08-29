import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    if (email === '' || password === '') {
      setError('Please fill out both fields.');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Account Created");
      // Optionally redirect or show a success message
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className='signup-container'>
      <form className='signup-form' onSubmit={handleSubmit}>
        <h2>Sign up</h2>
        <label htmlFor='email'>
          Email:
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label htmlFor='password'>
          Password:
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Sign Up</button>
        {error && <p className='error-message'>{error}</p>}
        <p>Already Registered? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
};

export default SignUpForm;
