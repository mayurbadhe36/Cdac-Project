import React, { useState } from 'react'
import FacultyNavBar from './FacultyNavBar'
import axios from 'axios';

function UploadAssignment() {
   const [facultyName,setFacultyName] = useState('')
   const [moduleName,setModuleName] = useState('')
   const [description, setDescription] = useState('')
   const [selectedFile, setSelectedFile] = useState(null);

   const submitForm = (e) => {
      const formData = new FormData();
      formData.append("facultyName",facultyName);
      console.log(facultyName);
      console.log(formData.get('facultyName'))
      formData.append("facultyId",sessionStorage.getItem('userId'))
      formData.append("file",selectedFile);
      formData.append("moduleName",moduleName);
      formData.append("description",description);
     // console.log(selectedFile)
     // console.log(formData.getItem('file'))
      console.log(description);
      console.log(formData);
      const config = {
         headers: {
           'content-type': 'multipart/form-data',
         },
       };
      axios
        .post("http://localhost:8080/faculty/addassignment", formData,config)
        .then((res) => {
          alert("File Upload success");
        })
        .catch((err) => alert("File Upload Error"));
        console.log(formData);
    };

  return (
    <div>
        <FacultyNavBar/>
        <div className="container-fluid">
              <div className="row justify-content-around align-items-center" style={{height :"98vh" , marginTop:-35}}>
                      <div className="col-4 p-3 shadow bg-white">
                         <form id='assignment'>
                            <span className="head fs-3"><center>Upload Assignment</center></span>
                                <div className="ui form">
                                        <div className="field">
                                            <label>Faculty Name</label>
                                            <div className="mb-3">
                                            <input type="text" name="facultyName" className="form-control" placeholder="Enter Faculty Name"value={facultyName}
          onChange={(e) => setFacultyName(e.target.value)} />
                                    </div>
                                 </div>
                                 <div className="field">
                                     <label>Module Name</label>
                                        <div className="mb-3">
                                           <input type="text" name="moduleName" className="form-control" placeholder="Enter Subject"value={moduleName}
          onChange={(e) => setModuleName(e.target.value)} />
                                        </div>
                                 </div>
                                 <div className='mb-3'>
                                 <label>Description</label><br></br>
                                 <textarea className='col-100  form-control' value={description}
          onChange={(e) => setDescription(e.target.value)}></textarea>
                              </div>

                                 <div className="field">
                                 <label>Upload File</label><br></br>
                                     <input
          type="file"
          value={selectedFile} name="file"
          onChange={(e) => setSelectedFile(e.target.value.file)}
        />

                                 </div>
                                    <div className="mb-3 py-3" style={{textAlign:"center"}}>
                                           <button className="btn btn-primary form-control" onClick={submitForm}>Upload</button>
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