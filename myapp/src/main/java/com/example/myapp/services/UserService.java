package com.example.myapp.services;

import com.example.myapp.model.User;
import com.example.myapp.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserService {
    @Autowired
    UserRepository repository;

    @GetMapping("/api/user")
    public List<User> findAllUsers() {
        return (List<User>) repository.findAll();
    }

    @PostMapping("/api/user")
    public User putAllUsers(@RequestBody User user){
        return repository.save(user);

    }
    @DeleteMapping("/api/user/{userId}")
    public void deleteUser(@PathVariable("userId")int userId){
        repository.deleteById(userId);
    }
}
