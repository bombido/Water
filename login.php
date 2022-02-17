<!doctype html>
<html>
<head>
	<meta name ="viewport" content="width=device-width, initial-scale=1.0">
	<meta charset="utf-8">
	<title>Log In and Sign up menus</title>
	<link rel="shortcut icon" href=".">
	<link rel="stylesheet" href="assets/css/login.css">
</head>

<body>
	
	<div class="container">
		<form class="form " id="Login">
			<h1 class="form__title">Login</h1>
			<div class="form__message form__message--error">.</div>
			
			
			<div class="form__input-group">
				<input type="text" class="form__input" autofocus placeholder="Username">
				<div class="form__input-error-message"></div>
			</div>
			
			<div class="form__input-group">
				<input type="password" class="form__input" autofocus placeholder="Password">
				<div class="form__input-error-message"></div>
			</div>
			<button class="form__button" type="submit">Continue</button>
			
			<p class="form__text">
				<a href="#" class="form__link" >Forgot your password?</a>
			</p>
			
			<p class="form__text">
				<a class="form__link" href="" id="linkcreateAccount" >Don't have an account? Create one</a>
			</p>
			
		</form>
		
		<!--HERE THE REGISTRATION FORM STARTS BELOW-->
			<form class="form form--hidden" id="createAccount">
			<h1 class="form__title">Create Account</h1>
			<div class="form__message form__message--error"></div>
			
			<!--Input Fields -->
				
				
				
			<div class="form__input-group">
				<input type="text" class="form__input" autofocus placeholder="Email Address">
				<div class="form__input-error-message"></div>
			</div>
			
			
			<div class="form__input-group">
				<input type="password" class="form__input" autofocus placeholder="Password">
				<div class="form__input-error-message"></div>
			</div>
			
			<div class="form__input-group">
				<input type="password" class="form__input" autofocus placeholder="Confirm Password">
				<div class="form__input-error-message"></div>
			</div>
			
			<button class="form__button" type="submit">Continue</button>
			
		
			
			<p class="form__text">
				<a class="form__link" href="" id="linkLogin" >Already have an account? </a>
			</p>
			
		</form>
	
		
			  
	</div>
	
	
	
	
	
	
	
	
	
	
	
	
	
	<script src="assets/js/login.js"></script>
	
</body>
</html>
