package in.rentify.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import in.rentify.model.Property;
import java.util.List;

@Repository
public interface PropertyRepository extends JpaRepository<Property, Long> {
	List<Property> findByOwnerId(Long ownerId);
}