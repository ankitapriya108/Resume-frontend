
import React, { useState, useEffect } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Create() {


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



  // useEffect(() => {
  //   fetch("http://localhost:8000/getdata") 
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setName(data.mydetails.name);
  //       setRole(data.mydetails.role);
  //       setEmail(data.mydetails.email);
  //       setTotalExp(data.mydetails.totalExp);
  //       setAbout(data.aboutme.about);
  //       setAboutPoint(data.aboutme.aboutPoint);
  //       setData(data.skills.data);
  //       setWorkExperience(data.work.workExperience);
  //       setIsLoading(false); 
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //       setIsLoading(false); 
  //     });
  // }, []);

  // if (isLoading) {
  //   return <p>Loading...</p>; 
  // }

  const [resumeProfiles, setResumeProfiles] = useState([]);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userEmail = sessionStorage.getItem("email");

        if (!userEmail) {
          console.error("email not found in session storage");
          setResumeProfiles([]);
          return;
        }

        const response = await axios.get(
          `http://localhost:8000/userData?email=${userEmail}`
        );
        const { user, resumeProfiles } = response.data;
        console.log(response, "35 create");
       

        if (resumeProfiles && resumeProfiles.length > 0) {
          setResumeProfiles(resumeProfiles);
        } else {
          setResumeProfiles([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setResumeProfiles([]);
      }
    };

    fetchUserDetails();
  }, []);

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



<div className="flex w-[100%] flex-col sm:flex-row justify-center items-center  sm:justify-start">
        {resumeProfiles.length > 0 ? (
          resumeProfiles.map((profile, index) => (
            <>
              <div
                key={index}
                className="flex flex-col gap-y-[.3rem] profile p-5 m-5 border-[.2rem] border-slate-400 rounded-lg h-[22rem] w-[19rem] overflow-scroll"
              >
                <div className="flex justify-end gap-x-[.5rem] items-center  ">
                 
                </div>

                <p className="font-medium">
                  Name:
                  <span className="font-normal pl-2">
                    {profile.mydetails.name}
                  </span>
                </p>
                <p className="font-medium">
                Image:
                {profile.mydetails.image && (
                  <img
                    src={profile.mydetails.image}
                    alt=""
                   
                  />
                )}
              </p>
                <p className="font-medium">
                  Role:
                  <span className="font-normal  pl-2">
                    {profile.mydetails.role}
                  </span>
                </p>
                <p className="font-medium">
                  Total Experience:
                  <span className="font-normal  pl-2">
                    {profile.mydetails.totalExp}
                  </span>
                </p>
                
                {/* <div className="font-medium ">
                  Work Experience:
                  {profile.workExperience.map((exp, idx) => (
                    <div
                      key={idx}
                      className="font-normal flex flex-col  gap-y-[.3rem]"
                    >
                      <p className="font-medium">
                        Client Description:
                        <span className="font-normal  pl-2">
                          {exp.clientDescription}
                        </span>
                      </p>
                      <p className="font-medium">
                        Country:
                        <span className="font-normal  pl-2">{exp.country}</span>
                      </p>
                      <p className="font-medium">
                        Project Name:
                        <span className="font-normal  pl-2">
                          {exp.projectName}
                        </span>
                      </p>
                      <p className="font-medium">
                        Role:
                        <span className="font-normal  pl-2">
                          {exp.roleWork}
                        </span>
                      </p>
                      <p className="font-medium">
                        Start Date:
                        <span className="font-normal  pl-2">
                          {exp.startDate}
                        </span>
                      </p>
                      <p className="font-medium">
                        End Date:
                        <span className="font-normal  pl-2">
                          {exp.endDate}
                        </span>
                      </p>
                      <p className="font-medium">
                        Business Solution:
                        <span className="font-normal  pl-2">
                          {exp.businessSolution}
                        </span>
                      </p>
                      <p className="font-medium">
                        Technology Stack:
                        <span className="font-normal  pl-2">
                          {exp.technologyStack.join(", ")}
                        </span>
                      </p>
                      <div className="font-medium flex">
                        Responsibilities:
                        <ul>
                          {exp.projectRes.map(
                            (responsibility, idx) => (
                              <li className="pl-2 font-normal" key={idx}>
                               
                                {responsibility}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div> */}
              </div>
            </>
          ))
        ) : (
          <p>No resume profiles found</p>
        )}
      </div>



        <div>
       
      
        </div>
      </div>
    </>
  );
}

export default Create;



