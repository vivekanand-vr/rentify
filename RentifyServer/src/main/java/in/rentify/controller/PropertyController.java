package in.rentify.controller;

import in.rentify.model.Property;
import in.rentify.service.PropertyService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/properties")
@Tag(name = "Property APIs", description = "Read, Create, Update, Delete Properties & Get Owner Details")
public class PropertyController {

    @Autowired
    private PropertyService propertyService;

    @PostMapping
    @Operation(summary = "Create a Property")
    public ResponseEntity<String> createProperty(@RequestBody Property property) {
        String response = propertyService.createProperty(property);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{pid}")
    @Operation(summary = "Get Property Details by Pid")
    public ResponseEntity<Property> getPropertyDetails(@PathVariable Long pid) {
        Property property = propertyService.getPropertyDetails(pid);
        return ResponseEntity.ok(property);
    }

    @GetMapping
    @Operation(summary = "Get all properties in pages and filters")
    public ResponseEntity<?> getAllProperties(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "8") int size,
            @RequestParam(required = false) String search,
            @RequestParam(required = false) String sort) {
        
        try {
            Page<Property> properties = propertyService.getAllProperties(page, size, search, sort);
            return ResponseEntity.ok(properties);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while fetching properties");
        }
    }
    
    @GetMapping("/latest-properties")
    @Operation(summary = "Get latest properties upto 4 numbers")
    public List<Property> getLatestProperties() {
        return propertyService.getLatestProperties();
    }

    @GetMapping("/owner/{ownerId}")
    @Operation(summary = "Get Properties of a Owner")
    public ResponseEntity<List<Property>> getPropertiesByOwnerId(@PathVariable Long ownerId) {
        List<Property> properties = propertyService.getPropertiesByOwnerId(ownerId);
        return ResponseEntity.ok(properties);
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Delete a Property")
    public ResponseEntity<String> deleteProperty(@PathVariable Long id) {
        propertyService.deleteProperty(id);
        return ResponseEntity.ok("Property deleted successfully");
    }

    @PutMapping
    @Operation(summary = "Update a Property")
    public ResponseEntity<Property> updateProperty(@RequestBody Property property) {
        Property updatedProperty = propertyService.updateProperty(property);
        return ResponseEntity.ok(updatedProperty);
    }
}
