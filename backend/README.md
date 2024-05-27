
# AIQ - Image Challenge Backend

This project provides an API for resizing images, storing them in a database, and retrieving image frames based on depth range. It allows users to upload CSV files containing image data, process the images, and retrieve the processed frames.

## Table of Contents

- [AIQ - Image Challenge Backend](#aiq---image-challenge-backend)
  - [Table of Contents](#table-of-contents)
  - [Project Structure](#project-structure)
  - [Database](#database)
  - [API Endpoints](#api-endpoints)
    - [Upload CSV](#upload-csv)
    - [Get Frames](#get-frames)
  - [Models](#models)
    - [ImageData](#imagedata)
  - [Utility Functions](#utility-functions)
    - [Image Processing](#image-processing)
  - [Running the Backend](#running-the-backend)
  - [Containerization](#containerization)

## Project Structure

The project follows a modular structure to separate concerns and improve maintainability. Here's an overview of the project structure:

- `app.py`: The main entry point of the backend application.
- `config.py`: Contains the configuration settings for the backend.
- `src/`: Contains the source code for the backend.
  - `__init__.py`: Initializes the Flask application and database.
  - `models.py`: Defines the database models using SQLAlchemy.
  - `routes.py`: Defines the API routes and request handlers.
  - `utils.py`: Contains utility functions for image processing and color mapping.
- `requirements.txt`: Lists the Python dependencies required for the backend.
- `Dockerfile`: Defines the Docker image for the backend.

- The `src` package contains the Flask application.
  - The `models` package contains the database models.
  - The `utils` package contains utility functions for image processing.
  - The `routes.py` file contains the API routes.
- The `config.py` file contains the configuration settings for the application.
- The `requirements.txt` file lists the required dependencies.
- The `run.py` file is the entry point of the application.

## Database

The backend uses a PostgreSQL database to store the image data. The database connection is managed using the SQLAlchemy ORM. The `ImageData` model represents the table structure for storing image data, including the depth, original image data, and resized image data.

## API Endpoints

### Upload CSV

- Endpoint: `/upload`
- Method: POST
- Description: Accepts a CSV file upload, processes the image data, resizes the images, and stores them in the database.
- Request: The CSV file should be sent as `multipart/form-data` with the key `file`.
- Response: Returns a JSON object containing a success message if the CSV data is uploaded successfully.

### Get Frames

- Endpoint: `/frames`
- Method: GET
- Description: Retrieves image frames based on the specified depth range.
- Parameters:
  - `depth_min` (float): The minimum depth value.
  - `depth_max` (float): The maximum depth value.
- Response: Returns a JSON array containing the base64-encoded image frames within the specified depth range.

## Models

### ImageData

The `ImageData` model represents an image stored in the database. It has the following attributes:

- `id` (integer): The unique identifier of the image.
- `depth` (float): The depth value associated with the image.
- `image_data` (binary): The binary data of the original image.
- `resized_image_data` (binary): The binary data of the resized image.

## Utility Functions

### Image Processing

The `image_processing.py` file contains utility functions for image processing:

- `resize_image`: Resizes the image width to 150 pixels while maintaining the aspect ratio.
- `apply_color_map`: Applies a custom color map to the resized image.

## Running the Backend

To run the backend locally, make sure you have Python and the required dependencies installed. Then, follow these steps:

1. Navigate to the `backend` directory.
2. Create a virtual environment (optional but recommended):

    ```
    python -m venv .env
    source .env/bin/activate
    ```

3. Install the dependencies:

    ```
    pip install -r requirements.txt
    ```

4. Set the necessary environment variables for the database connection.
5. Run the backend server:

    ```
    python app.py
    ```

    The backend server will start running at `http://localhost:8002`.

Alternatively, you can run the backend using Docker Compose as described in the project root directory's README.

## Containerization

The solution can be containerized using Docker. The `Dockerfile` in the backend directory defines the necessary steps to build the Docker image. The `docker-compose.yml` file in the project root directory can be used to orchestrate the containers, including the Flask application and the PostgreSQL database.

To build and run the containers, navigate to the project root directory and execute the following command:

```
docker-compose up --build
```

This will build the Docker images and start the containers. The API will be accessible at `http://localhost:8002`.
