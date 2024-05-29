// import React, { useEffect, useState } from 'react';
// import { useContext } from 'react';
// import './Home.css';
// import { userData } from './App';
// import axios from 'axios';

// function Home() {
//   const { register } = useContext(userData);
//   const [lastLogin, setLastLogin] = useState(users[0]);
//   const [isLoggedIn, setIsLoggedIn] = useState(true); 

//   useEffect(() => {
//     const fetchRecentLogins = async () => {
//       try {
//         const response = await axios.get("http://localhost:8000/register");
//         if (response.status !== 200) {
//           throw new Error("Failed to fetch data");
//         }
//         const users = response.data.filter((user) => user.lastLogin);
//         setLastLogin(users);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchRecentLogins();
//   }, []);

  

//   return (
//     <div className='mx-[6rem]'>
//       <navbar className='flex flex justify-between h-[7rem] pt-4'>
//         <div className='flex flex justify-center gap-[2rem]'>
//           <h1 className='text-[3rem]'>LOGO</h1>
//           <p className='text-xl'>Resume <br /> Management System</p>
//         </div>
//         <div className='border border-solid border-gray-400 border-2 rounded-lg h-10 pl-2'>
//           <input type="text" placeholder='Search...' />
//         </div>
//         {isLoggedIn && lastLogin && (
//   <div>
//     <p className='font-bold text-blue-700'>Welcome user:</p>
//     <p>Name: <span>{lastLogin.name}</span></p>
//     <p>Email: <span>{lastLogin.email}</span></p>
//   </div>
// )}
//         <div>
//           <button className='px-3 py-1 rounded-full bg-red-600 text-white'>Log-Out</button>
//         </div>
//       </navbar>
//       <hr />
//     </div>
//   );
// }

// export default Home;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Home() {
//   const [lastLogin, setLastLogin] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(true);

//   useEffect(() => {
//     const fetchRecentLogins = async () => {
//       try {
//         const response = await axios.get("http://localhost:8000/register");
//         if (response.status !== 200) {
//           throw new Error("Failed to fetch data");
//         }
//         const users = response.data.filter((user) => user.lastLogin);
//         if (users.length > 0) {
//           setLastLogin(users[0]);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchRecentLogins();
//   }, []);

//   return (
//     <div className='mx-[6rem]'>
//       <navbar className='flex flex justify-between h-[7rem] pt-4'>
//         <div className='flex flex justify-center gap-[2rem]'>
//           <h1 className='text-[3rem]'>LOGO</h1>
//           <p className='text-xl'>Resume <br /> Management System</p>
//         </div>
//         <div className='border border-solid border-gray-400 border-2 rounded-lg h-10 pl-2'>
//           <input type="text" placeholder='Search...' />
//         </div>
//         {isLoggedIn && lastLogin && (
//           <div>
//             <p className='font-bold text-blue-700'>Welcome user:</p>
//             <p>Name: <span>{lastLogin.name}</span></p>
//             <p>Email: <span>{lastLogin.email}</span></p>
//           </div>
//         )}
//         <div>
//           <button className='px-3 py-1 rounded-full bg-red-600 text-white'>Log-Out</button>
//         </div>
//       </navbar>
//       <hr />
//     </div>
//   );
// }

// export default Home;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [lastLogin, setLastLogin] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    const fetchRecentLogins = async () => {
      try {
        const response = await axios.get("http://localhost:8000/register");
        if (response.status !== 200) {
          throw new Error("Failed to fetch data");
        }
        const users = response.data.filter((user) => user.lastLogin);
        setLastLogin(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRecentLogins();
  }, []);

  return (
    <div className='mx-[6rem]'>
      <navbar className='flex flex justify-between h-[7rem] pt-4'>
        <div className='flex flex justify-center gap-[2rem]'>
          <h1 className='text-[3rem]'>LOGO</h1>
          <p className='text-xl'>Resume <br /> Management System</p>
        </div>
        <div className='border border-solid border-gray-400 border-2 rounded-lg h-10 pl-2'>
          <input type="text" placeholder='Search...' />
        </div>
        {isLoggedIn && lastLogin.length > 0 && (
          <div>
            <p className='font-bold text-blue-700'>Welcome user:</p>
            <p>Name: <span>{lastLogin[0].name}</span></p>
            <p>Email: <span>{lastLogin[0].email}</span></p>
          </div>
        )}
        <div>
          <button className='px-3 py-1 rounded-full bg-red-600 text-white'>Log-Out</button>
        </div>
      </navbar>
      <hr />
    </div>
  );
}

export default Home;

