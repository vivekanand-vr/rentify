package in.rentify.dto;

import lombok.Data;

 /*
  *  This class object is created to wrap up a property's additional details and inject into the 
  *  respective property in service class
  */

@Data
public class PropertyDTO {

    private Long id;
    private String name;
    private String city;
    private String state;
    private String country;
    private String description;
    private Double area;
    private Double rent;
    private Long ownerId;
}
