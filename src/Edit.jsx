import React, { useState, useEffect, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowCircleRight";
import { userData } from "./App";
import axios from 'axios';

function Edit() {
  const urlObject = ["mydetails", "aboutme", "skills", "work"];
  const [counter, setCounter] = useState(1);
  const [nextPage, setNextPage] = useState(urlObject[counter]);

  const {name, setName, email, setEmail, role, setRole, totalExp, setTotalExp, about, setAbout, image, setImage, aboutPoint, setAboutPoint, data, setData, workExperience, setWorkExperience} = useContext(userData);

  const handleNextClick = (e) => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    setNextPage(urlObject[counter]);
  }, [counter]);

  function handleSubmit(e) {
    e.preventDefault();

    fetch("https://resume-backend-fyt7.onrender.com/send", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mydetails: {
          name: name,
          email: email,
          role: role,
          totalExp: totalExp
        },
        aboutme: {
          about: about,
          aboutPoint: aboutPoint,
        },
        skills: {
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
    console.log(userData);
  }

  return (
    <>
      <div className="resumeSection w-1/2">
        <form method="post" onSubmit={handleSubmit}>
          <div className="form-group flex justify-end">
            <Link
              className="next bg-slate-500 text-white rounded px-2 py-2 mt-[1rem]"
              to={nextPage}
              onClick={handleNextClick}
            >
              Next <ArrowRightAltIcon />
            </Link>
            <button type="submit" className="bg-slate-500 text-white rounded mt-[1rem] px-2 ml-2">SAVE </button>
            
          </div>
        </form>
        <Outlet />
      </div>
    </>
  );
}

export default Edit;
