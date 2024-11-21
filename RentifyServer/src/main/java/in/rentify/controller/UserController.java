package in.rentify.controller;

import in.rentify.dto.LoginDetails;
import in.rentify.dto.UserDTO;
import in.rentify.service.UserService;
import in.rentify.model.User;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;
  
    @PostMapping("/signin")
    public UserDTO registerUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @PostMapping("/login")
    public ResponseEntity<UserDTO> loginUser(@RequestBody LoginDetails user) {
        UserDTO response = userService.authenticateUser(user.getEmail(), user.getPassword());
        return ResponseEntity.ok(response);
    }
    
    @PutMapping
    public ResponseEntity<User> updateUser(@RequestBody User user) {
        User updatedUser = userService.updateUser(user);
        return ResponseEntity.ok(updatedUser);
    }
    
    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }
}


