import React, { useState, useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowCircleRight";
import { userData } from "./App";
import axios from "axios";

function Edit() {
  const {
    name,
    role,
    totalExp,
    about,
    aboutPoint,
    data,
    workExperience,
    image,
  } = useContext(userData);
  const urlObject = ["mydetails", "aboutme", "skills", "work"];
  const [counter, setCounter] = useState(1);
  const [nextPage, setNextPage] = useState(urlObject[counter]);
  const handleNextClick = (e) => {
    setCounter(counter + 1);
  };
  useEffect(() => {
    setNextPage(urlObject[counter]);
  }, [counter]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("role", role);
    formData.append("totalExp", totalExp);
    formData.append("about", about);
    formData.append("aboutPoint", JSON.stringify(aboutPoint));
    formData.append("data", JSON.stringify(data));
    formData.append("workExperience", JSON.stringify(workExperience));

    try {
      const response = await axios.post(
        "http://localhost:8000/send",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response", response.data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <>
      <div className="resumeSection w-1/2">
        <form
          method="post"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <div className="form-group flex justify-end ">
            <Link
              className="next bg-slate-500 text-white rounded px-2 py-2 mt-[1rem] "
              to={nextPage}
              onClick={handleNextClick}
            >
              Next <ArrowRightAltIcon />
            </Link>
            <button
              type="submit"
              className="bg-slate-500 text-white rounded mt-[1rem] px-2 ml-2"
            >
              SAVE
            </button>
          </div>
          {/* <button type="submit" className="border-2 border-slate-400 bg-slate-400 text-white rounded px-2 py-2 ml-4">Save</button> */}
        </form>
        <Outlet />
      </div>
    </>
  );
}

export default Edit;
