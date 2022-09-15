import StudentNavBar from "./StudentNavBar"
import React from 'react';
import { useEffect ,useState} from 'react';
import axios from 'axios';
function NoticeBoard() {
   const [data, setData] = useState({noticeboards: [], isFetching: false});

    useEffect(() => {
      const fetchnoticeboards= async () => {
          try {
            setData((data)=>({noticeboards:data.noticeboards,isFetching:true}));
            const response =await axios.get('http://localhost:8080/student/noticeboard')
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
            <StudentNavBar/>
            <div className='cotainer-fluid'>
    <div className="row justify-content-around align-items-center" style={{height :"98vh" , marginTop:-25}}>
    
    <div className="col-8 p-5 shadow" style={{backgroundColor : 'white'}}>
    <center><span><h1>View NoticeBoard</h1></span></center>
             {data.noticeboards.map(({description,date,facultyName,moduleName})=>
             <table className="table border table-striped table-secondary" style={{cellspacing:'5'}}>
               <tr>
                  <td>
                    Description :  {description}
                  </td>
                  </tr>
                  <tr>
                  <td>
                     Publish Date : {date}
                     
                  </td>
                  </tr>
                  <tr>
                  <td>
                     Faculty Name : {facultyName}
                  </td>
                  </tr>
                  <tr>
                  <td>
                     Module Name : {moduleName}
                  </td>
                  </tr>
             </table>
             )}
        
         </div>
         </div>

     </div>
          </div>
    );
  }
  
  export default NoticeBoard;
  