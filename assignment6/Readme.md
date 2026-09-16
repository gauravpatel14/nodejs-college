 Express.js Middleware Implementation




* **Router-Level Middleware:** A custom `routerLogger` middleware that logs the HTTP method, request URL, and current date/time strictly for routes mounted under `/api`.
* **Request Logger Middleware:** A global middleware named `logger` that executes before every route to log incoming request details[cite: 1].
* **Response Time Middleware:** A custom `responseTimeLogger` that calculates and logs the total response time in milliseconds for each request.

## How to Run
1. Install dependencies: `npm install express nodemon`
2. Run the desired file: 
   * `node assign1.js`
   * `node assign2.js`
   * `node assign3.js`
3. Test using a browser or terminal.