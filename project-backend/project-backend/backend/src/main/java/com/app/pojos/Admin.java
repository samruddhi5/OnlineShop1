package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="admin")
public class Admin extends BaseEntity{
	
	@Column(length = 45,unique=true,nullable=false,name = "Email")
	private String email;
	
	@Column(length = 20,nullable=false,name = "Password")
	private String password;
	
	@Column(length = 20,nullable=false,name = "Name")
	private String name;
	
	public Admin()
	{
		
	}

	public Admin(Integer id, String email, String password, String name) {
		super();
		this.email = email;
		this.password = password;
		this.name = name;
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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "Admin [ email=" + email + ", password=" + password + ", name=" + name + "]";
	}
	
	

}
