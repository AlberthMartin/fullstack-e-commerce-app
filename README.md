# Fullstack MERN E-commerce Admin Site

A modern CRUD e-commerce admin site built with the MERN stack: **MongoDB, Express, React, and Node.js**.

## Features

- Create, update, and delete products
- Modern responsive design
- Light & dark mode support
- Developer and production build scripts

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AlberthMartin/fullstack-e-commerce-app.git
   cd fullstack-e-commerce-app
    ```
   
2. Install dependencies:
   ```bash
   npm install
   ```
   
## Running the App

### Development Mode

  ```bash
  npm run dev  
  ```
Starts the backend server (backend/server.js) with nodemon.
Open new terminal and go to frontend and start the vite server:
  ```bash
  cd frontend
  npm run dev  
  ```
Now you can se the products in http://localhost:3001/api/products/ (if you are connected to MongoDB)
and the frontend in http://localhost:5173/


### Production Build
  ```bash
  npm run build
  npm run start
  ```

Now the fullstack app is available on http://localhost:3001/ and you can see the products from MongoDB if you are connected

# Technologies Used
- MongoDB
- Express.js
- React.js
- Node.js

