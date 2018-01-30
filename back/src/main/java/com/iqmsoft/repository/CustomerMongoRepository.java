package com.iqmsoft.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.iqmsoft.model.Customer;

public interface CustomerMongoRepository extends MongoRepository<Customer, String> {

}
