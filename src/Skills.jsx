import React, { useContext, useState } from 'react';
import { userData } from './App';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';

function YourComponent() {
const {data,setData} = useContext(userData)

  const handleInputChange = (index, key, value) => {
    const newData = [...data];
    newData[index][key] = value;
    setData(newData);
  };

  const handleAddRow = () => {
    setData([...data, { id: data.length + 1, category: '', skills: '' }]);
  };
  

  return (
    <div className='  mt-[3rem] ml-[5rem]'>
      <table className='border-collapse border border-black'>
        <thead>
          <tr>
            <th className='h-[3rem] w-[15rem] border border-black text-center bg-slate-400 px-1'>Category</th>
            <th className='h-[3rem] w-[15rem] border border-black text-center bg-slate-400 px-1'>Skills</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.id}>
              <td className=' w-[15rem] border border-black text-left px-1'>
                <input
                  type="text"
                  value={row.category}
                  onChange={(e) => handleInputChange(index, 'category', e.target.value)}
                  className='py-2 px-2'
                />
              </td>
              <td className='h-[3rem] w-[15rem] border border-black text-left px-1'>
                <input
                  type="text"
                  value={row.skills}
                  onChange={(e) => handleInputChange(index, 'skills', e.target.value)}
                  className='py-2 px-2'
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddCircleOutline onClick={handleAddRow}/>
     
    </div>
  );
}

export default YourComponent;
