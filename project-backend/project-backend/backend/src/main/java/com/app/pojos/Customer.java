package com.app.pojos;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="customers")
public class Customer extends BaseEntity{
	
	@Column(length = 20,nullable=false,name = "name")
	private String name;

	@Column(length = 100,nullable=false,name = "Address")
	private String address;

	@Column(length = 45,unique=true,nullable=false,name = "Email")
	private String email;

	@Column(length = 20,nullable=false,name = "Password")
	private String password;
	
	public Customer()
	{
		
	}

	public Customer(String name, String address, String email, String password) {
		
		this.name = name;
		this.address = address;
		this.email = email;
		this.password = password;
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

	@Override
	public String toString() {
		return "Customer Id " + getId() + "[name=" + name + ", address=" + address + " , email=" + email + ", password=" + password + "]";
	}
}
