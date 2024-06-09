package in.rentify.service;

import in.rentify.dao.UserRepository;
import in.rentify.model.User;
import in.rentify.dto.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public UserDTO saveUser(User user) {
        // Encrypt the password before saving
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        User savedUser = userRepository.save(user);
        
        //Fill all the details in DTO object and return
        UserDTO userDto = new UserDTO();
        userDto.setId(savedUser.getId());
        userDto.setFirstName(savedUser.getFirstName());
        userDto.setLastName(savedUser.getLastName());
        userDto.setEmail(savedUser.getEmail());
        userDto.setPhoneNumber(savedUser.getPhoneNumber());
        userDto.setCity(savedUser.getCity());
        return userDto;
    }
    
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public UserDTO authenticateUser(String email, String password) {
        User user = userRepository.findByEmail(email);
        UserDTO userDto = new UserDTO();
        
        if (user == null) {
        	userDto.setStatus("You need to sign in first.");
        	return userDto;
        }
        // Compare the provided password with the stored encrypted password
        if (passwordEncoder.matches(password, user.getPassword())) {
            userDto.setStatus("success");
            userDto.setId(user.getId());
            userDto.setFirstName(user.getFirstName());
            userDto.setLastName(user.getLastName());
            userDto.setEmail(user.getEmail());
            userDto.setPhoneNumber(user.getPhoneNumber());
            userDto.setCity(user.getCity());
            return userDto;
        } 
        else {
        	userDto.setStatus("Incorrect password, try again!");
        	return userDto;
        }
    }
    
    public User updateUser(User updatedUser) {
        return userRepository.save(updatedUser);
    }
}
