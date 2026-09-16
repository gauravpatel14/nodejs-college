#  Express, MongoDB & Mongoose Integration


## Project Structure
The code strictly follows the required modular architecture:
\`\`\`text
project/
│
├── server.js          # Entry point and MongoDB connection
├── schema/
│   └── userSchema.js  # Mongoose schema definition (name, email, age, course)
├── model/
│   └── userModel.js   # Mongoose model exportation
└── router/
    └── userRouter.js  # API routes for GET and POST requests
\`\`\`

## APIs Implemented
* **`POST /api/users`**: Accepts user data from the request body and stores it in MongoDB.
* **`GET /api/users`**: Retrieves all users from MongoDB and returns them as a JSON response.

## How to Run
1. Install dependencies: `npm install express mongoose`
2. Ensure your local MongoDB server is running (or update the connection string in `server.js`).
3. Start the server: `node server.js`
4. Use Postman or Thunder Client to test the API routes on `http://localhost:3000`.