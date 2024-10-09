package in.rentify.service;

import in.rentify.dao.AdditionalDetailsRepository;
import in.rentify.dao.PropertyRepository;
import in.rentify.model.AdditionalDetails;
import in.rentify.model.Property;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class PropertyService {

    @Autowired
    private PropertyRepository propertyRepository;

    @Autowired
    private AdditionalDetailsRepository additionalDetailsRepository;

    public String createProperty(Property property) {
        propertyRepository.save(property);
        return "Your Property Has Been Saved Successfully";
    }

    public Page<Property> getAllProperties(int page, int size, String search, String sort) {
        
    	if (page < 0 || size <= 0) {
            throw new IllegalArgumentException("Invalid page or size parameters");
        }
    	
    	Pageable pageable = PageRequest.of(page, size, createSort(sort));
        
        if (search != null && !search.isEmpty()) {
            return propertyRepository.findByNameContainingOrLocationContaining(search, search, pageable);
        } else {
            return propertyRepository.findAll(pageable);
        }
    }
   /* 
    * 	Method with Sort Object to pass it as a criteria during data fetching
    */
    private Sort createSort(String sort) {
        if (sort != null && !sort.isEmpty()) {
            String[] parts = sort.split(",");
            String property = parts[0];
            Sort.Direction direction = parts.length > 1 && parts[1].equalsIgnoreCase("desc") ? 
                Sort.Direction.DESC : Sort.Direction.ASC;
            return Sort.by(direction, property);
        }
        return Sort.unsorted();
    }
    
    public List<Property> getLatestProperties() {
        Pageable topFour = PageRequest.of(0, 4);
        return propertyRepository.findLatestProperties(topFour);
    }

    public Property getPropertyDetails(Long pid) {
        Optional<Property> property = propertyRepository.findById(pid);
        return property.orElse(null);
    }

    public Property getPropertyById(Long id) {
        return propertyRepository.findByIdWithAdditionalDetails(id);
    }

    public AdditionalDetails getAdditionalDetailsByPropertyId(Long propertyId) {
        return additionalDetailsRepository.findByProperty_Id(propertyId);
    }

    public List<Property> getPropertiesByOwnerId(Long ownerId) {
        return propertyRepository.findByOwnerId(ownerId);
    }

    public void deleteProperty(Long id) {
        propertyRepository.deleteById(id);
    }

    public Property updateProperty(Property updatedProperty) {
        return propertyRepository.save(updatedProperty);
    }
}
