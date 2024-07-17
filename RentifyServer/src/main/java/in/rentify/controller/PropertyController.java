package in.rentify.controller;

import in.rentify.model.Property;
import in.rentify.service.PropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/properties")
public class PropertyController {

    @Autowired
    private PropertyService propertyService;

    @PostMapping
    public ResponseEntity<String> createProperty(@RequestBody Property property) {
        String response = propertyService.createProperty(property);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{pid}")
    public ResponseEntity<Property> getPropertyDetails(@PathVariable Long pid) {
        Property property = propertyService.getPropertyDetails(pid);
        return ResponseEntity.ok(property);
    }

    @GetMapping
    public ResponseEntity<List<Property>> getAllProperties() {
        List<Property> properties = propertyService.getAllProperties();
        return ResponseEntity.ok(properties);
    }

    @GetMapping("/owner/{ownerId}")
    public ResponseEntity<List<Property>> getPropertiesByOwnerId(@PathVariable Long ownerId) {
        List<Property> properties = propertyService.getPropertiesByOwnerId(ownerId);
        return ResponseEntity.ok(properties);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProperty(@PathVariable Long id) {
        propertyService.deleteProperty(id);
        return ResponseEntity.ok("Property deleted successfully");
    }

    @PutMapping
    public ResponseEntity<Property> updateProperty(@RequestBody Property property) {
        Property updatedProperty = propertyService.updateProperty(property);
        return ResponseEntity.ok(updatedProperty);
    }
}
