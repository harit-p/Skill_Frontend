<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sign In Form</title>
  <div className="container">
    <div className="sign-in-container">
      <form action="#" method="post">
        <h1>
          Create <br /> Account{" "}
        </h1>
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
        <span>or use your email for registartion</span>
        <input type="text" placeholder="FirstName" name="firstname" />
        <input type="text" placeholder="LastName" name="lastname" />
        <input type="email" placeholder="Email Address" />
        <input type="tel" placeholder="Phone Number" />
        <input type="password" placeholder="Password" name="password" />
        <input
          type="password"
          placeholder=" confirm password"
          name="password1"
        />
        <a href="#">Forgot your password?</a>
        <button type="submit">Sign Up</button>
      </form>
    </div>
    <div className="overlay-container">
      <div className="overlay">
        <h1>Welcome Back!</h1>
        <p>To keep connected with us please login with your details</p>
        <a href="signin.html">
          <button className="ghost" id="signUp">
            Sign In
          </button>
        </a>
      </div>
    </div>
  </div>
</>