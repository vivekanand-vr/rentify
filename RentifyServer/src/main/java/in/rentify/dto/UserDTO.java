package in.rentify.dto;

import lombok.Data;

@Data
public class UserDTO {
	
	private String status;
	private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String city;
    private String phoneNumber;
}
