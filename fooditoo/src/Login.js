import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="box-form">
      <div className="left">
        <div className="overlay">
          <h1>Fooditoo</h1>
          <p>Give what you can, help those in need</p>
          <span>
            <br />
            <p>Login</p>
            <a href="#">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </span>
        </div>
      </div>

      <div className="right">
        <h5>Login</h5>
        <p>
          Don't have an account? <a href="#">Create Your Account</a> it takes
          less than a minute
        </p>
        <div className="inputs">
          <input type="text" placeholder="user name" />
          <br />
          <input type="password" placeholder="password" />
        </div>

        <br />
        <br />

        <div className="remember-me--forget-password">
          {/* Angular */}
          <label>
            <input type="checkbox" name="item" checked />
            <span>Remember me</span>
          </label>
          <p>forget password?</p>
        </div>

        <br />
        <button>Login</button>
      </div>
    </div>
  );
}

export default Login;