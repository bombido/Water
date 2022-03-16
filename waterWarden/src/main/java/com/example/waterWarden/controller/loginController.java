package com.example.waterWarden.controller;

import java.util.Objects;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.example.waterWarden.model.*;
import com.example.waterWarden.processes.*;
@Controller
public class loginController {
	int count =0;


	@Autowired
	private loginHandler handler;

	@CrossOrigin
	@PostMapping ("/login")
	public ResponseEntity login(@RequestBody user user ) {
		
        String url = "http://localhost:3000/home";


		user validate = handler.login(user.getUsername(), user.getPassword());
		System.out.println("username = " + validate.getUsername());
		System.out.println("password = " + validate.getPassword());
		System.out.println("count =" + count);count++;

		//Why is the object null?
		//user validate = handler.login(user.getUsername(), user.getPassword());
		//String urlAddOn = user.getUsername(); //Can't do the cool thing
		System.out.println("Made it!");
		if(Objects.nonNull(validate)) 
		{	
		    
			
			System.out.println("Works");
			//return "redirect:" + url;
			return new ResponseEntity(HttpStatus.OK);
		} 

		else 
		{
			System.out.println("I'm lost!");
			return new ResponseEntity(HttpStatus.NOT_ACCEPTABLE);
		}
	}
}