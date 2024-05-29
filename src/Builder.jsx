import React from 'react'
import BadgeIcon from '@mui/icons-material/Badge';
import InfoIcon from '@mui/icons-material/Info';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { NavLink } from 'react-router-dom';
import { Container } from '@mui/material';

function Builder() {
  return (
    <>
    
    <div className=' min-h-screen  w-[25%] p-7 bg-slate-300'>
        <NavLink to='/'
         className='text-[2rem]'>Resume Builder
         </NavLink>

        <ul>
        <li>
          <NavLink
            to="mydetails"
            className="flex items-center w-full inline-block p-3 mb-4 rounded-md bg-slate-800 text-white"
          >
            <BadgeIcon className="icon mr-2" /> My Details
          </NavLink>
        </li>
        <li>
          <NavLink
            to="aboutme"
            className="flex items-center w-full inline-block p-3 mb-4 rounded-md bg-slate-800 text-white"
          >
            <InfoIcon className="icon mr-2" /> About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="skills"
            className="flex items-center w-full inline-block p-3 mb-4 rounded-md bg-slate-800 text-white"
          >
            <MiscellaneousServicesIcon className="icon mr-2" /> Skills & Proficiencies
          </NavLink>
        </li>
        <li>
          <NavLink
            to="work"
            className="flex items-center w-full inline-block p-3 mb-4 rounded-md bg-slate-800 text-white"
          >
            < BusinessCenterIcon className="icon mr-2" /> Work Expriences
          </NavLink>
        </li>
      </ul>

    </div>
  
    </>
  )
}

export default Builder