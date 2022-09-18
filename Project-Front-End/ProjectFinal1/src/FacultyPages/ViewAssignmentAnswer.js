import React from 'react'
import FacultyNavBar from './FacultyNavBar'
import { useEffect ,useState} from 'react';
//import {useNavigate} from 'react-router-dom';
import axios from 'axios';
function ViewAssignmentAnswer() {

  const [data, setData] = useState({answers: [], isFetching: false});
  const [searchText, setSearchText] = useState('')

  const handleSearchText = (e) => {
    setSearchText(e.target.value)
    console.log(searchText);
}

function handleDownload(file){
  axios ({
    url:`http://localhost:8080/faculty/downloadFile/${file}`,
    method:'GET',
    responseType:'blob'
  })
  .then((response)=>{
    const url=window.URL.createObjectURL(new Blob([response.data]))
    const link=document.createElement('a')
    link.href=link
    link.setAttribute('download','assignment.pdf')
    document.body.appendChild(link)
    link.click()
  }
  )
  }
    useEffect(() => {
      const fetchanswers= async () => {
          try {
            setData((data)=>({answers:data.answers,isFetching:true}));
            console.log(sessionStorage.getItem("userId"));
           const url=`http://localhost:8080/faculty/viewassignmentanswer/${sessionStorage.getItem("userId")}`
            const response =await axios.get(url);
            setData({answers:response.data,isFetching:false});
            console.log(response);
            return response;
          } catch (e) {
              console.log(e);
              setData((data)=>({answers:data.answers,isFetching:false}));
          }
      };
      fetchanswers();
  }, []);
   return(
    <div>
      <FacultyNavBar/>
      <div className='cotainer-fluid'>
       <div className="row justify-content-around align-items-center" style={{height :"98vh" , marginTop:0}}>
       <div className="col-8 p-5 shadow bg-white">
           <center><span><h1>View Assignment Answers</h1></span></center>
           <div className='ui icon input'>
              <input type='text' placeholder='Enter Module or student name' className='prompt' name="searchText" onChange={handleSearchText} value= {searchText}></input>
              <button ><i class="bi bi-search"></i></button>
            </div>
            <br></br>
           <table className="table table-striped table-secondary">
                 <thead className='table-dark'>
                <tr>
                    <th>Sr No.</th>
                    <th>Module Name</th>
                    <th>Student Name</th>
                    <th>Download</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {
             data.answers.filter((val)=>{
              if(searchText==""){
                return val
              }else if(val.moduleName.toLowerCase().includes(searchText.toLowerCase()) || val.studentName.toLowerCase().includes(searchText.toLowerCase())){
              return val
            }
             })
            .map(({id,moduleName,studentName,fileName})=>
         <tr>
          <td>{id}</td>
          <td>{moduleName}</td>
          <td>{studentName}</td>
          <td><button className="btn btn-primary"  onClick={()=>handleDownload(fileName)}>Download</button></td>
          <td>
              <button className="button muted-button">Grade</button>
              <button className="button muted-button" >Remark</button>        
            </td>
         </tr>)}
             
            </tbody>
        </table>  
    </div>
    </div>
 </div></div>  
)
}
export default ViewAssignmentAnswer;