package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.MessageResponse;
import com.app.pojos.Product;
import com.app.service.IProductService;

@RestController
@RequestMapping("/api/product")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {
	MessageResponse<Object> response = new MessageResponse<>("",null);
	@Autowired
	private IProductService productService;
	
	@GetMapping(value="fetchAll")
	List<Product> getAllProducts() 
	{
		return productService.getAllProducts();
	}
	
	
	@PostMapping(value="addproduct")
	
	public ResponseEntity<?> addNewProduct(@RequestBody Product p) {
		response.setMessage("Product added");
		return new ResponseEntity<>(productService.addNewProduct(p), HttpStatus.CREATED);
	}
	
	@DeleteMapping("/{id}")
	public String deleteProduct(@PathVariable int id)
	{
		response.setMessage("Product Deleted");
		return productService.deleteProduct(id);
	}
}
