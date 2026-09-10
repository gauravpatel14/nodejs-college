## Steps to run the server
1. Ensure Node.js is installed.
2. Run `npm install` to install dependencies.
3. Run `node server.js` to start the server.
4. Open a browser or use a tool like Postman to test the routes at `http://localhost:3000`.

## Explanation of Routes
* **GET /**: The root endpoint that returns a welcome message.
* **GET /about**: A basic route returning information about the page.
* **GET /contact**: A basic route for the contact page.
* **GET /user/:name**: A dynamic route that accepts a user's name as a URL parameter and returns a personalized greeting.
* **GET /product/:id/:category**: A route handling multiple dynamic parameters (id and category).
* **GET /search**: A route that extracts `name` and `role` from the URL query string.

## Sample Outputs
* `/user/john` -> "Hello john"
* `/product/101/electronics` -> "Product ID: 101, Category: electronics"
* `/search?name=john&role=developer` -> "Name: john, Role: developer"