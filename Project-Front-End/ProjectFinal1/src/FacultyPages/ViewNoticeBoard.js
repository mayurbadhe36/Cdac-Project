import React from 'react'
import FacultyNavBar from './FacultyNavBar'
import { useEffect ,useState} from 'react';
import axios from 'axios';

function ViewNoticeBoard () {
  const [data, setData] = useState({noticeboards: [], isFetching: false});
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
  return (
    <div>
        <FacultyNavBar/>
        <div className='cotainer-fluid'>
    <div className="row justify-content-around align-items-center" style={{height :"98vh" , marginTop:0}}>
    <div className="col-8 p-5 shadow bg-white">
        <center><span><h1>View Notice Board</h1></span></center>
        <table className="table table-striped table-secondary">
                 <thead className='table-dark'>
                 <tr>
                      <th>Sr No.</th>
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
                    <button>
                       Edit
                    </button>
                
                    <button>
                       Delete
                    </button>
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