
package com.example.myapp.services;

import com.example.myapp.*;
import com.example.myapp.model.Hello;
import com.example.myapp.repositories.HelloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class HelloService {
    @Autowired
    HelloRepository repository;

    @GetMapping("/api/hello")
    public Iterable<Hello> findAllHellos() {
        return repository.findAll();
    }
}