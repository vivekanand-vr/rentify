package in.rentify.service;

import in.rentify.dao.UserRepository;
import in.rentify.model.User;
import in.rentify.dto.UserDTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    
    public boolean emailExists(String email) {
        return userRepository.existsByEmail(email);
    }
    
    public UserDTO saveUser(User user) {
        // Encrypt the password before saving
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        User savedUser = userRepository.save(user);
        
        UserDTO userDto = new UserDTO();
        return objectCopy(userDto, savedUser);
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
            return objectCopy(userDto, user);
        } 
        else {
        	userDto.setStatus("Incorrect password, try again!");
        	return userDto;
        }
    }

	public User getUserById(Long userId) {
        User user = userRepository.findById(userId)
        		.orElseThrow(() -> new RuntimeException("User not found"));
        
        // Nullify the password and return
        user.setPassword(null); 
        return user;
    }
    
    @Transactional
    public User updateUser(User updatedUser) {
        User currentUser = userRepository.findById(updatedUser.getId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Copy existing password if the updatedUser's password is null or empty
        if (updatedUser.getPassword() == null || updatedUser.getPassword().isEmpty()) {
            updatedUser.setPassword(currentUser.getPassword());
        }
        return userRepository.save(updatedUser);
    }
    
    // Helper function to copy limited attributes
    private UserDTO objectCopy(UserDTO userDto, User user) {
    	userDto.setId(user.getId());
        userDto.setFirstName(user.getFirstName());
        userDto.setLastName(user.getLastName());
        userDto.setEmail(user.getEmail());
        userDto.setPhoneNumber(user.getPhoneNumber());
        userDto.setCity(user.getCity());
        return userDto;
    }
}
