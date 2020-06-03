import React, { Component } from "react";
import axios from "axios";



export default class Login extends Component {
  constructor(props) {
    super(props);

   /*
    const loginForm = document.getElementById("login-form");
    const loginButton = document.getElementById("login-form-submit");
    const loginErrorMsg = document.getElementById("login-error-msg");

    loginButton.addEventListener("click", (e) => {
        e.preventDefault();
        const username = loginForm.username.value;
        const password = loginForm.password.value;

        if (username === "admin" && password === "admin") {
            window.location.replace("http://localhost:3000/create");

        } else {
            loginErrorMsg.style.opacity = 1;
    }
})
*/
  }

  render() {
    return (
    <router> 
        
     <h1 id="login-header">Login</h1>
    
        <div id="login-error-msg-holder">
        <p id="login-error-msg">Invalid username <span id="error-msg-second-line">and/or password</span></p>
        </div>
    
    <form id="login-form" action = "/loginfunc.html" method = 'get'>
      <input type="text" name="username" id="username-field"  placeholder="Username" />
      <input type="password" name="password" id="password-field"  placeholder="Password" />
      <input type="submit" value="Login" id="login-form-submit" />
    </form>

       
      

      </router>
    );
  }
}
