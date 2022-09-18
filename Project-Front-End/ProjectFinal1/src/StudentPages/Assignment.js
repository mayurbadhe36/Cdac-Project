import StudentNavBar from "./StudentNavBar"
import { useEffect ,useState} from 'react';
import axios from 'axios';
function Assignment() {
  const [searchText, setSearchText] = useState('')

  const handleSearchText = (e) => {
    setSearchText(e.target.value)
    console.log(searchText);
}

 function handleDownload(file){
axios ({
  url:`http://localhost:8080/student/downloadFile/${file}`,
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

  const [data, setData] = useState({assignments: [], isFetching: false});

    useEffect(() => {
      const fetchassignments= async () => {
          try {
            setData((data)=>({assignments:data.assignments,isFetching:true}));
            const response =await axios.get('http://localhost:8080/student/assignment')
            setData({assignments:response.data,isFetching:false});
            console.log(response);
            return response;
          } catch (e) {
              console.log(e);
              setData((data)=>({assignments:data.assignments,isFetching:false}));
          }
      };
      fetchassignments();
  }, []);
    return (
          <div>
           <StudentNavBar/>
            <div className='cotainer-fluid'>
       <div className="row justify-content-around align-items-center" style={{height :"98vh" , marginTop:0}}>
       <div className="col-8 p-5 shadow bg-white">
       
           <center><span><h1>View Assignment</h1></span></center>
           <div className='ui icon input'>
              <input type='text' placeholder='Enter faculty name or module name' className='prompt' name="searchText" onChange={handleSearchText} value= {searchText}></input>
              <button ><i class="bi bi-search"></i></button>
            </div>
            <br></br>
           <table className="table table-striped tabel-secondary">
           
                 <thead className='table-dark'>
                   <tr>
                  <th>Sr.No</th>
                 <th>Faculty Name</th>
                 <th>Module Name</th>
                 <th>Description</th>
                 <th>Download</th>
                 <th>Upload</th>
                 <th>Grade</th>
                 </tr>
                     </thead>
                 <tbody>
                 {
             data.assignments.filter((val)=>{
              if(searchText==""){
                return val
              }else if(val.moduleName.toLowerCase().includes(searchText.toLowerCase()) || val.facultyName.toLowerCase().includes(searchText.toLowerCase())){
              return val
            }
             })
                 
                 .map(({id,facultyName,moduleName,description,fileName,grade})=>
             <tr>
              <td>{id}</td>
              <td>{facultyName}</td>
             <td>{moduleName}</td>
             <td>{description}</td>
             
             <td><button className="btn btn-primary"  onClick={()=>handleDownload(fileName)}>Download {fileName}</button></td>
             <td><button className="btn btn-primary">Upload</button></td>
             <td>{grade}</td>
             </tr>  )}
                 </tbody>

              </table>
           
            </div>
            </div>

        </div>
          </div>
    );
  }
  
  export default Assignment;
  