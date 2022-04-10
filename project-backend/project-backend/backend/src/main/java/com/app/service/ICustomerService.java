package com.app.service;

import java.util.List;


import com.app.dto.CustomerDTO;
import com.app.pojos.Customer;

public interface ICustomerService {
	Customer authenticateUser(String email,String pwd) throws Exception;
	
	List<Customer> getAllCustomers();
	
	Customer addOrUpdateCustomerDetails(CustomerDTO transientCust);
	
	String deleteCustDetails(int id);
	
	Customer fetchCustDetails(int custId);

}
