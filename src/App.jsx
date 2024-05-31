import { createContext, useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import Builder from './Builder'
import Create from './Create'
import ResumeWrapper from './ResumeWrapper'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Work from './Work'
import SelectSection from './SelectSection'
import MyDetails from './MyDetails'
import RegisterPage from './RegisterPage'
import LoginPage from './LoginPage'

export const userData = createContext();


function App() {
  

const [image,setImage] = useState("")
const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [role,setRole] = useState("")
const [totalExp,setTotalExp] = useState("")
const [about,setAbout] = useState("")
const [aboutPoint,setAboutPoint] = useState([""])
const [data, setData] = useState([{ id: 1, category: '', skills: '' }]);
const [workExperience, setWorkExperience] = useState([{
  clientDescription: "",
  country: "",
  projectName: "",
  roleWork: "", 
  startDate: "",
  endDate: "",
  businessSolution: "",
  technologyStack: [""],
  projectResponsibility: [""],
  }]);

const [register,setRegister] = useState({
  name:"",
  email:"",
  createPassword:"",
  confirmPaasword:""
});



  return (
    <>
      <userData.Provider value={{name,setName,email,setEmail,role,setRole,totalExp,setTotalExp,about,setAbout,image,setImage,aboutPoint,setAboutPoint,data, setData,workExperience,setWorkExperience,register,setRegister}}>
    
      <BrowserRouter>
      <Routes>
      <Route path ='/register' element={<RegisterPage/>}/>
      <Route path ='/' element={<LoginPage/>}/>
        <Route path ='/create' element={<><Home/> <Create/></>}/>

        <Route path='/new' element = {<ResumeWrapper/>}>
           <Route index element={<SelectSection/>}/>
           <Route element={<MyDetails/>} path='mydetails'/>
           <Route element={<MyDetails/>} path='mydetails/:id'/>
           <Route element={<AboutMe/>} path='aboutme'/>
           <Route element={<AboutMe/>} path='aboutme/:id'/>
           <Route element={<Skills/>} path='skills'/>
           <Route element={<Skills/>} path='skills/:id'/>
           <Route element={<Work/>} path='work'/>
           <Route element={<Work/>} path='work/:id'/>
        </Route>
        
      </Routes>
      </BrowserRouter>
      </userData.Provider>





    </>
  )
}

export default App
