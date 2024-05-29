package in.rentify.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.rentify.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
	// Get the user object based on the email 
	User findByEmail(String email);
}
