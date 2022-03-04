package com.example.waterWarden.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="users")
public class user {

	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	
	@Column(name = "u_name")
	private String uname;
	
	@Column(name = "password")
	private String password;
	
	@Column(name = "is_warden")
	private boolean isWarden;


	
	public user(int id, String username, String password) {

		this.id = id;
		this.uname = username;
		this.password = password;
	}

	public user(int id, String username, String password, boolean warden) {

		this.id = id;
		this.uname = username;
		this.password = password;
		this.isWarden = warden;
	}


	public user() {
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUsername() {
		return uname;
	}
	public void setUsername(String username) {
		this.uname = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public boolean getType() {
		return isWarden;
	}
	public void setType(boolean type) {
		this.isWarden = type;
	}
	
}