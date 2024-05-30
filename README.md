
<div align="center">
 <h1 style="font-size: larger;"> RENTIFY - Where Renting Meets Simplicity </h1>
 <kbd> <img src="https://github.com/vivekanand-vr/Rentify/assets/116813193/bfe1d3cb-5b06-4db6-abe6-484f61087b7c" alt="banner"> </kbd>
</div>

## Overview

**Rentify** is a web application designed to simplify the rental process for both property owners and tenants. In the post-pandemic world, the demand for real estate has surged, especially in cities with high populations and IT offices. RENTIFY aims to bridge the gap between property owners and tenants by providing a platform where they can easily connect based on their requirements.


## Technologies Used

- **Frontend** : Axios, Yup, Formik, React JS
- **Backend** : Java, Maven, Spring Boot, REST-APIs, MySQL Database

## Project Structure

### Backend Components

- **Controller Layer**: Handles HTTP requests and responses.
- **Service Layer**: Contains business logic.
- **Repository Layer**: Interacts with the database.

### Frontend Components

- **Navbar** : Displays navigation links.
- **Search Bar**: For searching properties by name or location.
- **Home** : Landing page which gives brief of the app.
- **PropertyList** : Shows a list of available properties.
- **RegisterUser** : User registration form.
- **LoginPage** : User login form.
- **AddProperty** : Form to add a new property.
- **MyProfile** : Displays user's profile information.
- **MyPropertyList** : Lists properties added by the user.
- **UpdateProperty** : Form to update the property details.


## Features

### User Authentication

- **Register**: Users can create an account, and user details are validated.
- **Login**: Users can log in to the application.
- **Logout**: Users can log out from the application.

### Property Management

- **Add Property**: Logged-in users can add a new property.
- **Search Properties**: Allows user to search property by name, city, state or country.
- **View Properties**: All users can view the list of available properties.
- **View Property Details**: Logged-in users can view detailed information about a property.
- **My Properties**: Logged-in users can view, update, and delete their properties.

## API Endpoints

### User APIs

- **POST : /user/register**: Register a new user.
- **POST : /user/login**: Log in a user.
- **GET  : /user/{id}**: Get user details by ID.

### Property APIs

- **POST : /property**: Add a new property.
- **GET : /properties**: Get all properties.
- **GET  : /property/{id}**: Get property details by ID.
- **PUT  : /property/{id}**: Update property details.
- **DELETE : /property/{id}**: Delete a property.

## Setting up the Rentify-Server (Backend)

1. #### Clone the repository:

```
git clone https://github.com/your-repo/rentify.git
```
```
cd RentifyServer
```

2. #### Set up the database:Create a MySQL database named rentify.
3. #### Update the database configuration in `application.properties` file.
4. #### Build and run the backend:
```
mvn clean install
```
```
mvn spring-boot:run
```

## Setting up the Rentify-Client (Frontend)
1. #### Navigate to the frontend directory:
2. #### Install dependencies:
3. #### Run the frontend:

Execute these commands one by one :

```
cd RentifyClient
```
```
npm install
```
```
npm start
```

## Contribution
Contributions are welcome! If you have any suggestions, improvements, or would like to contribute to any of the projects, feel free to open an issue or submit a pull request.
