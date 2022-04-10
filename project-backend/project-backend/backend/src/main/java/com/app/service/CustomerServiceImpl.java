package com.app.service;

import java.util.List;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.CustomerRepository;
import com.app.dto.CustomerDTO;
import com.app.pojos.Customer;

@Service
@Transactional
public class CustomerServiceImpl implements ICustomerService {

		@Autowired
		private CustomerRepository customerRepo;
		
		
		@Override
		public Customer authenticateUser(String email, String pwd) throws Exception {
			// TODO Auto-generated method stub
			Customer customer=customerRepo.findByEmail(email);
			if(customer==null) {
				 throw new Exception("User does not exist");	
			}
			
			if(customer.getPassword().equals(pwd)) {
				return customer;
			}
			else
				 throw new Exception("Invalid Credentials");
			
			}
		
		@Override
		public List<Customer> getAllCustomers() {
			return customerRepo.findAll();
		}


		public Customer addOrUpdateCustomerDetails(CustomerDTO cust) {
			if (customerRepo.findByEmail(cust.getEmail()) != null)
				throw new RuntimeException("Customer already exist");

			Customer customer = new Customer();
			customer.setName(cust.getName());
			customer.setAddress(cust.getAddress());
			customer.setEmail(cust.getEmail());
			customer.setPassword(cust.getPassword());
			return customerRepo.save(customer);
		}

		@Override
		public String deleteCustDetails(int id) {
			customerRepo.deleteById(id);
			return "Emp with ID "+id +" deleted successfully";
		}

		@Override
		public Customer fetchCustDetails(int custId) {
			return customerRepo.findById(custId)
					
					.orElseThrow(() -> new ResourceNotFoundException("Emp by ID "+custId+" not found!!!!"));
		}		
}
