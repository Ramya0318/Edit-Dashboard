import React, { useState,useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import{useParams,useNavigate} from 'react-router-dom';


function EditStudent(props) {

useEffect(()=>{
    if(params.id<props.data.students.length)
    {
       getData();
    }
    else
    {
       alert ("Selected students is not available")
       navigate('/all-students')
    }
},[])



  let params = useParams()
  let navigate = useNavigate();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let [cls, setCls] = useState("");

  let getData= ()=>{
    setName(props.data.students[params.id].name)
    setEmail(props.data.students[params.id].email)
    setMobile(props.data.students[params.id].mobile)
    setCls(props.data.students[params.id].class)
      
  }

let handleSubmit = ()=>{
  let newData =  { name,email,mobile,"Class":cls};
  let newArray = [...props.data.students];
  newArray.splice(params.id,1,newData)
  props.data.setStudents(newArray)


   navigate("/all-students")
}

  return (
    <Form>
        <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control value = {name} type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control value = {email} type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>mobile</Form.Label>
        <Form.Control value = {mobile} type="text" placeholder="Mobile" onChange={(e)=>setMobile(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Class</Form.Label>
        <Form.Control value = {cls} type="Class" placeholder="Class" onChange={(e)=>setCls(e.target.value)} />
      </Form.Group>
    
      <Button variant="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  )
}

export default EditStudent
