import '../Components1/Style.css'
import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom';
//useLocation
function  FacultyNavBar() {
  const navigate = useNavigate()
 // const {state}=useLocation()
  //console.log(state.user)
  const handleLogout  = function(){
    sessionStorage.clear();
    navigate('/logout');

  }
  return (
    <div className='navbar bg-dark px-5' >
    <div className='flex-grow'><img className='img' src="/image/images_low.png"></img> </div>
   <a href="#"  style={{ textDecoration: 'none' }}><span className='fs-3 text-white ' style={{fontFamily:'monospace'}} >E-Vidyalaya</span></a>
   <NavLink to="/faculty" style={{ textDecoration: 'none' }}><span className='fs-5 text-white'>DashBoard</span></NavLink>
   

 {/* <span><h3 className='text-white'>{state.user.data.name}</h3></span> */}
 <div className='badge '><span><h3 className='text-white'><i class="bi bi-person-circle"></i> {sessionStorage.getItem("userName")}</h3></span></div>
   <button className='btn btn-primary ' onClick={handleLogout}><span className='fs-6'><i class="bi bi-box-arrow-right"></i>Logout</span></button>
    </div>
  )
}

export default  FacultyNavBar ;

