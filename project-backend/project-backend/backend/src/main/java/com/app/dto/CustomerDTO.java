package com.app.dto;

import javax.persistence.Column;

public class CustomerDTO {
	// private Integer id;

	private String name;

	private String address;

	private String email;

	private String password;
	
	private String role;

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public CustomerDTO(String email, String password) {
		super();
		
		this.email = email;
		this.password = password;
	}

	public CustomerDTO(Integer id) {
		// TODO Auto-generated constructor stub
	}

	public CustomerDTO(String string) {
		// TODO Auto-generated constructor stub
	}

}