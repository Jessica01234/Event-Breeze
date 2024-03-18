import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signUp.css";

function SignIn(){
    const [UsersDetails, setUsersDetails] =useState({
        email: "",
        password: ""
    });

    const nav = useNavigate();

    const handleClicked = async () => {
        console.log('before catch');
        try {
          const response = await fetch(' https://e-breeze-backend.vercel.app/api/v1/users/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: UsersDetails.email,
              password: UsersDetails.password
            })
          });
    
          if (response.ok) {
            const data = await response.json();
            console.log('User signed In successfully:', data);
            // Redirect or perform any other actions here after successful sign-up
            nav(`/dashboard?Sname=${encodeURIComponent(UsersDetails.email)}`);
          } else {
            console.error('Failed to sign up:', response.statusText);
            // Handle error scenarios here
          }
        } catch (error) {
    
          console.error('Error signing in', error);
          // Handle error scenarios here
        }
        console.log('after fetch');
      };

      return (
        <div className="signUpContainer">
          <form className="formSignup">
            <button className="signUpBtn ">Sign In</button>
            <h5 className="">Dont have an account? <Link to={'/signUp'}>Sign Up</Link></h5>
    
            <input type="email" placeholder="Email" onChange={(e) => setUsersDetails({ ...UsersDetails, email: e.target.value })} />
    
            <input type="password" placeholder="Password" onChange={(e) => setUsersDetails({ ...UsersDetails, password: e.target.value })} />
    
            <p onClick={handleClicked}>Continue</p>
            <button className="googleSignUpBtn">Sign Up with Google</button>
          </form>
        </div>
      );
}
export default SignIn;