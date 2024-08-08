package in.rentify.dao;

import in.rentify.model.Property;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PropertyRepository extends JpaRepository<Property, Long> {
	
	List<Property> findByOwnerId(Long ownerId);
	
    @Query("SELECT p FROM Property p LEFT JOIN FETCH p.additionalDetails")
    List<Property> findAllWithAdditionalDetails();

    @Query("SELECT p FROM Property p LEFT JOIN FETCH p.additionalDetails WHERE p.id = :id")
    Property findByIdWithAdditionalDetails(@Param("id") Long id);
    
    @Query("SELECT p FROM Property p LEFT JOIN FETCH p.additionalDetails ORDER BY p.datePosted DESC")
    List<Property> findLatestProperties(Pageable pageable);
}
