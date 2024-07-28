<div align="center">
    <img src="https://github.com/user-attachments/assets/a485a552-3564-49c2-abc4-32161a7eca11" alt="Project Banner" style="border-radius: 5px;">
  <br> </ br>
  <br> </ br>

  <div>
    <img src="https://img.shields.io/badge/-React-black?style=for-the-badge&logo=react&logoColor=white&color=blue" alt="react" />
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
- **Additional Packages** : Axios, Yup, Formik, Toastify, Skeleton, Swiper, Cloudinary

## Web View Snapshots

<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/ea0e22b9-67ed-4f13-95c6-711f05a10ea7" alt="Web Image 1" width="500"></td>
    <td><img src="https://github.com/user-attachments/assets/7f20b778-a550-47d3-90b8-0a5ed79e487f" alt="Web Image 2" width="500"></td>
  </tr>
   <tr>
    <td><img src="https://github.com/user-attachments/assets/25aa7153-8df2-459d-8259-67aa2e9f3c61" alt="Web Image 7" width="500"></td>
    <td><img src="https://github.com/user-attachments/assets/122287eb-d835-431d-8570-5d83ed8cb378" alt="Web Image 8" width="500"></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/2c347595-6cbc-499a-bfbe-1961d33c678b" alt="Web Image 3" width="500"></td>
    <td><img src="https://github.com/user-attachments/assets/e49cecf8-518a-47b7-9a16-d6b907f8e325" alt="Web Image 4" width="500"></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/084738fc-3f18-4600-af92-99db3c0b579d" alt="Web Image 6" width="500"></td>
    <td><img src="https://github.com/user-attachments/assets/342b0940-9725-45f9-8f4b-3f6360890366" alt="Web Image 5" width="500"></td>
  </tr>
</table>

## Project Structure

### Frontend Pages

- **Home**: Landing page which gives brief of the platform.
- **About** : About us page displays company details and services.
- **PropertyList**: Shows a list of available properties.
- **PropertyDetails**: Displays additional information of a property.
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
- **POST: /user/check-email** : Check user already exists.
- **POST : /user/signin**: Sign in a user.
- **POST : /user/login**: Log in a user.
- **PUT : /user**: Update user details.

### Property APIs

- **POST : /properties**: Add a new property.
- **GET : /properties**: Get all properties.
- **GET : /properties/{pid}**: Get property details.
- **GET : /properties/{id}**: Get propeties of user.
- **PUT : /properties**: Update property details.
- **DELETE : /properties/{id}**: Delete a property.

## Mobile View Snapshots 

<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/015431a6-427c-448e-8727-9a4245b1b906" alt="Image 2" width="225"></td>
    <td><img src="https://github.com/user-attachments/assets/c3341b09-bdd6-41cb-91e2-c76ac14ff875" alt="Image 8" width="225"></td>
    <td><img src="https://github.com/user-attachments/assets/9cef5803-af7a-4312-9b5a-5c5fec9170b3" alt="Image 7" width="225"></td>
    <td><img src="https://github.com/user-attachments/assets/b6d30113-83cb-4614-965d-b3c7222f09d9" alt="Image 1" width="225"></td>
    
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/91d3e2ae-2ea9-400b-b645-fe9e7cbf911f" alt="Image 5" width="220"></td>
    <td><img src="https://github.com/user-attachments/assets/d0c52027-051f-4dc5-aed4-979fb2097178" alt="Image 4" width="220"></td>
    <td><img src="https://github.com/user-attachments/assets/0b623469-3d31-4306-b14f-4bdb8f68d942" alt="Image 3" width="220"></td>
    <td><img src="https://github.com/user-attachments/assets/fe04af67-45c2-45b5-805a-485206b9fcf0" alt="Image 6" width="220"></td>
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
          │       │         ├── PropertyDetailsShimmer.jsx
          │       │         ├── Testimonials.jsx
          │       ├── Pages
          │       │         ├── AddProperty.jsx
          │       │         ├── Error.jsx
          │       │         ├── Home.jsx
          │       │         ├── LoginUser.jsx
          │       │         ├── MyProertyList.jsx
          │       │         ├── MyProfile.jsx
          │       │         ├── PropertyDetails.jsx
          │       │         ├── PropertyList.jsx
          │       │         ├── SignIn.jsx
          │       │         ├── UpdateProperty.jsx
          │       ├── Redux
          │       |         ├── Reducers
          │       |         │         ├── uerSlice.jsx
          |       |         ├── redux-store.jsx
          │       ├── Services
          │       |         ├── DeleteAsset.jsx
          │       |         ├── Endpoints.jsx
          │       |         ├── FilterProperties.jsx
          │       |         ├── Icons.jsx
          │       |         ├── LocalStorage.jsx
          │       |         ├── TestimonialsData.jsx
          │       ├── custom.css
          │       ├── index.css
          │       ├── index.jsx
          │       ├── Main.jsx
          │
          ├─── .env
          ├─── .gitignore
          ├─── index.html
          ├─── package.json
          ├─── package-lock.json
          ├─── postcss.config.js
          ├─── tailwind.config.js
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
        │     │     │     │     │     │       ├── AdditionalDetailsRepository.java
        │     │     │     │     │     │       ├── PropertyRepository.java
        │     │     │     │     │     │       ├── UserRepository.java
        │     │     │     │     │     ├── dto
        │     │     │     │     │     │       ├── LoginDetails.java
        │     │     │     │     │     │       ├── UserDTO.java
        │     │     │     │     │     ├── model
        │     │     │     │     │     │       ├── AdditionalDetails.java
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
