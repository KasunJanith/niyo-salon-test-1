# My Spring Boot Backend

This project is a Spring Boot application that serves as the backend for a React application. It provides RESTful APIs for user authentication, appointment management, blog management, gallery management, and user profile management.

## Project Structure

```
my-springboot-backend
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com
│   │   │       └── example
│   │   │           └── backend
│   │   │               ├── BackendApplication.java
│   │   │               ├── controller
│   │   │               │   ├── AuthController.java
│   │   │               │   ├── AppointmentController.java
│   │   │               │   ├── DashboardController.java
│   │   │               │   ├── BlogController.java
│   │   │               │   ├── GalleryController.java
│   │   │               │   └── ProfileController.java
│   │   │               ├── model
│   │   │               │   ├── User.java
│   │   │               │   ├── Appointment.java
│   │   │               │   ├── BlogPost.java
│   │   │               │   └── GalleryItem.java
│   │   │               ├── repository
│   │   │               │   ├── UserRepository.java
│   │   │               │   ├── AppointmentRepository.java
│   │   │               │   ├── BlogRepository.java
│   │   │               │   └── GalleryRepository.java
│   │   │               ├── service
│   │   │               │   ├── UserService.java
│   │   │               │   ├── AppointmentService.java
│   │   │               │   ├── BlogService.java
│   │   │               │   └── GalleryService.java
│   │   │               └── security
│   │   │                   ├── SecurityConfig.java
│   │   │                   └── JwtUtil.java
│   │   └── resources
│   │       ├── application.properties
│   │       └── data.sql
│   └── test
│       └── java
│           └── com
│               └── example
│                   └── backend
│                       └── BackendApplicationTests.java
├── .gitignore
├── mvnw
├── mvnw.cmd
└── pom.xml
```

## Getting Started

### Prerequisites

- Java 11 or higher
- Maven
- An IDE (e.g., IntelliJ IDEA, Eclipse)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd my-springboot-backend
   ```

2. Build the project:
   ```
   ./mvnw clean install
   ```

3. Run the application:
   ```
   ./mvnw spring-boot:run
   ```

### API Endpoints

- **Authentication**
  - `POST /api/auth/login` - Login a user
  - `POST /api/auth/register` - Register a new user

- **Appointments**
  - `GET /api/appointments` - Get all appointments
  - `POST /api/appointments` - Create a new appointment
  - `PUT /api/appointments/{id}` - Update an existing appointment
  - `DELETE /api/appointments/{id}` - Delete an appointment

- **Dashboard**
  - `GET /api/dashboard` - Get dashboard data based on user role

- **Blog**
  - `GET /api/blog` - Get all blog posts
  - `POST /api/blog` - Create a new blog post
  - `PUT /api/blog/{id}` - Update an existing blog post
  - `DELETE /api/blog/{id}` - Delete a blog post

- **Gallery**
  - `GET /api/gallery` - Get all gallery items
  - `POST /api/gallery` - Create a new gallery item
  - `PUT /api/gallery/{id}` - Update an existing gallery item
  - `DELETE /api/gallery/{id}` - Delete a gallery item

- **Profile**
  - `GET /api/profile` - Get user profile
  - `PUT /api/profile` - Update user profile

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.