// // import React, { useContext,useState,useEffect } from 'react'
// // import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// // import {Link} from 'react-router-dom'
// // import axios from 'axios'
// // // import { userData } from './App';

// // function Create() {
  
// //   const [userData, setUserData] = useState([]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:8000/send'); 
// //         setUserData(response.data);
// //       } catch (error) {
// //         console.error('Error fetching data:', error);
// //       }
// //     };

// //     fetchData();
// //   }, []);


// //   return (
// //    <>
// //     <div className='mx-[6rem]'>
// //         <Link to='/new'>
// //         <div className=' h-[6rem] w-[6rem] border border-solid border-green-600 border-2 text-center pt-3 mt-[5rem]'>
// //          <h4 className='text-black-400'><AddCircleOutlineIcon/></h4>
// //             <p className='text-black-400'>Create-new</p>
// //         </div>

// //         <div>
// //       <h1>User Data</h1>
// //       <ul>
// //         {userData.map(user => (
// //           <li key={user._id}>
// //             <p>Name: {user.name}</p>
// //             <p>Email: {user.email}</p>
           
// //           </li>
// //         ))}
// //       </ul>
// //     </div>



// //         </Link>
// //     </div>
    
// //    </>
// //   )
// // }

// // export default Create







// import React, { useState, useEffect } from 'react';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// function Create() {
//   const [userData, setUserData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/getdata');
//         setUserData(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <>
//       <div className='mx-[6rem]'>
//         <Link to='/new'>
//           <div className='h-[6rem] w-[6rem] border border-solid border-green-600 border-2 text-center pt-3 mt-[5rem]'>
//             <h4 className='text-black'><AddCircleOutlineIcon /></h4>
//             <p className='text-black'>Create-new</p>
//           </div>
//         </Link>

//         <div>
//           <h1>User Data</h1>
//           <ul>
//             {userData.map(user => (
//               <li key={user._id}>
//                 <p>Name: {user.mydetails}</p>
                
              
//                 <p>Name: {user.aboutme}</p>
              
//                 <p>Name: {user.skills}</p>
//                 <p>Name: {user.work}</p>
                
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Create;






import React, { useState, useEffect } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Create() {
  // const [userData, setUserData] = useState([]);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [totalExp, setTotalExp] = useState("");
  const [about, setAbout] = useState("");
  const [aboutPoint, setAboutPoint] = useState("");
  const [data, setData] = useState("");
  const [workExperience, setWorkExperience] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:8000/getdata');
  //       setUserData(response.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);



  useEffect(() => {
    fetch("http://localhost:8000/getdata") 
      .then((response) => response.json())
      .then((data) => {
        setName(data.mydetails.name);
        setRole(data.mydetails.role);
        setTotalExp(data.mydetails.totalExp);
        setAbout(data.aboutme.about);
        setAboutPoint(data.aboutme.aboutPoint);
        setData(data.skills.data);
        setWorkExperience(data.work.workExperience);
        setIsLoading(false); 
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false); 
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>; 
  }

  return (
    <>
      <div className='mx-[6rem]'>
        <Link to='/new'>
          <div className='h-[6rem] w-[6rem] border border-solid border-green-600 border-2 text-center pt-3 mt-[5rem]'>
            <h4 className='text-black'><AddCircleOutlineIcon /></h4>
            <p className='text-black'>Create-new</p>
          </div>
        </Link>

        {/* <div>
          <h1>User Data</h1>
          <ul>
            {userData.map(user => (
              <li key={user._id}>
                <p>{user.mydetails}</p>
                <p> {user.aboutme}</p>
                <p>{user.skills}</p>
                <p>{user.work}</p>
                
              </li>
            ))}
          </ul>
        </div> */}


        <div>
        <p><strong>Name:</strong> {data}</p>
      
        </div>
      </div>
    </>
  );
}

export default Create;

