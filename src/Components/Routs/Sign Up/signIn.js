import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signUp.css";
import axios from "axios";
import { Spinner } from "react-bootstrap";

function SignIn() {
  const [UsersDetails, setUsersDetails] = useState({
    email: "",
    password: ""
  });
  const [errorMsg,setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const handleClicked = (event) => {
    event.preventDefault();
    setLoading(true); // Set loading to true when the login process starts
    let data = {
      name: UsersDetails.UserName,
      email: UsersDetails.email,
      password: UsersDetails.password
    }
    axios.post(" https://e-breeze-backend.vercel.app/api/v1/users/login", data)
    .then(response=>{
        console.log(response);
        setLoading(false);
        console.log('logIn successful');
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
  };

  return (
    <div className="signUpContainer">
      <form className="formSignup col-md-6 col-10">
        <button className="signUpBtn col-12">Sign In</button>
        <h5 className="col-12">
          Don't have an account? <Link to={"/signUp"}>Sign Up</Link>
        </h5>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setUsersDetails({ ...UsersDetails, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setUsersDetails({ ...UsersDetails, password: e.target.value })
          }
        />

        <p onClick={handleClicked}>Continue</p>
        {loading ? (
          <Spinner animation="border" variant="warning" />
        ) : (
          <p>{errorMsg}</p>
        )}
        {/* <button className="googleSignUpBtn">Sign Up with Google</button> */}
      </form>
    </div>
  );
}

export default SignIn;
