import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginForm = () => {
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
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged In");
      // Optionally redirect or show a success message
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className='login-container'>
      <form className='login-form' onSubmit={handleSubmit}>
        <h2>Login</h2>
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
        <button type="submit">Login</button>
        {error && <p className='error-message'>{error}</p>}
        <p>Not registered yet? <Link to="/signup">Sign Up</Link></p>
      </form>
    </div>
  );
};

export default LoginForm;
