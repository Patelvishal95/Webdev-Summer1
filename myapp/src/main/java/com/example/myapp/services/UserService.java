package com.example.myapp.services;

import com.example.myapp.model.User;
import com.example.myapp.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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
    @PutMapping("/api/user/{userId}")
    public User updateUser(@PathVariable("userId") int userId,@RequestBody User newUser){
        Optional<User> data = repository.findById(userId);
        if(data.isPresent()) {
            User user = data.get();
            System.out.println(user);
            user.SetUser(newUser);
            repository.save(user);
            return user;
        }
        return null;
    }
}
