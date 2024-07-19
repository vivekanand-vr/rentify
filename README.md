<div align="center">
  <br />
  <a href="https://youtu.be/y5vE8y_f_OM" target="_blank">
    <img src="https://github.com/user-attachments/assets/a9742a69-b43f-4a2d-a05e-9d01a73316be" alt="Project Banner" style="border-radius: 5px;">
  </a>
  <br> </ br>
  <br> </ br>

  <div>
    <img src="https://img.shields.io/badge/-React-black?style=for-the-badge&logo=react&logoColor=white&color=61DAFB" alt="react" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logo=tailwindcss&logoColor=white&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Spring_Boot-black?style=for-the-badge&logo=springboot&logoColor=white&color=6DB33F" alt="springboot" />
    <img src="https://img.shields.io/badge/-MySQL-black?style=for-the-badge&logo=mysql&logoColor=white&color=4479A1" alt="mysql" />
  </div>
  </div>
  
## Overview

**Rentify** is a web application designed to simplify the rental process for both property owners and tenants. In the post-pandemic world, the demand for real estate has surged, especially in cities with high populations and IT offices. RENTIFY aims to bridge the gap between property owners and tenants by providing a platform where they can easily connect based on their requirements.


## Technologies Used

- **Frontend** : Vite, Redux Toolkit, React JS, Tailwind CSS
- **Backend** : Java, Maven, Spring Boot, REST-APIs, MySQL Database
- **Additional Packages** : Axios, Yup, Formik, Toastify, Skeleton, Cloudinary

## Web View Snapshots

<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/2cec49c0-794b-40bf-bb10-f6c1af88bf44" alt="Web Image 1" width="500"></td>
    <td><img src="https://github.com/user-attachments/assets/e0bb6756-6837-4d87-a538-6c79a343f214" alt="Web Image 2" width="500"></td>
  </tr>
   <tr>
    <td><img src="https://github.com/user-attachments/assets/bd7fed3c-879a-4b0f-b271-f9fd533d6464" alt="Web Image 7" width="500"></td>
    <td><img src="https://github.com/user-attachments/assets/afdc31ce-0dad-440e-8792-9d4b20d9cba1" alt="Web Image 8" width="500"></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/715bb31a-9613-48eb-87bb-0c558d908cab" alt="Web Image 3" width="500"></td>
    <td><img src="https://github.com/user-attachments/assets/47aa5f95-d82f-46ef-8d8d-f42d6d35e6c9" alt="Web Image 4" width="500"></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/a6c87eba-1ce0-4c07-9b9b-f7374b3218a5" alt="Web Image 6" width="500"></td>
    <td><img src="https://github.com/user-attachments/assets/14ae19ba-0b33-4b06-bfbe-7d6f7721e6ac" alt="Web Image 5" width="500"></td>
  </tr>
</table>

## Project Structure

### Frontend Pages

- **Home**: Landing page which gives brief of the platform.
- **PropertyList**: Shows a list of available properties.
- **Sign In**: User Sign in form.
- **LoginPage**: User login form.
- **AddProperty**: Form to add a new property.
- **MyProfile**: Displays user's profile information, also allows users to edit details.
- **MyPropertyList**: Lists properties added by the user.
- **UpdateProperty**: Form to update the property details.
- **Error**: 404 Error page for invalid paths.

### Backend Layers

- **Controller Layer**: Handles HTTP requests and responses.
- **Service Layer**: Contains business logic.
- **Repository Layer**: Interacts with the database.
- **Configuration**: Contains Spring Boot configuration and Cors Configuration.

## Features

### User Authentication

- **Sign in**: Users can sign in with their details.
- **Login**: Users can log in to the application.
- **Logout**: Users can log out from the application.
- **Edit Details**: Users can edit their details (name, city).

### Property Management

- **Add Property**: Logged-in users can add a new property.
- **Search Properties**: Allows user to search property by name, city, state or country.
- **View Properties**: All users can view the list of available properties.
- **View Property Details**: Logged-in users can view detailed information about a property.
- **My Properties**: Logged-in users can view, update, and delete their properties.
- **Pagination**: Properties are fetched all at once and displayed in a paginated view, ensuring efficient navigation through large lists of properties.

## API Endpoints

### User APIs

- **GET : /user/id**: Get user details by userId.
- **POST : /user/signin**: Sign in a user.
- **POST : /user/login**: Log in a user.
- **PUT : /user**: Update user details.

### Property APIs

- **POST : /properties**: Add a new property.
- **GET : /properties**: Get all properties.
- **GET : /properties/{id}**: Get propeties of user.
- **PUT  : /properties**: Update property details.
- **DELETE : /properties/{id}**: Delete a property.

## Mobile View Snapshots 

<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/cc30ac1f-1c72-4e0d-9b5f-1e86b1a27416" alt="Image 2" width="225"></td>
    <td><img src="https://github.com/user-attachments/assets/f5b9833e-e4aa-4ae5-81f0-09437d0438be" alt="Image 8" width="225"></td>
    <td><img src="https://github.com/user-attachments/assets/789da6f4-a479-4830-a498-31d3798aebfa" alt="Image 7" width="225"></td>
    <td><img src="https://github.com/user-attachments/assets/6d520b32-ffe6-42c4-98cc-895fff21f2fc" alt="Image 1" width="225"></td>
    
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/31204d38-6bdb-403c-96f4-6cbd64bc2e57" alt="Image 5" width="220"></td>
    <td><img src="https://github.com/user-attachments/assets/631e5004-11e7-4211-bed9-84d5502048ed" alt="Image 4" width="220"></td>
    <td><img src="https://github.com/user-attachments/assets/ddc52ba8-4818-434d-b6df-263f0bb6a416" alt="Image 3" width="220"></td>
    <td><img src="https://github.com/user-attachments/assets/d6ecbd2a-dd27-41da-b24c-15ffb5b446e8" alt="Image 6" width="220"></td>
  </tr>
</table>

## Frontend (Client) Directory Structure
```
RentifyClient
          ├─── public
          ├─── src
          │       ├── Assets
          │       ├── Components
          │       │         ├── Footer.jsx
          │       │         ├── ImageUploader.jsx
          │       │         ├── Navbar.jsx
          │       │         ├── Pagination.jsx
          │       │         ├── PropertyCard.jsx
          │       │         ├── PropertyCard2.jsx
          │       │         ├── PropertySearch.jsx
          │       │         ├── ShimmerCard.jsx
          │       ├── Pages
          │       │         ├── AddProperty.jsx
          │       │         ├── Error.jsx
          │       │         ├── Home.jsx
          │       │         ├── LoginUser.jsx
          │       │         ├── MyProertyList.jsx
          │       │         ├── MyProfile.jsx
          │       │         ├── PropertyList.jsx
          │       │         ├── SignIn.jsx
          │       │         ├── UpdateProperty.jsx
          │       ├── Redux
          │       |         ├── Actions
          │       |         │         ├── userActions.jsx
          │       |         ├── Reducers
          │       |         │         ├── rootReducer.jsx
          │       |         │         ├── userReducer.jsx
          │       |         ├── Store
          │       |         │         ├── redux-store.jsx
          │       ├── Services
          │       |         ├── DeleteAsset.jsx
          │       |         ├── Endpoints.jsx
          │       |         ├── FilterProperties.jsx
          │       ├── index.css
          │       ├── index.jsx
          │       ├── Main.jsx
          │
          ├─── .env
          ├─── .gitignore
          ├─── index.html
          ├─── package.json
          ├─── package-lock.json
          ├─── vite.config.js
```

## Setting up the Rentify-Client

1. Navigate to the frontend directory
2. Install dependencies
3. Run the frontend

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

## Backend (Server) Directory Structure
```
RentifyServer
        ├── src
        │     ├── main
        │     │     ├── java
        │     │     │     ├── in
        │     │     │     │     ├── rentify
        │     │     │     │     │     ├── RentifyServerApplication.java
        │     │     │     │     │     ├── ServletInitializer.java
        │     │     │     │     │     ├── config
        │     │     │     │     │     │       ├── CorsConfig.java
        │     │     │     │     │     │       ├── SecurityConfig.java
        │     │     │     │     │     ├── controller
        │     │     │     │     │     │       ├── PropertyController.java
        │     │     │     │     │     │       ├── UserController.java
        │     │     │     │     │     ├── dao
        │     │     │     │     │     │       ├── PropertyRepository.java
        │     │     │     │     │     │       ├── UserRepository.java
        │     │     │     │     │     ├── dto
        │     │     │     │     │     │       ├── LoginDetails.java
        │     │     │     │     │     │       ├── UserDTO.java
        │     │     │     │     │     ├── model
        │     │     │     │     │     │       ├── Property.java
        │     │     │     │     │     │       ├── User.java
        │     │     │     │     │     ├── service
        │     │     │     │     │             ├── PropertyService.java
        │     │     │     │     │             ├── UserService.java
        │     │     ├── resources
        │     │     │     ├── application.properties
        │     │     │     ├── static
        │     │     │     ├── templates
        │     │     ├── webapp
        │     ├── test
        │     │     ├── java
        │     │     ├── resources

```


## Setting up the Rentify-Server

1. Clone the repository

```
git clone https://github.com/your-repo/rentify.git
```
```
cd RentifyServer
```

2. Set up the database: Create a MySQL database named rentify.
3. Update the database configuration in `application.properties` file.
4. Build and run the backend
```
mvn clean install
```
```
mvn spring-boot:run
```

## Contribution
Contributions are welcome! If you have any suggestions, improvements, or would like to contribute to any of the projects, feel free to open an issue or submit a pull request.
