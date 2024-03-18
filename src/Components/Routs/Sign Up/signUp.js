import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signUp.css";

function SignUp() {
  const [usersDetails, setUsersDetails] = useState({
    UserName: "",
    email: "",
    password: "",
  });
  const nav = useNavigate();

  const handleClicked = async () => {
    console.log('before catch');
    try {
      const response = await fetch('https://e-breeze-backend.vercel.app/api/v1/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: usersDetails.UserName,
          email: usersDetails.email,
          password: usersDetails.password
        })
      });

      if (response.ok) {
        const data = await response.json();
        console.log('User signed up successfully:', data);
        // Redirect or perform any other actions here after successful sign-up
        nav(`/creatEvent?Sname=${encodeURIComponent(usersDetails.email)}`);
      } else {
        console.error('Failed to sign up:', response.statusText);
        // Handle error scenarios here
      }
    } catch (error) {

      console.error('Error signing up:', error);
      // Handle error scenarios here
    }
    console.log('after fetch');
  };

  return (
    <div className="signUpContainer">
      <form className="formSignup">
        <button className="signUpBtn">Sign Up</button>
        <h5>Already have an account?<Link to={'/signIn'}>Sign in</Link> </h5>

        <input type="text" placeholder="Name" onChange={(e) => setUsersDetails({ ...usersDetails, UserName: e.target.value })} />

        <input type="email" placeholder="Email" onChange={(e) => setUsersDetails({ ...usersDetails, email: e.target.value })} />

        <input type="password" placeholder="Password" onChange={(e) => setUsersDetails({ ...usersDetails, password: e.target.value })} />

        <p onClick={handleClicked}>Continue</p>
        <button className="googleSignUpBtn">Sign Up with Google</button>
      </form>
    </div>
  );
}

export default SignUp;
