package in.rentify.service;

import in.rentify.dto.PropertyDTO;
import in.rentify.dao.PropertyRepository;
import in.rentify.model.Property;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
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
    
    public Property getPropertyById(Long id) {
        try {
			return propertyRepository.findById(id)
			                        .orElseThrow(() -> new NotFoundException());
		} catch (NotFoundException e) {
			e.printStackTrace();
		}
		return null;
    }
    
    public void deleteProperty(Long id) {
        propertyRepository.deleteById(id);
    }

    public Property updateProperty(Long id, PropertyDTO propertyDTO) {
        Property property = propertyRepository.findById(id).orElseThrow(() -> new RuntimeException("Property not found"));
        property.setName(propertyDTO.getName());
        property.setCity(propertyDTO.getCity());
        property.setState(propertyDTO.getState());
        property.setCountry(propertyDTO.getCountry());
        property.setDescription(propertyDTO.getDescription());
        property.setArea(propertyDTO.getArea());
        property.setRent(propertyDTO.getRent());
        property.setOwnerId(propertyDTO.getOwnerId());
        propertyRepository.save(property);
        return property;
    }
}
