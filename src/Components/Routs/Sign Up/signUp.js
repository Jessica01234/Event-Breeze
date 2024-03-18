import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signUp.css";
import axios from "axios";
import { Spinner } from "react-bootstrap";

function SignUp() {
  const [usersDetails, setUsersDetails] = useState({
    UserName: "",
    email: "",
    password: "",
  });
  const [errorMsg,setErrorMsg] = useState("");
  const [Loading,setLoading] = useState(false);

  const nav = useNavigate();

  const handleClicked =(event)=>{
    event.preventDefault();
    setLoading(true); // Set loading to true when the request is initiated
    let data = {
      name: usersDetails.UserName,
      email: usersDetails.email,
      password: usersDetails.password
    }
    axios.post("https://e-breeze-backend.vercel.app/api/v1/users", data)
    .then(response=>{
        console.log(response);
        setLoading(false);
        console.log('done');
        nav('/dashBoard');
    })
    .catch(err=>{
      console.log(err);
      if (err.response) {
        setErrorMsg("No Server Response");
        console.log(errorMsg);
      } else if(err.response.status === 403 ){
        setErrorMsg(err.response.data.message)
        console.log(errorMsg);
      } if(err.response.status === 400 ){
        setErrorMsg('Invalid email or password')
        console.log(errorMsg)
      } 
      setLoading(false); // Set loading to false when request is complete
    })
  }
  

  return (
    <div className="signUpContainer">
      <form className="formSignup col-md-6 col-10">
        <button className="signUpBtn col-12">Sign Up</button>
        <h5 className="col-12">Already have an account?<Link to={'/signIn'}>Sign in</Link> </h5>

        <input type="text" placeholder="Name" onChange={(e) => setUsersDetails({ ...usersDetails, UserName: e.target.value })} />

        <input type="email" placeholder="Email" onChange={(e) => setUsersDetails({ ...usersDetails, email: e.target.value })} />

        <input type="password" placeholder="Password" onChange={(e) => setUsersDetails({ ...usersDetails, password: e.target.value })} />

        <p onClick={handleClicked}>Continue</p>
        {Loading ? (
          <Spinner animation="border" variant="warning" />
        ) : (
          <p>{errorMsg}</p>
        )}

        {/* <button className="googleSignUpBtn">Sign Up with Google</button> */}
      </form>
    </div>
  );
}

export default SignUp;
