

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Home() {
//   const [lastLogin, setLastLogin] = useState([]);
//   const [isLoggedIn, setIsLoggedIn] = useState(true);
//   const [userData,setUserData] = useState("")

//   // useEffect(() => {
//   //   const fetchRecentLogins = async () => {
//   //     try {
//   //       const response = await axios.get("http://localhost:8000/register");
//   //       if (response.status !== 200) {
//   //         throw new Error("Failed to fetch data");
//   //       }
//   //       const users = response.data.filter((user) => user.lastLogin);
//   //       setLastLogin(users);
//   //     } catch (error) {
//   //       console.log(error);
//   //     }
//   //   };
//   //   fetchRecentLogins();
//   // }, []);

 
//   useEffect(() => {
//     const userEmail = sessionStorage.getItem("email");

//     if (userEmail) {
//       const fetchUserDetails = async () => {
//         try {
//           const response = await axios.get(
//             `http://localhost:8000/userData?email=${userEmail}`
//           );
         
//           setUserData(response.data);
//         } catch (error) {
//           console.error("Error", error);
//         }
//       };

//       fetchUserDetails();
//     } else {
//       console.error("email not found in session storage");
//     }
//   }, []);

// const {user,resumeprofile} = userData;

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
//         {/* {isLoggedIn && lastLogin.length > 0 && (
//           <div>
//             <p className='font-bold text-blue-700'>Welcome user:</p>
//             <p>Name: <span>{lastLogin[0].name}</span></p>
//             <p>Email: <span>{lastLogin[0].email}</span></p>
//           </div>
//         )} */}

// {user ? (
//               <div>
//                 <p className="font-medium">
                
//                   Name: <span className="font-normal">{user.name}</span>
//                 </p>
//                 <p className="font-medium">
              
//                   Email: <span className="font-normal">{user.email}</span>
//                 </p>
//                 {/* <p className="font-medium"> Password: <span className="font-normal">{user.password}</span></p> */}
//               </div>
//             ) : (
//               <p>User not found</p>
//             )}

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
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const userEmail = sessionStorage.getItem("email");

//     if (userEmail) {
//       const fetchUserDetails = async () => {
//         try {
//           const response = await axios.get(`http://localhost:8000/userData?email=${userEmail}`);
//           setUserData(response.data.user);
//         } catch (error) {
//           console.error("Error fetching user data:", error);
//         }
//       };

//       fetchUserDetails();
//     } else {
//       console.error("Email not found in session storage");
//     }
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

//         {userData ? (
//           <div>
//             <p className="font-medium text-blue-600 font-bold">
//               Welcome user: 
//             </p>
//             <p className="font-medium">
//               Name: <span className="font-normal">{userData.name}</span>
//             </p>
//             <p className="font-medium">
//               Email: <span className="font-normal">{userData.email}</span>
//             </p>
//           </div>
//         ) : (
//           <p>User not found</p>
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
import { redirect } from 'react-router-dom';

function Home() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userEmail = sessionStorage.getItem("email");

    if (userEmail) {
      const fetchUserDetails = async () => {
        try {
          const response = await axios.get(`https://resume-backend-7ze5.onrender.com/userData?email=${userEmail}`);
          setUserData(response.data.user);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchUserDetails();
    } else {
      console.error("Email not found in session storage");
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.clear("email");
    window.location.href = "/"; 
  };

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

        {userData ? (
          <div>
            <p className="font-medium text-blue-600 font-bold">
              Welcome user: 
            </p>
            <p className="font-medium">
              Name: <span className="font-normal">{userData.name}</span>
            </p>
            <p className="font-medium">
              Email: <span className="font-normal">{userData.email}</span>
            </p>
          </div>
        ) : (
          <p>User not found</p>
        )}

        <div>
          <button onClick={handleLogout} className='px-3 py-1 rounded bg-red-600 text-white'>Log-Out</button>
        </div>
      </navbar>
      <hr />
    </div>
  );
}

export default Home;
