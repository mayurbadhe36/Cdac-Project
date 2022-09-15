import React from 'react';
import FacultyNavBar from './FacultyNavBar';
import './Faculty';

function AddNoticeBoard() {
  return (
    <div>
        <FacultyNavBar/>
        <div className='cotainer-fluid'>
       <div className="row justify-content-around align-items-center" style={{height :"98vh" , marginTop:0}}>
       <div className="col-4 p-5 shadow bg-white">
            <span className='fs-3 mb-3'><center>Add NoticeBoard</center></span>
            <form>
          <div className='mb-3'>
           <lable>Faculty Name</lable><br></br>
            <input type='text' placeholder='Enter Faculty Name' name='faculty' className='form-control'></input>
           </div>
           <div className='mb-3'>
             <label>Date</label>
             <input type ='date' name='date' className='form-control' placeholder='Enter date'></input>
           </div>
           <div className='mb-3'>
             <label>Description</label><br></br>
             <textarea className='col-100  form-control' name='text' > </textarea>
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
  )
}

export default AddNoticeBoard