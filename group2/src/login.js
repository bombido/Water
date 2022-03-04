import React, {useState} from 'react';
import axios from "axios";
import {useNavigate, Navigate} from 'react-router-dom';

import './login.module.css';
import './singlePageTemplate.module.css';

const baseURL = "http://localhost:8080/login";
const test = "1234";

function  Login () {

	const [post, setPost] = React.useState(null);
	const [username, setUname] = useState(String);
	const [password, setPassword] = useState(String);


  //function enterData (){
	axios.post(baseURL, {
		username: username,
		password: password
	  })
	  .then(function (response) {
		const status = response.status;
                    //redirect logic
                    if (response.status == 200) {
                            window.location = "/home" 
                    }
	  })
	  .catch(function (error) {
		console.log(error);
	  });
//}

//Write eventhandler

	/*function createPost() {
		//console.log("posted " + username + " " +  password);
	  axios
		.post(baseURL, {
		 
			username: username,
			password: test
		})
		.then((response) => {
		  setPost(response.data);
		});
	}*/
  
	//if (!post) return "No post!"


return (
<div>
<head>
	<title>Log In and Sign up menus</title>
	<link rel="shortcut icon" href="."></link>
	<link rel="stylesheet" href="src/main.css"></link>
</head>

<body>
	
	<div class="container">
		<form class="form " id="Login">
			<h1 class="form__title">Login</h1>
			<div class="form__message form__message--error">.</div>
			
			
			<div class="form__input-group">
				<input type="text" class="form__input" autofocus placeholder="Username" onChange ={e => setUname(e.target.value)}></input>
				<div class="form__input-error-message"></div>
			</div>
			
			<div class="form__input-group">
				<input type="password" class="form__input" autofocus placeholder="Password" onChange ={e => setPassword(e.target.value)}></input>
				<div class="form__input-error-message"></div>
			</div>
			<button Onclick = {axios.post} class="form__button" type="submit">Continue {password}</button>
			
			<p class="form__text">
				<a href="#" class="form__link" >Forgot your password?</a>
			</p>
			
			<p class="form__text">
				<a class="form__link" href="" id="linkcreateAccount" >Don't have an account? Create one</a>
			</p>
			
		</form>
		
			<form class="form form--hidden" id="createAccount">
			<h1 class="form__title">Create Account</h1>
			<div class="form__message form__message--error"></div>
			
				
				
				
			<div class="form__input-group">
				<input type="text" class="form__input" autofocus placeholder="Email Address"></input>
				<div class="form__input-error-message"></div>
			</div>
			
			
			<div class="form__input-group">
				<input type="password" class="form__input" autofocus placeholder="Password"></input>
				<div class="form__input-error-message"></div>
			</div>
			
			<div class="form__input-group">
				<input type="password" class="form__input" autofocus placeholder="Confirm Password"></input>
				<div class="form__input-error-message"></div>
			</div>
			
			<button class="form__button" type="submit">Continue</button>
			
		
			
			<p class="form__text">
				<a class="form__link" href="" id="linkLogin" >Already have an account? </a>
			</p>
			
		</form>	  
	</div>

	<script src="src/main.js"></script>

</body>
</div>
);
}

export default Login;