import React from 'react'
import FacultyNavBar from './FacultyNavBar'
function ViewAssignmentAnswer() {
   return(
    <div>
      <FacultyNavBar/>
      <div className='cotainer-fluid'>
       <div className="row justify-content-around align-items-center" style={{height :"98vh" , marginTop:0}}>
       <div className="col-8 p-5 shadow bg-white">
           <center><span><h1>View Assignment Answers</h1></span></center>
           <table className="table table-striped table-secondary">
                 <thead className='table-dark'>
                <tr>
                    <th>Sr No.</th>
                    <th>Fuculty Name</th>
                    <th>Module Name</th>
                    <th>Student Name</th>
                    <th>Download</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
             
              <tr>
               <td> </td>
               <td> </td>
               <td> </td> 
               <td></td>
               <td></td>
               <td> </td>
              </tr>
             
            </tbody>
        </table>  
    </div>
    </div>
 </div></div>  
)
}
export default ViewAssignmentAnswer;