import React, { useState, useContext } from 'react';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import PersonIcon from '@mui/icons-material/Person';
import { userData } from './App';

function MyDetails() {
  const { image, name, setName, role, setRole, totalExp, setTotalExp, setImage,email,setEmail } = useContext(userData);
  const [fileName, setFileName] = useState("No selected file");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <main className='flex justify-center'>
        <form  className='flex justify-center items-center cursor-pointer h-[200px] w-[200px] bg-gray-300 rounded-full' >
          <input
            type="file"
            accept='image/*'
            name="image"
            hidden
            id="fileInput"
            onChange={handleFileChange}
          />
          <label htmlFor="fileInput" className='cursor-pointer'>
            {image ? (
              <img className='h-[200px] w-[200px] rounded-full' src={image} alt="" />
            ) : (
              <span className="text-gray-500">   
                <PersonIcon sx={{ fontSize: "5rem" }} />
              </span>
            )}
          </label>
        </form>
      </main>

      <div className='flex flex-col justify-center gap-5 ml-[7rem] mt-4'>
        <div className='flex items-center gap-[4rem]'>
          <label>Name:</label>
          <input  
            type="text"
            className='border-2 border-black rounded-sm px-1 py-2'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-[4rem]'>">
          <label htmlFor="">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className=" border-2 border-gray-500 rounded-sm px-5"
          />
        </div>

        <div className='flex items-center gap-[5rem]'>
          <label>Role:</label>
          <input
            type="text"
            className='border-2 border-black rounded-xl px-1 py-2'
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <div className='flex items-center gap-[3rem]'>
          <label>Total Exp:</label>
          <input
            type="text"
            className='border-2 border-black rounded-sm px-1 py-2'
            value={totalExp}
            onChange={(e) => setTotalExp(e.target.value)}
          />Years
        </div>
      </div>
    </>
  );
}

export default MyDetails;
