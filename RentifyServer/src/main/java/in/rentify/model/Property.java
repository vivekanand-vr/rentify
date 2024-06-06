package in.rentify.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name = "properties")
public class Property {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String city;
    private String state;
    private String country;
    private String description;
    private Double area; 
    private Double rent;
    private Double deposit;
    private Integer bedrooms;
    private String propertyType;
    private String furnishing;
    private String imageId;
    private Long ownerId;
}
