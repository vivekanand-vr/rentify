package in.rentify.service;

import in.rentify.dao.PropertyRepository;
import in.rentify.model.Property;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PropertyService  {

    @Autowired
    private PropertyRepository propertyRepository;

    public String createProperty(Property property) {
        propertyRepository.save(property);
        return "Your Property Has Been Saved Sucessfully";
    }

    public List<Property> getAllProperties() {
        return propertyRepository.findAll();
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
