package in.rentify.controller;

import in.rentify.dto.LoginDetails;
import in.rentify.dto.UserDTO;
import in.rentify.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import in.rentify.model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@Tag(name = "User APIs", description = "User Read, Create, Update, & Delete")
public class UserController {

    @Autowired
    private UserService userService;
  
    @PostMapping("/signin")
    @Operation(summary = "Register a User")
    public UserDTO registerUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @PostMapping("/login")
    @Operation(summary = "Login User with Credentials")
    public ResponseEntity<UserDTO> loginUser(@RequestBody LoginDetails user) {
        UserDTO response = userService.authenticateUser(user.getEmail(), user.getPassword());
        return ResponseEntity.ok(response);
    }
    
    @PutMapping
    @Operation(summary = "Update User Details")
    public ResponseEntity<User> updateUser(@RequestBody User user) {
        User updatedUser = userService.updateUser(user);
        return ResponseEntity.ok(updatedUser);
    }
    
    @GetMapping("/{id}")
    @Operation(summary = "Get User by Id")
    public User getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }
}


