// import React, { useState, useContext, useEffect } from "react";
// import { Link, Outlet } from "react-router-dom";
// import ArrowRightAltIcon from "@mui/icons-material/ArrowCircleRight";
// import { userData } from "./App";
// import axios from "axios";

// function Edit() {
//   const {
//     name,
//     email,
//     role,
//     totalExp,
//     about,
//     aboutPoint,
//     data,
//     workExperience,
//     image,
//   } = useContext(userData);
//   const urlObject = ["mydetails", "aboutme", "skills", "work"];
//   const [counter, setCounter] = useState(1);
//   const [nextPage, setNextPage] = useState(urlObject[counter]);
//   const handleNextClick = (e) => {
//     setCounter(counter + 1);
//   };
//   useEffect(() => {
//     setNextPage(urlObject[counter]);
//   }, [counter]);
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("image", image);
//     formData.append("name", name);
//     formData.append("email", email);
//     formData.append("role", role);
//     formData.append("totalExp", totalExp);
//     formData.append("about", about);
//     formData.append("aboutPoint", JSON.stringify(aboutPoint));
//     formData.append("data", JSON.stringify(data));
//     formData.append("workExperience", JSON.stringify(workExperience));

//     try {
//       const response = await axios.post(
//         "http://localhost:8000/send",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       console.log("Response", response.data);
//     } catch (error) {
//       console.error("Error", error);
//     }
//   };

//   return (
//     <>
//       <div className="resumeSection w-1/2">
//         <form
//           method="post"
//           onSubmit={handleSubmit}
//           encType="multipart/form-data"
//         >
//           <div className="form-group flex justify-end ">
//             <Link
//               className="next bg-slate-500 text-white rounded px-2 py-2 mt-[1rem] "
//               to={nextPage}
//               onClick={handleNextClick}
//             >
//               Next <ArrowRightAltIcon />
//             </Link>
//             <button
//               type="submit"
//               className="bg-slate-500 text-white rounded mt-[1rem] px-2 ml-2"
//             >
//               SAVE
//             </button>
//           </div>
//           {/* <button type="submit" className="border-2 border-slate-400 bg-slate-400 text-white rounded px-2 py-2 ml-4">Save</button> */}
//         </form>
//         <Outlet />
//       </div>
//     </>
//   );
// }

// export default Edit;






import React, { useState, useEffect, useContext } from "react";
import { Link, Outlet, redirect, useNavigate } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowCircleRight";
import { userData } from "./App";
import axios from 'axios'


function Edit() {
  const urlObject = ["mydetails", "aboutme", "skills", "work"];
  const [counter, setCounter] = useState(1);
  const [nextPage, setNextPage] = useState(urlObject[counter]);

  const {name,setName,email,setEmail,role,setRole,totalExp,setTotalExp,about,setAbout,image,setImage,aboutPoint,setAboutPoint,data,setData,workExperience,setWorkExperience} = useContext(userData);


  const handleNextClick = (e) => {
    setCounter(counter + 1);
 
  };
  useEffect(() => {
    setNextPage(urlObject[counter])
  }, [counter])


 


//   axios.post('http://localhost:8000/send',
//   {mydetails:
//   {
//     name : name,
//     role : role,
//     totalExp : totalExp 

//   }
// },
// {aboutme:
//   {
//      about: about,
//      aboutPoint: aboutPoint
//   }
// },

// {work:
//   {
//      client: client,
//      country: country,
//      projectName: projectName,
//      roleWork: roleWork,
//      startDate: startDate,
//      endDate: endDate,
//      businessSolution: businessSolution,
//      technologyStack: technologyStack,
//      projectRes: projectRes
//   }
// },

// {
//   headers : {
//       "Content-Type" : "application/json",
//   },
// })
// .then((res)=>{
//   console.log(res)
// })
// .catch((error) => {
//   console.error("Error:", error);
// });

function handleSubmit(e) {
  e.preventDefault();

  fetch("http://localhost:8000/send", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      mydetails:{
        name: name,
        email: email,
        role: role,
        totalExp: totalExp
      },
      aboutme: {
        about: about,
        aboutPoint: aboutPoint,
      },
      skills:{
        data: data
      },
      work: {
      workExperience: workExperience
      }
    })
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Response:", data);
    
    })
    .catch((error) => {
      console.error("Error:", error);
    });
    console.log(userData)
}



  return (


    <>
      <div className="resumeSection w-1/2">
        <form method="post" onSubmit={handleSubmit}>
          <div className="form-group flex justify-end ">
            <Link
              className="next bg-slate-500 text-white rounded px-2 py-2 mt-[1rem] "
              to={nextPage}
              onClick={handleNextClick}
            >
              Next <ArrowRightAltIcon />
            </Link>
            <button type="submit" className="bg-slate-500 text-white rounded mt-[1rem] px-2 ml-2">SAVE</button>

          </div>
        {/* <button type="submit" className="border-2 border-slate-400 bg-slate-400 text-white rounded px-2 py-2 ml-4">Save</button> */}

        </form>
        <Outlet />
      </div>
    </>
  );
}

export default Edit;


