import './App.css';
import Sidebar from './Components/Sidebar'
import Dasboard from './Components/Dashboard';
import AllStudents from './Components/AllStudents';
import AddStudents from './Components/AddStudents';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import EditStudent from './Components/EditStudent';
import { useState } from 'react';  

function App() {
  let data = {
    earning:"20,000", 
    annual:"2,40,000",
    task:20,
    pending:26

  }

 let [students , setStudents] = useState([
{
  name:"Ramya",
  email:"ramya03@gamil.com",
  mobile:"9876543345",
  Class:"React"
},

{
  name:"Navin",
  email:"navin18@gamil.com",
  mobile:"987654565",
  Class:"React"
},
{
  name:"krish",
  email:"krish23@gamil.com",
  mobile:"983456345",
  Class:"React"
}



 ]);
 

 return <>
 <BrowserRouter>
 <div style={{display:"grid",gridTemplateColumns:"17% 87%"}}> 
   <div> 
    <Sidebar/>
   </div>
   <div>

    <Routes>
      <Route path = '/dashboard' element={<Dasboard data = {data}/>}/>
      <Route path = '/all-students' element={<AllStudents data = {{students,setStudents}}/>}/>
      <Route path = '/add-students' element={<AddStudents  data = {{students,setStudents}} />}/>
      <Route path = 'edit-student/:id' element={<EditStudent data = {{students,setStudents}}/>}/>
      <Route path = '/' element={<Dasboard data = {data}/>}/>

    </Routes>
   </div>
 </div>
 </BrowserRouter>
 </>
}
export default App;
