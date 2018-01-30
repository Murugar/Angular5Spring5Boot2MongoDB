package com.iqmsoft.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Document(collection = "customer")
@Getter
@Setter
@ToString
@AllArgsConstructor
public class Customer {
	@Id
	private String id;
	private String name;
	private int age;
	private boolean active;

    public Customer() {

    }
}
