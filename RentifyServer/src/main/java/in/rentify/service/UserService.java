package in.rentify.service;

import in.rentify.dao.UserRepository;
import in.rentify.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public Long saveUser(User user) {
        // Encrypt the password before saving
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        User savedUser = userRepository.save(user);
        return savedUser.getId();
    }
    
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public String authenticateUser(String email, String password) {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            return "You need to sign in first.";
        }
        // Compare the provided password with the stored encrypted password
        if (passwordEncoder.matches(password, user.getPassword())) {
            return user.getFirstName() + " " + user.getId();
        } else {
            return "Incorrect password, try again!";
        }
    }
    
    public User getUserById(Long userId) {
        Optional<User> userOptional = userRepository.findById(userId);
        
        //Return User details after nullifying the password
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            user.setPassword(null);  
            return user;
        }
        return null; 
    }
}
