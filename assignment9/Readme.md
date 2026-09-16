# Assignment 9: Update and Delete Users in MongoDB


* **Modular Structure:** Reuses the existing `server.js`, `userSchema.js`, and `userModel.js` to strictly follow the required folder structure[cite: 5].
* **PATCH /api/users/:id:** Updates an existing user's information using their MongoDB document ID[cite: 5].
* **DELETE /api/users/:id:** Deletes a specific user based on the provided URL parameter[cite: 5].
* **Error Handling:** Validates MongoDB IDs and handles scenarios such as "User not found" and database errors with appropriate HTTP status codes[cite: 5].

## How to Test
1. Start the server: `node server.js` (Ensure MongoDB is running).
2. Create a user via `POST /api/users` and copy their `_id`.
3. Test Update: Send a `PATCH` request to `http://localhost:3000/api/users/<copied_id>` with JSON body (e.g., `{"age": 23, "course": "MCA"}`)[cite: 5].
4. Test Delete: Send a `DELETE` request to `http://localhost:3000/api/users/<copied_id>`.