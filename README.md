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

**Rentify** is a web application designed to simplify the rental process for both property owners and tenants.\
In the post-pandemic world, the demand for real estate has surged, especially in cities with high populations and IT offices. RENTIFY aims to bridge the gap between property owners and tenants by providing a platform where they can easily connect based on their requirements.


## Technologies Used

- **Frontend** : Vite, Redux Toolkit, React JS, Tailwind CSS
- **Backend** : Java, Maven, Spring Boot, REST-APIs, MySQL Database
- **Additional Packages** : Axios, Animate.CSS, Yup, Formik, Toastify, Skeleton, Swiper, Cloudinary

## Web View Snapshots

<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/2b578ca1-0be4-4ef2-94da-100ed527b1d2" alt="Web Image 1" width="500"></td>
    <td><img src="https://github.com/user-attachments/assets/37c1b74e-db7b-4eba-a69c-059c19298e78" alt="Web Image 2" width="500"></td>
  </tr>
   <tr>
    <td><img src="https://github.com/user-attachments/assets/ef3e9570-92b1-4f92-8c44-f8b83dbc506b" alt="Web Image 7" width="500"></td>
    <td><img src="https://github.com/user-attachments/assets/b8d646d6-d080-42b0-b0c2-153c030d1887" alt="Web Image 8" width="500"></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/fe163b68-bcd6-4327-b55b-1a36e510e176" alt="Web Image 3" width="500"></td>
    <td><img src="https://github.com/user-attachments/assets/5e6324c3-3719-4ef3-a309-77f67291b494" alt="Web Image 4" width="500"></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/34b46b22-8662-447b-91f2-f7c5972cd6fd" alt="Web Image 6" width="500"></td>
    <td><img src="https://github.com/user-attachments/assets/01b4ab9b-ce73-4c1e-b929-5333db8ba20f" alt="Web Image 5" width="500"></td>
  </tr>
</table>

## Project Structure

### Frontend Pages

- **Home**: Landing page which gives overview about the company, milestones, awards and testimonials.
- **About** : About us page displays company details and services.
- **PropertyList**: Shows a list of available properties.
- **PropertyDetails**: Displays additional information of a property.
- **MyProfile**: Displays user's profile information, also allows users to edit details.
- **MyPropertyList**: Lists properties added by the user.
- **Error**: 404 Error page for invalid paths.
  
### Forms
- **LoginForm**: User login form.
- **SignUpForm**: User Sign up form.
- **AddProperty**: Form to add a new property.
- **UpdateProperty**: Form to update the property details.

### Backend Layers

- **Controller Layer**: Handles HTTP requests and responses.
- **Service Layer**: Contains business logic.
- **Repository Layer**: Interacts with the database.
- **Configuration**: Contains Spring Boot configuration and Cors Configuration.

## Features

### User Authentication

- **Sign up**: Users can sign up with their details.
- **Login**: Users can log in to the application.
- **Logout**: Users can log out from the application.
- **Edit Details**: Users can edit their details (name, city).

### Property Management

- **Add Property**: Logged-in users can add a new property.
- **Search Properties**: Allows user to search property by name, city, state or country.
- **View Properties**: All users can view the list of available properties.
- **View Property Details**: Logged-in users can view detailed information about a property.
- **My Properties**: Logged-in users can view, update, and delete their properties.
- **Sort Properties**: Users can sort property by rent and by date posted (both high to low and low to high)
- **Pagination**: Properties are fetched all at once and displayed in a paginated view, ensuring efficient navigation through large lists of properties.

## Swagger UI
This application includes Swagger UI for API documentation and testing. Swagger provides an interactive interface to explore and test all available endpoints in the application.

### Accessing Swagger UI:
The Swagger UI can be accessed at the following URL once the server is running: \
**`Note:` Use the same `username` and `password` added in Spring Security Configuration**
```
http://localhost:9999/Rentify/swagger-ui.html
```

### Features:
- View all available API endpoints with detailed documentation.
- Test endpoints directly from the browser using the Swagger interface.
- Supports Basic Authentication: Enter the username and password when prompted to access secured endpoints.

## Authentication: Username and Password
This application uses Basic Authentication to secure the APIs. The username and password for authentication are configured as follows:

### Server Side:
The username and password are set in the Spring Boot application properties (`application.yml` or `.properties`) as shown below. These credentials are required to access the secured endpoints.
```properties
spring.security.user.name = username
spring.security.user.password = password
```

### Client Side:
The same username and password are stored in the `.env` file in the React application for API requests. The .env file ensures these credentials are not hardcoded in the codebase. Ensure the .env file is included in .gitignore to avoid exposing sensitive data.
```properties
VITE_APP_USERNAME = username
VITE_APP_PASSWORD = password
```


## API Endpoints

### User APIs

- **GET : /user/id**: Get user details by userId.
- **POST: /user/check-email** : Check user already exists.
- **POST : /user/signin**: Sign in a user.
- **POST : /user/login**: Log in a user.
- **PUT : /user**: Update user details.

### Property APIs
- **POST : /properties**: Add a new property.
- **GET : /properties/latest-properties**: Get recent listings by date.
- **GET : /properties**: Get all properties with pagination, searching, and sorting.
  - Query Parameters:
    - `page`: Page number (default: 0)
    - `size`: Number of items per page (default: 8)
    - `search`: Search term for property name or location
    - `sort`: Sort field and direction (e.g., 'rent,desc' or 'createdAt,asc')
- **GET : /properties/{pid}**: Get property details by property ID.
- **GET : /properties/owner/{id}**: Get properties of a specific user.
- **PUT : /properties**: Update property details.
- **DELETE : /properties/{id}**: Delete a property.

## Pagination, Searching, and Sorting
- The `/properties` endpoint now supports server-side pagination, searching, and sorting.
- Clients should use the query parameters to request specific pages, apply search filters, and specify sorting criteria.
- The API returns paginated results along with metadata about the total number of pages and items.

## Example API Usage

### Fetching Properties
```
GET /properties?page=0&size=10&search=apartment&sort=rent,desc
```
This request will:
- Fetch the first page of results
- Return 10 items per page
- Search for properties with "apartment" in the name or location
- Sort the results by rent in descending order

## Mobile View Snapshots 

<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/903e19df-c94b-4dc0-b598-edfdfe724699" alt="Image 1" width="225"></td>
    <td><img src="https://github.com/user-attachments/assets/99af3375-bffd-44c1-be05-376c0518c2d1" alt="Image 2" width="225"></td>
    <td><img src="https://github.com/user-attachments/assets/37723b0a-d995-4b4e-a884-bfac7f105ae7" alt="Image 3" width="225"></td>
    <td><img src="https://github.com/user-attachments/assets/65e8c6d7-0c8c-4dd3-a6d5-d41e47f69fa4" alt="Image 4" width="225"></td>
  </tr>
    
  <tr>
    <td><img src="https://github.com/user-attachments/assets/e9b4415e-eaf4-4c60-8687-78fb5a7bf677" alt="Image 5" width="225"></td>
    <td><img src="https://github.com/user-attachments/assets/3ea675db-dc25-4555-b2db-47da17af785b" alt="Image 6" width="225"></td>
    <td><img src="https://github.com/user-attachments/assets/456be20c-5423-46d8-8e26-729f79919d81" alt="Image 7" width="225"></td>
    <td><img src="https://github.com/user-attachments/assets/b28f6dcc-96c7-48ff-8038-f8e3de6c1f46" alt="Image 8" width="225"></td>
  </tr>
</table>

## Frontend (Client) Directory Structure
```
RentifyClient
          ├─── public
          ├─── src
          │       ├── Assets
          │       ├── Components
          │       │         ├── Authentication
          │       │                 ├── AuthModal.jsx
          │       │                 ├── LoginForm.jsx
          │       │                 ├── SignUpForm.jsx
          │       │         ├── Footer.jsx
          │       │         ├── ImageUploader.jsx
          │       │         ├── Navbar.jsx
          │       │         ├── Pagination.jsx
          │       │         ├── PropertyCard.jsx
          │       │         ├── PropertyCard2.jsx
          │       │         ├── PropertySearch.jsx
          │       │         ├── SortProperties.jsx
          │       │         ├── ShimmerCard.jsx
          │       │         ├── PropertyDetailsShimmer.jsx
          │       │         ├── Testimonials.jsx
          │       ├── Pages
          │       │         ├── Forms
          │       │                ├── AddProperty.jsx
          │       │                ├── UpdateProperty.jsx
          │       │         ├── About.jsx
          │       │         ├── Home.jsx
          │       │         ├── Error.jsx
          │       │         ├── MyProertyList.jsx
          │       │         ├── MyProfile.jsx
          │       │         ├── PropertyDetails.jsx
          │       │         ├── PropertyList.jsx
          │       │         
          │       ├── Redux
          │       |         ├── Reducers
          │       |         │         ├── uerSlice.jsx
          |       |         ├── redux-store.jsx
          │       ├── Services
          │       |         ├── Constants.jsx
          │       |         ├── DeleteAsset.jsx
          │       |         ├── Endpoints.jsx
          │       |         ├── Icons.jsx
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
