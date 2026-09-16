Dynamic Routing in Express.js

* **Route Parameters:** Extracts dynamic values from the URL path (e.g., `/student/:id`) using `req.params` and displays the Student ID.
* **Query Parameters:** Retrieves search parameters (e.g., `?name=Ricky&course=Node.js`) using `req.query` with a fallback message if no data is provided.
* **Combined Routing:** A dynamic student profile route utilizing both route parameters and query parameters simultaneously.

## How to Run
1. Install dependencies: `npm install express nodemon`
2. Run the desired file: 
   * `node assign1.js`
   * `node assign2.js`
   * `node assign3.js`
3. Test by modifying the URL in your browser (e.g., `http://localhost:3000/student/101?name=John&course=FullStack`).