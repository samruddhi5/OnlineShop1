package com.app.service;

import java.util.List;

import com.app.pojos.Product;

public interface IProductService {

	List<Product> getAllProducts();

	Product addNewProduct(Product p);
	
	String deleteProduct(int id);
	
	void updateQuantity(String name,int quantity);

}
