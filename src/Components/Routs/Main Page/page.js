// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Logo from "../../Assets/Logo.png";
// import './page.css';
// import HomeIcon from "../../Assets/home-icon.png";
// import CreateEventIcon from "../../Assets/create-event-logo.png";
// // import SortEvent from "../../Assets/grommet-icons.png";
// import SettingIcon from "../../Assets/settings-xxl.png";
// import { NavDropdown } from 'react-bootstrap';

// function Sidebar() {


//   return (
//     <nav className="col-md-3 col-lg-2 d-md-block sidebar">
//       <nav href="/"><img style={{width:'100%'}} src={Logo} alt=""/></nav>
//       <div className="sidebar-sticky ">
//         <ul className="nav flex-column" >
//           <li className="nav-item">
//             <a className="nav-link active" href="dashboard">
//               <img style={{color:"white"}} src={HomeIcon} alt=''/>
//               Dashboard
//             </a>
//           </li>

//           <li className="nav-item">
//             <a className="nav-link" href="createEvent">
//               <img src={CreateEventIcon} alt=''/>
//               Create Event
//             </a>
//           </li>

//           <NavDropdown title="Sort Event" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Location</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">Date</NavDropdown.Item>
//             </NavDropdown>

//           <li className="nav-item">
//             <a className="nav-link" href="setting">
//               <img style={{width:"20%"}} src={SettingIcon} alt=''/>
//               Setting
//             </a>
//           </li>
//         </ul>
    
//       </div>
//     </nav>
//   );
// }

// function MainContent() {
//   const [User, setUser] = useState(false);

//   useEffect(() => {
//     // Retrieving user details from local storage upon component mount
//     const userDetailsString = localStorage.getItem('email');
//     const userDetails = JSON.parse(userDetailsString);

//     // Checking if the user is signed in and has details
//     if (userDetails && userDetails.fname) {
//       // Set the user details in the state
//       setUser(true);
//     }
//   },[])

//   return (
//     <div >
//       {User ? (
//               <li className={`NavLinks ${window.location.pathname === '/profile' ? 'active' : ''}`}>
//                 {User.fname}
//               </li>
//             ) : (
//               <li>
//                 <Link to={'/signUp'} className={`NavLinks ${window.location.pathname === '/signUp' ? 'active' : ''}`}>
//                   <button>Create Event</button>
//                 </Link>
//               </li>
//             )}
//           <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
//               <h1>Main Content</h1>
//               <p>This is the main content area. You can add your content here.</p>
//           </main>

//     </div>
//   );
// }

// function Apps() {
//   return (
//     <div className="container-fluid">
//       <div className="row">
//         <Sidebar />
//         <MainContent />
//       </div>
//     </div>
//   );
// }

// export default Apps;


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../Assets/Logo.png";
import './page.css';
import HomeIcon from "../../Assets/home-icon.png";
import CreateEventIcon from "../../Assets/create-event-logo.png";
// import SortEvent from "../../Assets/grommet-icons.png";
import SettingIcon from "../../Assets/settings-xxl.png";
import { NavDropdown } from 'react-bootstrap';



export function Sidebar() {

  const [activeItem, setActiveItem] = useState("dashboard");

  const handleClick = (event, item) => {
      event.preventDefault();
      setActiveItem(item);
  };

  return (
      <nav className="col-md-2 col-4 col-lg-2 d-md-block sidebar">
          <nav href="/">
              <img className='col-lg-10 col-md-8 col-sm-12 col-12' src={Logo} alt="" />
          </nav>
          
          <div className="sidebar-sticky">
              
              <ul className="nav flex-column">
                  <li className={`nav-item ${activeItem === '/dashboard' ? 'active' : ''}`}>
                      <a className="nav-link" href="/dashboard" onClick={(e) => handleClick(e, '/dashboard')}>
                          <img style={{ color: "white" }} src={HomeIcon} alt='' />
                          Dashboard
                      </a>
                  </li>
                  <li className={`nav-item ${activeItem === '/createEvent' ? 'active' : ''}`}>
                      <a className="nav-link" href="/createEvent" onClick={(e) => handleClick(e, '/createEvent')}>
                          <img src={CreateEventIcon} alt='' />
                          Create Event
                      </a>
                  </li>
                  <NavDropdown title="Sort Event" id="basic-nav-dropdown" className={`nav-item ${activeItem === '/sortEvent' ? 'active' : ''}`}>
                      <NavDropdown.Item href="#action/3.1">Location</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Date</NavDropdown.Item>
                  </NavDropdown>
                  <li className={`nav-item ${activeItem === '/setting' ? 'active' : ''}`}>
                      <a className="nav-link" href="/setting" onClick={(e) => handleClick(e, '/setting')}>
                          <img style={{ width: "20%" }} src={SettingIcon} alt='' />
                          Setting
                      </a>
                  </li>
              </ul>
          </div>
      </nav>
  );
}



function MainContent() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieving user details from local storage upon component mount
    const userDetailsString = localStorage.getItem('email');
    const userDetails = JSON.parse(userDetailsString);
    console.log(userDetails);

    // Checking if the user is signed in and has details
    if (userDetails && userDetails.UserName) {
      // Set the user details in the state
      setUser(userDetails);
    }
  },[]);

  return (
    <div className="col-md-9 ml-sm-auto col-lg-10 px-md-4 d-flex">

      <main role="main">
        <h1>Main Content</h1>
        <p>This is the main content area. You can add your content here.</p>
      </main>

      {user ? (
        <li style={{color:'white',listStyle:'none',fontSize:'20px'}} className={`NavLinks ${window.location.pathname === '/profile' ? 'active' : ''}`}>
          {user.UserName}
        </li>
      ) : (
        <li>
          <Link to={'/signUp'} className={`NavLinks ${window.location.pathname === '/signUp' ? 'active' : ''}`}>
            Create Event
          </Link>
        </li>
      )}
     
    </div>
  );
}


function Apps() {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default Apps;
