package in.rentify.dao;

import in.rentify.model.AdditionalDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdditionalDetailsRepository extends JpaRepository<AdditionalDetails, Long> {
    AdditionalDetails findByProperty_Id(Long propertyId);
}
