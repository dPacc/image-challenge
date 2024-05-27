# AIQ: Image Challenge Frontend

The frontend of the image data processing and visualization application provides a user interface to upload CSV files and view the processed image frames. It is built using React and utilizes Ant Design components for the user interface.

Frontend Structure
------------------

The frontend directory is organized as follows:

* `src/`: Contains the source code for the frontend.
  * `components/`: Contains reusable React components.
    * `UploadCSV.js`: Implements the CSV file upload functionality.
    * `FrameList.js`: Displays the list of processed image frames.
  * `App.js`: The main component that sets up the routing and layout of the application.
  * `App.css`: Contains CSS styles specific to the frontend.
  * `index.js`: The entry point of the frontend application.
* `public/`: Contains the public assets and the HTML template.
* `package.json`: Lists the dependencies and scripts for the frontend.
* `Dockerfile`: Defines the Docker image for the frontend.

User Interface
--------------

The frontend provides a user-friendly interface with the following components:

* Upload CSV: Allows users to upload a CSV file containing image data. The CSV file is sent to the backend for processing.
* Frame List: Displays a list of processed image frames based on the specified depth range. Users can input the minimum and maximum depth values to filter the frames.

The frontend communicates with the backend API to upload CSV files and retrieve processed image frames. It sends requests to the appropriate API endpoints and handles the responses to update the user interface accordingly.

Styling and UI Components
-------------------------

The frontend uses Ant Design, a popular React UI library, for styling and pre-built UI components. The Ant Design components provide a consistent and visually appealing user interface.

Routing
-------

The frontend uses React Router for handling navigation between different pages. The main routes are defined in the `App.js` component:

* `/`: The home page that displays the CSV file upload component.
* `/frames`: The page that displays the list of processed image frames.

Containerization
----------------

The frontend is containerized using Docker. The `Dockerfile` in the frontend directory defines the Docker image for the frontend. It sets up the necessary dependencies, copies the application code, and specifies the command to run the frontend development server.

Running the Frontend
--------------------

To run the frontend locally, make sure you have Node.js and the required dependencies installed. Then, follow these steps:

1. Navigate to the `frontend` directory.
2. Install the dependencies:

    ```
    npm install
    ```

3. Run the frontend development server:

    ```
    npm start
    ```

    The frontend will start running at `http://localhost:3000`.

Alternatively, you can run the frontend using Docker Compose as described in the project root directory's README.

Deployment
----------

To deploy the frontend for production, you can build the optimized production-ready version of the frontend using the following command:

```
npm run build
```

This will generate a `build` directory containing the production-ready files. You can then serve the contents of the `build` directory using a static file server or deploy it to a hosting platform of your choice.
