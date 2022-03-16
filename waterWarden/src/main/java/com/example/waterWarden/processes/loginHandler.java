package com.example.waterWarden.processes;

import com.example.waterWarden.model.*;
import com.example.waterWarden.repo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class loginHandler {
	
	
	@Autowired
	private loginRep lr;

	public user login (String uname, String password) {
	user user = lr.findByUnameAndPassword(uname, password);
		return user;
	}
}
