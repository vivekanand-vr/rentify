package in.rentify.service;

import in.rentify.dao.AdditionalDetailsRepository;
import in.rentify.dao.PropertyRepository;
import in.rentify.model.AdditionalDetails;
import in.rentify.model.Property;
import org.springframework.beans.factory.annotation.Autowired;
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

    public List<Property> getAllProperties() {
        return propertyRepository.findAll();
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
