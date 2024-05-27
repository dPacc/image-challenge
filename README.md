# AIQ: Image Challegne

This project is an image data processing and visualization application that consists of a backend and a frontend. The backend is responsible for handling CSV file uploads, resizing images, storing them in a database, and providing an API to retrieve image frames based on depth range. The frontend provides a user interface to upload CSV files and view the processed image frames.

Project Structure
-----------------

The project is organized into the following directories:

* `backend/`: Contains the backend application code and Dockerfile.
* `frontend/`: Contains the frontend application code and Dockerfile.
* `docker-compose.yml`: Defines the services and their configurations for running the application using Docker Compose.

Getting Started
---------------

To run the application, make sure you have Docker and Docker Compose installed on your machine. Then, follow these steps:

1. Clone the repository:

    ```
    git clone https://github.com/dPacc/image-challenge.git
    cd image-challenge
    ```

2. Start the application using Docker Compose:

    ```
    docker-compose up --build
    ```

    This command will build the Docker images for the backend and frontend, and start the necessary containers.

3. Access the application:
    * Frontend: Open your web browser and visit `http://localhost:3002` to access the frontend interface.
    * Backend API: The backend API is accessible at `http://localhost:8002`.
    * Adminer (Database Management): You can access Adminer at `http://localhost:8082` to manage the PostgreSQL database.

Architecture
------------

The application follows a client-server architecture, with the frontend communicating with the backend API to upload CSV files and retrieve processed image frames.

* Backend:
  * The backend is built using Python and utilizes the Flask web framework.
  * It provides endpoints for uploading CSV files and retrieving image frames based on depth range.
  * The uploaded CSV data is processed, resized, and stored in a PostgreSQL database.
  * The backend applies a custom color map to the image frames before sending them to the frontend.
* Frontend:
  * The frontend is built using React and utilizes Ant Design components for the user interface.
  * It provides a user-friendly interface to upload CSV files and view the processed image frames.
  * The frontend communicates with the backend API to send CSV files and retrieve image frames.
* Database:
  * The application uses a PostgreSQL database to store the image data.
  * The database is managed using the SQLAlchemy ORM in the backend.
* Containerization:
  * The backend and frontend are containerized using Docker.
  * Docker Compose is used to define and run the multi-container application.
