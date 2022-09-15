import StudentNavBar from "./StudentNavBar"
import { useEffect ,useState} from 'react';
import axios from 'axios';

function Faculty() {
  const [data, setData] = useState({faculties: [], isFetching: false});

    useEffect(() => {
      const fetchfaculties= async () => {
          try {
            setData((data)=>({faculties:data.faculties,isFetching:true}));
            const response =await axios.get('http://localhost:8080/student/faculty')
            setData({faculties:response.data,isFetching:false});
            console.log(response);
            return response;
          } catch (e) {
              console.log(e);
              setData((data)=>({faculties:data.faculties,isFetching:false}));
          }
      };
      fetchfaculties();
  }, []);
    return (
          <div>
            <StudentNavBar/>
            <div className='cotainer-fluid'>
       <div className="row justify-content-around align-items-center" style={{height :"98vh" , marginTop:0}}>
       <div className="col-8 p-5 shadow bg-white">
          
           <center><span><h1>Faculty</h1></span></center>
           <table class="table table-striped table-secondary">
                 <thead className="table-dark">
                    <tr>
                  <th>Sr.No</th>
                 <th> Name</th>
                
                 <th>Mob No</th>
                 <th>Email</th>
               
                 </tr>
                     </thead>
                 <tbody>
        
             {data.faculties.map(({id,name,mobNo,email})=>
             <tr>
              <td>
                {id}
              </td>
              <td>
                {name}
              </td>
              <td>
                {mobNo}
              </td>
              <td>
                {email}
              </td>
             </tr>
             )}
                 </tbody>

              </table>
           
            </div>


            </div>

        </div>
          </div>
    );
  }
  
  export default Faculty;
  