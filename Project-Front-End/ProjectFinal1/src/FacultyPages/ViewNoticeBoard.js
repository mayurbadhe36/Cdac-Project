import React from 'react'
import FacultyNavBar from './FacultyNavBar'
import { useEffect ,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function ViewNoticeBoard () {
  const [data, setData] = useState({noticeboards: [], isFetching: false});
  const navigate = useNavigate();
  useEffect(() => {
    const fetchnoticeboards= async () => {
        try {
          setData((data)=>({noticeboards:data.noticeboards,isFetching:true}));
          const response =await axios.get(`http://localhost:8080/faculty/viewnoticeboard/${sessionStorage.getItem("userId")}`)
          setData({noticeboards:response.data,isFetching:false});
          console.log(response);
          return response;
        } catch (e) {
            console.log(e);
            setData((data)=>({noticeboards:data.noticeboards,isFetching:false}));
        }
    };
    fetchnoticeboards();
}, []);

const removeNoticeBoard =(id) => {
  axios.delete(`http://localhost:8080/faculty/viewnoticeboard/delete/${id}`).then((response) => {
    alert("NoticeBoard record with Id " + id + " deleted!");
  
    navigate('/faculty/viewnoticeboard')
    navigate('/faculty/viewnoticeboard')
  }).catch(error => {
    alert("Error Ocurred in remove Noticeboard :" + error);
  });

}
  return (
    <div>
        <FacultyNavBar/>
        <div className='cotainer-fluid'>
    <div className="row justify-content-around align-items-center" style={{height :"98vh" , marginTop:0}}>
    <div className="col-8 p-5 shadow bg-white">
        <center><span><h1>Notice Board</h1></span></center>
        <table className="table table-striped table-secondary">
                 <thead className='table-dark'>
                 <tr>
                      <th>Id</th>
                      <th>Faculty Name</th>
                      <th>Module Name</th>
                      <th>Date</th>
                      <th>Description</th>
                      <th>Action</th>
                  </tr>

              </thead>
              <tbody>
                {data.noticeboards.map(({id,facultyName,moduleName,date,description})=>
                <tr>
                  <td>
                    {id}
                  </td>
                  <td>
                    {facultyName}
                  </td>
                  <td>
                    {moduleName}
                  </td>
                  <td>
                    {date}
                  </td>
                  <td>
                    {description}
                  </td>
                  <td>
              <button className="button muted-button" onClick={()=>navigate(`/faculty/editnoticeboard/${id}`)}>Edit</button>
              {/* <button className="button muted-button" onClick={() => removeFaculty({id})}>Delete</button> */}
              <button className="button muted-button" onClick={() => removeNoticeBoard(id)}>Delete</button>
            </td>
                </tr>)}
              </tbody>
              
          </table>  
        </div>
        </div>
        </div>

        
    </div>
  )
}

export default ViewNoticeBoard