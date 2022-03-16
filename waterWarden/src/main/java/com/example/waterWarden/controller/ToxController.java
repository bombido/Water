package com.example.waterWarden.controller;

import java.util.Objects;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.waterWarden.model.tox;
import com.example.waterWarden.model.user;
import com.example.waterWarden.processes.toxicityCalculator;

@Controller
public class ToxController {
	int count =0;

	
	
	@CrossOrigin
	@PostMapping ("/tox")
	public ResponseEntity<String> computeTox(@RequestBody tox tox ) {
		
        String url = "http://localhost:3000/home";

        toxicityCalculator tc = new toxicityCalculator();
        tox validate = tox;
        String output = tc.generateReport(tox.getPH(), tox.getTDS(), tox.getTemp());
        
		System.out.println("ph = " + tox.getPH());
		System.out.println("tds = " + tox.getTDS());
		System.out.println("temp = " + tox.getTemp());
		System.out.println("count =" + count);count++;

		//Why is the object null?
		//user validate = handler.login(user.getUsername(), user.getPassword());
		//String urlAddOn = user.getUsername(); //Can't do the cool thing
		System.out.println("Made it!");
		if(Objects.nonNull(validate)) 
		{	
		    
			
			System.out.println("Works");
			//return "redirect:" + url;
			return ResponseEntity.ok()
			        .body(output);
		} 

		else 
		{
			System.out.println("I'm lost!");
			return new ResponseEntity(HttpStatus.NOT_ACCEPTABLE);
		}
	}
	
	
	
}
