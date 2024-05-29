import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';


function LoginPage() {




  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Invalid email or password');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Login successful:', data);
      
        window.location.href = '/create'; 
      })
      .catch((error) => {
        console.error('Login error:', error.message);
        setErrorMessage(error.message);
      });
  }

  return (
    <>
      <div className='h-screen flex justify-center items-center bg-cover bg-center bg-fixed bg-black-700' style={{ backgroundImage: "url(./Web-bg.webp)" }}>
        <div className=' box h-[80%] w-[50%] bg-white rounded-xl mx-auto flex justify-center items-center'>
          <div className=' w-[70%] h-[100%]'>
            <h1 className=' login text-[1.5rem] font-bold text-center pt-[4rem] '>WELCOME-USER</h1>
            <hr />
            <form method:post onSubmit={handleSubmit}>


            <div className='flex justify-center items-center gap-[3rem] mt-[2rem]'>
            <div className='px-2 py-2 flex justify-left items-center gap-[3rem] border-2 border-slate-500 w-[70%] rounded-xl'>
            
                <img src="./Google-img.webp" alt="" className='h-[2.5rem] w-[2.5rem]' />
                <h1 className='font-bold'>Log in with Google</h1>
            </div>   
        </div>

        <div className='flex justify-center items-center mt-[1rem]'>
                <p className='h-[2px] w-[6rem] bg-slate-500'></p>
                <p className='text-slate-500'>OR LOGIN WITH EMAIL</p>
                <p className='h-[2px] w-[6rem] bg-slate-500'></p>
            </div>
          
              <div className='flex justify-center items-center gap-[3rem] mt-[2rem]'>
                <input
                  type="email"
                  placeholder='Email:'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='px-2 py-2 border-2 border-slate-500 w-[70%] rounded-xl'
                />
              </div>

              <div className='flex justify-center items-center gap-[3.5rem] mt-[2rem]'>
                <input
                  type="password"
                  placeholder='Password:'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='px-2 py-2 border-2 border-slate-500 w-[70%] rounded-xl'
                />
              </div>

              <div className='flex justify-left items-center gap-[7rem] ml-[5rem] mt-[1rem]'>
                <div className='flex justify-left items-center'>
                <input type="checkbox" />
                 <p>Keep me loged in</p>
                </div>
                <div className='text-blue-700'>forgot password?</div>
              </div>

              {errorMessage && (
                <p className='text-red-700 text-center font-medium text-xl mt-[1rem]'>{errorMessage}</p>
              )}

        
              <button type='submit' className='login-btn py-2 text-center w-[70%] ml-[5rem] mt-[1.5rem] border-2  text-white font-bold rounded-xl'>LOG-IN</button>
              
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
