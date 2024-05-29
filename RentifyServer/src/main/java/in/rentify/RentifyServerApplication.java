package in.rentify;

/*
 * 	This is the main class for Spring-Boot Application to start, so it should be available in 
 * 	global package not in any sub packages.
 */

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RentifyServerApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(RentifyServerApplication.class, args);
	}

}
