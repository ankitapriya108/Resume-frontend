
import React, { useState, useEffect } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function Create() {
  const [resumeProfiles, setResumeProfiles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userEmail = sessionStorage.getItem("email");

        if (!userEmail) {
          console.error("Email not found in session storage");
          setResumeProfiles([]);
          return;
        }

        const response = await axios.get(`https://resume-backend-fyt7.onrender.com/userData?email=${userEmail}`);
        const { user, resumeProfiles } = response.data;
        console.log("Fetched data:", response.data);

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
  }, []);

  const handleDelete = async (id) => {
    console.log("id:", id);
    try {
      await axios.delete(`https://resume-backend-fyt7.onrender.com/delete/${id}`);
      setResumeProfiles((prevProfiles) =>
        prevProfiles.filter((profile) => profile._id !== id)
      );
    } catch (error) {
      console.error("error", error);
    }
  };

  // const handleEdit = (id) => {
  //   navigate(`/new/MyDetails/${id}`);
  // };

  return (
    <div className='mx-[6rem]'>
      <Link to='/new'>
        <div className='h-[6rem] w-[6rem] border border-solid border-green-600 border-2 text-center pt-3 mt-[5rem]'>
          <h4 className='text-black'><AddCircleOutlineIcon /></h4>
          <p className='text-black'>Create-new</p>
        </div>
      </Link>

      <div className="flex w-[100%] flex-col flex-wrap sm:flex-row justify-center items-center sm:justify-start">
        {resumeProfiles.length > 0 ? (
          resumeProfiles.map((profile, index) => (
            <div key={index} className="flex flex-col gap-y-[.3rem] p-5 m-5 border-[.2rem] border-slate-400 rounded-lg h-[22rem] w-[18rem] overflow-scroll">
              <div className="flex justify-end gap-x-[.5rem] items-center">
              <Link to={`/New/MyDetails/${profile._id}`}>
                    <EditIcon />
                  </Link>

                <DeleteIcon onClick={() => handleDelete(profile._id)} />
              </div>

              <p className="font-medium">
                Image:
                {profile.mydetails?.[0]?.image && (
                  <img src={profile.mydetails[0]?.image} alt="" />
                )}
              </p>

              <p className="font-medium">
                Name:
                <span className="font-normal pl-2">{profile.mydetails?.[0]?.name}</span>
              </p>
              <p className="font-medium">
                Email:
                <span className="font-normal pl-2">{profile.mydetails?.[0]?.email}</span>
              </p>
              
              <p className="font-medium">
                Role:
                <span className="font-normal pl-2">{profile.mydetails?.[0]?.role}</span>
              </p>
              <p className="font-medium">
                Total Experience:
                <span className="font-normal pl-2">{profile.mydetails?.[0]?.totalExp}</span>
              </p>

              <p className="font-medium">
                About:
                <span className="font-normal pl-2">{profile.aboutme?.[0]?.about}</span>
                <br />
                Points:
                <span className="font-normal pl-2">{profile.aboutme?.[0]?.aboutPoint?.join(",")}</span>
              </p>
              
              {profile.skills?.[0]?.data?.map((skill, index) => (
                <p className="font-medium" key={index}>
                  Skills:
                  <span className="font-normal pl-2">{skill.category}</span> - 
                  <span className="font-normal pl-2">{skill.skills}</span>
                </p>
              ))}

              <div className="font-medium">
                Work Experience:
                {profile.work?.[0]?.workExperience?.map((exp, idx) => (
                  <div key={idx} className="font-normal flex flex-col gap-y-[.3rem]">
                    <p className="font-medium">
                      Client Description:
                      <span className="font-normal pl-2">{exp.clientDescription}</span>
                    </p>
                    <p className="font-medium">
                      Country:
                      <span className="font-normal pl-2">{exp.country}</span>
                    </p>
                    <p className="font-medium">
                      Project Name:
                      <span className="font-normal pl-2">{exp.projectName}</span>
                    </p>
                    <p className="font-medium">
                      Role:
                      <span className="font-normal pl-2">{exp.roleWork}</span>
                    </p>
                    <p className="font-medium">
                      Start Date:
                      <span className="font-normal pl-2">{exp.startDate}</span>
                    </p>
                    <p className="font-medium">
                      End Date:
                      <span className="font-normal pl-2">{exp.endDate}</span>
                    </p>
                    <p className="font-medium">
                      Business Solution:
                      <span className="font-normal pl-2">{exp.businessSolution}</span>
                    </p>
                    <p className="font-medium">
                      Technology Stack:
                      <span className="font-normal pl-2">{exp.technologyStack?.join(", ")}</span>
                    </p>
                    
                    <p className="font-medium">
                      Responsibilities:
                      <span className="font-normal pl-2">{exp.projectResponsibility?.join(", ")}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className='m-auto pt-[4rem]'>No resume profiles found</p>
        )}
      </div>
    </div>
  );
}

export default Create;