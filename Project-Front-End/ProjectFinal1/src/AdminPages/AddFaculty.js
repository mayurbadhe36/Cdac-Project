import React, { useState } from 'react'
import AdminNavBar from './AdminNavBar';
import axios from 'axios';
function AddFaculty() {

    const [facultyName,setFacultyName]=useState('')
    const [dob,setDob]=useState('')
    const [mobNo,setMobNo]=useState('')
    const [email, setEmail] = useState('')
    const[address,setAddress]=useState('')
    const [password, setPassword] = useState('')
    
    const handleFacultyName = (e) => {
        setFacultyName(e.target.value)
    }

    const handleDob = (e) => {
        setDob(e.target.value)
    }
    const handleMobNo = (e) => {
        setMobNo(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleAddress = (e) => {
        setAddress(e.target.value)
    }

   const  handleApi =async () =>{
    console.log(email);
    let user1= await axios.post('http://localhost:8080/admin/addfaculty',
        {
            facultyName:facultyName,
            dob:dob,
            mobNo:mobNo,
            email : email,
            address:address,
            password : password
        })
        .then(result =>{
               console.log(result.data)    
               return result.data; 

               })   
               console.log(user1);   
        }
	
  return (
     <div>
        <AdminNavBar/>
        <div className='cotainer-fluid'>
       <div className="row justify-content-around align-items-center" style={{height :"98vh" , marginTop:0}}>
       <div className="col-4 p-4 shadow bg-white">
            <span className='fs-3 mb-3'><center>Add Faculty</center></span>
    <form>
          <div className='mb-3'>
           <lable>Faculty Name</lable><br></br>
          
            <input type='text' placeholder='Enter Faculty Name' id='facultyName' className='form-control' onChange={handleFacultyName} ></input>
           </div>
           <div className='mb-3'>
             <label>Date Of Birth</label>
             <input type ='date' id='dob' className='form-control' placeholder='Enter date'onChange={handleDob} ></input>
           </div>
          
           <div className='mb-3'>
              <label>Mobile: </label>
              <input type='text' className='col-4' id='mobNo' onChange={handleMobNo} ></input>
                &nbsp;
              <label>Email:</label> 
              <input type='email' className='col-5' id='email' onChange={handleEmail}></input ><br></br>
              
           </div>
           <div className='mb-3'>
             <label>Address</label><br></br>
             <textarea className='col-100  form-control' id='address' onChange={handleAddress}> </textarea>
           </div>

           <div className='mb-3'>
               <label>Password</label>
              <input type='password' id='password' className='form-control' onChange={handlePassword}></input>
           </div>
           <br></br>
           <div className='mb-3'>
           <button className='btn btn-primary form-control'> Submit</button>
    
           </div>
           

           </form>

       </div>
       </div>
       </div>
        </div>
  
  );
}

export default AddFaculty;