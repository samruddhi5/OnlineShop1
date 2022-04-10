package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name="products")
public class Product extends BaseEntity{
	
	@Column(length = 20,nullable=false,name = "ProductName")
	@JsonProperty(value = "productName")
	private String name;
	
	@Column(nullable=false,name = "Price")
	private double price;
	
	@Column(length = 80,nullable=false,name = "Image")
	private String image;
	
	@Column(nullable=false,name = "Quantity")
	private Integer quantity;
	
	public Product()
	{
		
	}

	public Product(String name, double price, String image, Integer quantity) {
		super();
		this.name = name;
		this.price = price;
		this.image = image;
		this.quantity = quantity;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	@Override
	public String toString() {
		return "Product [name=" + name + ", price=" + price + ", image=" + image + ", quantity="
				+ quantity + "]";
	}
	
}
