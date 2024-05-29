import React, { useContext } from 'react'
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import { userData } from './App';

function AboutMe() {
  const {about,setAbout,aboutPoint,setAboutPoint } = useContext(userData);
  function handleInput(index,value){
    
    let newInp = [...aboutPoint]
     newInp[index] = value ;
     setAboutPoint(newInp);
   }
   function handleAdd() {
     setAboutPoint([...aboutPoint, ""]);
   }

  return (
   <>
  
   
   <div className='flex  gap-[4rem] justify-center mt-[7rem]'>
    <div>
    <label>About Me:</label>

    </div>
<div>
    <textarea name="" id="" cols="42" rows="10" className='border-2 border-black px-3 py-1'
    onChange={(e)=>{
      setAbout(e.target.value)
    }}
    >
      {about}
    </textarea>
   
    <div className="flex ">
    <div className="flex flex-col gap-[1rem] mt-2">
          {aboutPoint.map((item, index) => (
            // console.log(item);
            <div key={index} className="">
              <input
                className="border-black border-2 rounded px-3 py-1 w-[21rem]"
                type="text"
                placeholder="Write points about you"
                value={item.value}
                onChange={(e) =>{
                  handleInput(index,e.target.value)} 
                }
                  
                
              />
              
            </div>
          ))}
           
        </div>
        
        <button onClick={handleAdd}>
          <AddCircleOutlineIcon />
        </button>
 </div>
      
    

</div>
</div>
    

   </>
  )
}

export default AboutMe