import React from 'react';
import '../assets/Login.css';
function Login() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Sign In Form</title>
      <div className="container">
        <div className="sign-in-container">
          <form action="#" method="post">
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fa fa-facebook" />
              </a>
              <a href="#" className="social">
                <i className="fa fa-google" />
              </a>
              <a href="#" className="social">
                <i className="fa fa-linkedin" />
              </a>
            </div>
            <span>or use your account</span>
            <input type="text" placeholder="Username" name="username" />
            <input type="password" placeholder="Password" name="password" />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <h1>Hello</h1>
            <a href="signup.html">
              <button className="ghost" id="signUp">
                Sign Up
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
