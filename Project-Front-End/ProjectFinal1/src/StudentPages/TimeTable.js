import React from 'react';
import { useEffect ,useState} from 'react';
import StudentNavBar from "./StudentNavBar"
import axios from 'axios';
//import { useLocation } from 'react-router-dom';

function TimeTable() {

  const [data, setData] = useState({timetables: [], isFetching: false});

    useEffect(() => {
      const fetchtimetables= async () => {
          try {
            setData((data)=>({timetables:data.timetables,isFetching:true}));
            const response =await axios.get('http://localhost:8080/student/timetable')
            setData({timetables:response.data,isFetching:false});
            console.log(response);
            return response;
          } catch (e) {
              console.log(e);
              setData((data)=>({timetables:data.timetables,isFetching:false}));
          }
      };
      fetchtimetables();
  }, []);

    return (
          <div>
            <StudentNavBar/>
            {/* <h5>{state.user.data.name}</h5> */}
            <div className='cotainer-fluid'>
       <div className="row justify-content-around align-items-center" style={{height :"98vh" , marginTop:0}}>
       <div className="col-8 p-5 shadow bg-white">
           <center><span><h1>View TimeTable Details</h1></span></center>
           <table className="table table-striped table-secondary">
                 <thead className='table-dark'>
                  <tr>
                  <th>Sr.No</th>
                 <th>Faculty Name</th>
                 <th>Date</th>
                 <th>Start Time</th>
                 <th>End Time</th>
                 <th>Module Name</th>
                 <th>Platform</th>
                 <th>Link</th>
                 </tr>
                     </thead>
                 <tbody>

               {data.timetables.map(({id,facultyName,date,startTime,endTime,moduleName,platform,link})=>
             <tr>
              <td>{id}</td>
              <td>{facultyName}</td>
             <td>{date}</td>
             <td>{startTime}</td>
             <td>{endTime}</td>
             <td>{moduleName}</td>
             <td>{platform}</td>
            <td>{link}</td>
             </tr>  )}
              
                 </tbody>
              </table>
            </div>


            </div>

        </div>
          </div>
    );
  }
  
  export default TimeTable;
  