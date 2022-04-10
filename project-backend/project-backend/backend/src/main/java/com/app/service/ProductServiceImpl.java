package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.ProductRepository;
import com.app.pojos.Product;

@Service
@Transactional
public class ProductServiceImpl implements IProductService {
	
	@Autowired
	private ProductRepository productRepo;

	@Override
	public List<Product> getAllProducts() {
		return productRepo.findAll();
	}

	@Override
	public Product addNewProduct(Product p) {
		return productRepo.save(p);
	}

	@Override
	public String deleteProduct(int id) {
		productRepo.deleteById(id);
		return "Product Deleted Successfully";
	}

	@Override
	public void updateQuantity(String name, int quantity) {
		productRepo.updateQuantity(name, quantity);

	}

}
