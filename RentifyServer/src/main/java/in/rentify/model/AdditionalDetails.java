package in.rentify.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Table;
import lombok.Data;
import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Data
@Table(name = "property_details")
public class AdditionalDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pid;
    private Integer age;
    private Integer bathrooms;
    private Double deposit;
    private String balcony;
    private String highlights;
    private String facingDirection;
    private String accessibility;
    private String utilities;
    private String security;
    private String leaseTerms;
    private Boolean carParking;
    private String furnishing;
    private String amenities;
    
    @OneToOne
    @JoinColumn(name = "property_id")
    @JsonBackReference
    private Property property;
}
