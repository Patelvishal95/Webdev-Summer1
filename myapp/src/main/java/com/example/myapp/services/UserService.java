package com.example.myapp.services;

import com.example.myapp.model.User;
import com.example.myapp.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.HTMLDocument;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

@RestController
public class UserService {
    @Autowired
    UserRepository repository;

    @PostMapping("/api/login")
    public User login(@RequestBody User user) {
        Iterable<User> users = repository.findUserByUsernameAndPassword(user.getUsername(),user.getPassword());
        Iterator usersitr = users.iterator();
        if(usersitr.hasNext()){return (User)usersitr.next();}
        else{return null;}
    }

    @PostMapping("/api/register")
    public User register(@RequestBody User user) {
        if(findUserByUserName(user.getUsername()))
        {
            return repository.save(user);

        }
        return new User();
    }

    public boolean findUserByUserName(String username){
        Iterable<User> users = repository.findUserByUsername(username);
        if(users.iterator().hasNext()){return false;}//username present
        else{return true;}
    }


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
        System.out.println("in update user");
        Optional<User> data = repository.findById(userId);
        if(data.isPresent()) {
            System.out.println(newUser.toString());
            User user = data.get();
            System.out.println(user.toString());
            user.SetUser(newUser);
            System.out.println(user.toString());
            repository.save(user);
            return user;
        }
        return null;
    }
//    @GetMapping("/api/register/{userName}")
//    public User findUserByUserName(@PathVariable("userName") String userName) {
//        Iterable<User> data = repository.findUserByUsername(userName);
//        if(data.iterator().hasNext()) {
//            return data.iterator().next();
//        }
//        return new User();
//    }
    @GetMapping("/api/user/{userId}")
    public User findUserById(@PathVariable("userId") int userId) {
        Optional<User> data = repository.findById(userId);
        if(data.isPresent()) {
            return data.get();
        }
        return null;
    }
}
