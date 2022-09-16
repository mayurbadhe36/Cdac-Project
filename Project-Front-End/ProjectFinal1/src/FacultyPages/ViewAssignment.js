import React from 'react'
import FacultyNavBar from './FacultyNavBar'
import { useEffect ,useState} from 'react';
import axios from 'axios';

function ViewAssignment() {

  const [data, setData] = useState({assignments: [], isFetching: false});
    useEffect(() => {

      const fetchassignments= async () => {
          try {
            setData((data)=>({assignments:data.assignments,isFetching:true}));
            console.log(sessionStorage.getItem("userId"));
           const url=`http://localhost:8080/faculty/viewassignment/${sessionStorage.getItem("userId")}`
            const response =await axios.get(url);
            setData({assignments:response.data,isFetching:false});
            console.log(response);
            return response;
          } catch (e) {
              console.log(e);
              setData((data)=>({assignments:data.assignments,isFetching:false}));
          }
      };
      fetchassignments();
  }, []);
  return(
    <div>
      <FacultyNavBar/>
      <div className='container-fluid'>
       <div className="row justify-content-around align-items-center" style={{height :"98vh" , marginTop:0}}>
       <div className="col-8 p-5 shadow bg-white">
           <center><span><h1>View Assignment </h1></span></center>
           <table className="table table-striped table-secondary">
                 <thead className='table-dark'>
                   <tr>
                <th>Sr No.</th>
                <th>Module Name</th>
                <th>Description</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
         {data.assignments.map(({id,moduleName,description})=>
         <tr>
          <td>{id}</td>
          <td>{moduleName}</td>
          <td>{description}</td>
          <td>
              <button className="button muted-button">Edit</button>
              <button className="button muted-button">Delete</button>        
            </td>
         </tr>)}
        </tbody>
    </table> </div>
    </div>
 </div></div>  
)
}

export default ViewAssignment