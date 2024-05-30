import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';
import { userData } from './App';

function RegisterPage() {
  const { register, setRegister } = useContext(userData);
  const [registerStatus, setRegisterStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(key, value) {
    setRegister((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (register.createPassword !== register.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    fetch("http://localhost:8000/datasave", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(register),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('*Email already in use*');
        }
        return response.json();
      })
      .then((user) => {
        console.log("Response:", user);
        setRegisterStatus("Registration Successful!!!");
        setErrorMessage('');
      })
      .catch((error) => {
        console.error("Error:", error.message);
        setErrorMessage(error.message);
        setRegisterStatus('');
      });
  }

  return (
    <>
      <div className='h-screen flex justify-center items-center bg-cover bg-center bg-fixed bg-black-700' style={{ backgroundImage: "url(./Web-bg.webp)" }}>
        <div className='box h-[80%] w-[70%] bg-white rounded-xl mx-auto flex justify-center items-center'>
          <div className='w-full h-[100%] border-r border-black'>
            <h1 className='registration text-[1.5rem] font-bold text-center pt-[4rem] '>USER-REGISTRATION</h1>
            <hr />
            <form method="post" onSubmit={handleSubmit} className='flex flex-col justify-center items-center mt-[2rem]'>
              <input type="text"
                placeholder='Name:'
                value={register.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className='px-2 py-2 border-2 border-slate-500 w-[70%] rounded-xl mt-[1rem]' />

              <input type="email"
                placeholder='E-mail:'
                value={register.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className='px-2 py-2 border-2 border-slate-500 w-[70%] rounded-xl mt-[1rem]' />

              {errorMessage && (
                <p className='text-red-700 mt-[1rem]'>{errorMessage}</p>
              )}

              <input type="password"
                placeholder='Create password:'
                value={register.createPassword}
                onChange={(e) => handleChange('createPassword', e.target.value)}
                className='px-2 py-2 border-2 border-slate-500 w-[70%] rounded-xl mt-[1rem]' />

              <input type="password"
                placeholder='Confirm password:'
                value={register.confirmPassword}
                onChange={(e) => handleChange('confirmPassword', e.target.value)}
                className='px-2 py-2 border-2 border-slate-500 w-[70%] rounded-xl mt-[1rem]' />

              <button type='submit' className='register-btn py-2 text-center w-[70%] mt-[2rem]  text-white font-bold rounded-xl'>REGISTER</button>

            </form>
            {registerStatus && (
              <p className='text-green-700 text-center font-medium text-xl mt-[1rem]'>{registerStatus}</p>
            )}
            {registerStatus && (
              <NavLink to="/"
                className='border-2 border-black bg-white px-2 py-2 text-center w-[20%]  mt-[1rem]  font-bold rounded-xl ml-[13rem] inline-block'>
                NEXT
              </NavLink>
            )}
          </div>

          <div className='bg-register bg-cover w-full h-[100%]'></div>
        </div>
      </div>
    </>
  )
}

export default RegisterPage;
