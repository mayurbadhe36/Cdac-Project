import React from 'react'
import FacultyNavBar from './FacultyNavBar'
import axios from 'axios';
function UploadAssignment() {

   // const handleUploadFirst=function(){
   //        url="http://localhost:8080/faculty/uploadAssignment";
   //       axios.post(url,{
             
   //       }).then(res=>
   //           console.log(res.data)
   //           )
   //   }
   // }

   const handleUpload=function(){
   axios({
      method: 'post',
      url:'http://localhost:8080/faculty/uploadAssignment',
      body:document.getElementById("file"),
      headers:{'Content-Type': 'multipart/form-data' }
      })
      .then(function (response) {
        
          console.log(response);
      })
      .catch(function (response) {
          //handle error
          console.log(response);
      });
   }

  return (
    <div>
        <FacultyNavBar/>
        <div className="container-fluid">
              <div className="row justify-content-around align-items-center" style={{height :"98vh" , marginTop:-35}}>
                      <div className="col-4 p-3 shadow bg-white">
                         <form>
                            <span className="head fs-3"><center>Upload Assignment</center></span>
                                <div className="ui form">
                                        <div className="field">
                                            <label>Faculty Name</label>
                                            <div className="mb-3">
                                            <input type="text" name="fname" className="form-control" placeholder="Enter Faculty Name" />
                                    </div>
                                 </div>
                                 <div className="field">
                                     <label>Subject Name</label>
                                        <div className="mb-3">
                                           <input type="text" name="subname" className="form-control" placeholder="Enter Subject" />
                                        </div>
                                 </div>
                                 <div className='mb-3'>
                                 <label>Description</label><br></br>
                                 <textarea className='col-100  form-control' id='text' > </textarea>
                              </div>

                                 <div className="field">
                                     <label>Upload File</label>
                                        <div className="mb-3">
                                          <input type="file" onChange={handleUpload}/>
                                        </div>
                                 </div>
                                  
                                    <div className="mb-3 py-3" style={{textAlign:"center"}}>
                                           <button className="btn btn-primary form-control">Upload</button>
                                    </div>
                            </div>
                        </form>
                            	
                      </div>
                     
              </div>
       </div>

        </div>
  )
}

export default UploadAssignment