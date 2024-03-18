import React from 'react';
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import Home from './Components/Routs/Landing Page/home';
import SignUp from './Components/Routs/Sign Up/signUp';
import Apps from './Components/Routs/Main Page/page';
import CreateEventForm from './Components/Routs/Main Page/Create Event/createEvent';
import SignIn from './Components/Routs/Sign Up/signIn';
function App (){
  return (
    <div>
         <BrowserRouter>
            <Routes>
            <Route  path="/" element= {<Home />} />
            <Route  path="/signUp" element= {<SignUp />} />
            <Route  path="/page" element= {<Apps />} />
            <Route  path="/dashBoard" element= {<CreateEventForm />} />
            <Route  path="/signIn" element= {<SignIn />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;
