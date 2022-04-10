package com.app.controller;

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

import com.app.dto.CustomerDTO;
import com.app.pojos.Customer;
import com.app.pojos.MessageResponse;
import com.app.service.ICustomerService;
@RestController
@RequestMapping("/api/customer")
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerController {
	@Autowired
	private ICustomerService customerService;

	public CustomerController() {
		System.out.println("in ctor of " + getClass());
	}

	// display
	@GetMapping("/details")
	public ResponseEntity<?> getAllCustDetails() {
		System.out.println("in get all customers");
		return new ResponseEntity<>(customerService.getAllCustomers(), HttpStatus.OK);
	}
	@PostMapping("/login")
	 public ResponseEntity<MessageResponse<Object>> userlogin(@RequestBody CustomerDTO dto){
		Customer user;
		HttpStatus httpStatus = null;
		MessageResponse<Object> response = new MessageResponse<>("",null);
		try {
		
			user = customerService.authenticateUser(dto.getEmail(),dto.getPassword());
			response.setData(user);
			response.setMessage("User authenticated");
			httpStatus = HttpStatus.OK;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			response.setData(null);
			response.setMessage("Invalid Credentials");
			httpStatus = HttpStatus.FORBIDDEN;
		}
		return new ResponseEntity<MessageResponse<Object>>(response, httpStatus);
	}
//login
//	@PostMapping("/login")
//	public Customer validateuser(@RequestBody CustomerDTO c) // de-serial (un marshalling)
//	{
//
//		System.out.println("in add cust " + c);
//		return customerService.addOrUpdateCustomerDetails(c);
//	}

	// insert
	@PostMapping("/post")
	public Customer addCustDetails(@RequestBody CustomerDTO c) // de-serial (un marshalling)
	{

		System.out.println("in add cust " + c);
		return customerService.addOrUpdateCustomerDetails(c);
	}

	// delete
	@DeleteMapping("/{id}")
	public String deleteCustDetails(@PathVariable int id) {
		System.out.println("in delete cust " + id);
		return customerService.deleteCustDetails(id);
	}
	
	@GetMapping("/{custId}")
	public ResponseEntity<?> getCustDetails(@PathVariable int custId) {
		System.out.println("in get cust details " + custId);
		try {
			return new ResponseEntity<>(customerService.fetchCustDetails(custId), HttpStatus.OK);
		} catch (RuntimeException e) {
			System.out.println("in get cust details " + e);
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}

	// update employee details
	/*
	 * @PutMapping public Customer updateEmpDetails(@RequestBody Customer c) {
	 * System.out.println("in add cust " + c); return
	 * customerService.addOrUpdateCustomerDetails(c); }
	 */
}
