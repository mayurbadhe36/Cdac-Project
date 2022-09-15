import React from 'react'
import AdminNavBar from './AdminNavBar';
import {useNavigate} from 'react-router-dom';
import { useEffect ,useState} from 'react';
import axios from 'axios';

function AdminViewStudent() {
  const [data, setData] = useState({students: [], isFetching: false});
  const navigate = useNavigate();
  useEffect(() => {
    const fetchstudents= async () => {
        try {
          setData((data)=>({students:data.students,isFetching:true}));
          const response =await axios.get('http://localhost:8080/admin/viewstudent')
          setData({students:response.data,isFetching:false});
          console.log(response);
          return response;
        } catch (e) {
            console.log(e);
            setData((data)=>({students:data.students,isFetching:false}));
        }
    };
          fetchstudents();
      }, []);

 const removeStudent=(id) => {
  axios.delete(`http://localhost:8080/admin/viewstudent/delete/${id}`).then((response) => {
    alert("Student record with Id " + id + " deleted!");
    
    navigate('/admin/viewstudent')

  }).catch(error => {
    alert("Error Ocurred in remove Student :" + error);
  });

}

  return(
    <div>
           <AdminNavBar></AdminNavBar>
           <form>
      <div className='cotainer-fluid'>
       <div className="row justify-content-around align-items-center" style={{height :"98vh" , marginTop:0}}>
       <div className="col-8 p-5 shadow bg-white">
           <center><span><h1>View Student Details </h1></span></center>
           <table className="table table-striped table-secondary">
                 <thead className='table-dark'>
                   <tr>
                <th>Sr No.</th>
                <th>Name</th>
                <th>Date of Birth</th>
                <th>Mobile Number</th>
                <th>Email</th>
                <th>Address</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
         
        {data.students.map(({id,name,dob,mobNo,email,address})=>
             <tr>
              <td>
                {id}
              </td>
              <td>
                {name}
              </td>
              <td>
                {dob}
              </td>
              <td>
                {mobNo}
              </td>
              <td>
                {email}
              </td>
              <td>
                {address}
              </td>
           <td>
              <button className="button muted-button" onClick={()=>navigate(`/admin/editstudent/${id}`)}>Edit</button>
              {/* <button className="button muted-button" onClick={() => removeFaculty({id})}>Delete</button> */}
              <button className="button muted-button" onClick={() => removeStudent(id)}>Delete</button>
            </td>
          </tr>
          )}
        </tbody>
    </table> 
    </div>
    </div>
 </div>
 </form>
 </div>  
)
}

export default AdminViewStudent;