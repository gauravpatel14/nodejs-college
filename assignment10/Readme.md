# Store Data in Firebase Firestore Using Express.js


## Project Structure
\`\`\`text
project/
│
├── config/
│   ├── firebase.js             # Firebase Admin initialization
│   └── serviceAccountKey.json  # (Ignored in Git) Private key for Firebase
├── schema/
│   └── userSchema.js           # Validation logic for Name, Email, Age, Course
├── router/
│   └── userRouter.js           # API endpoints (POST /api/users)
├── server.js                   # Application entry point
├── package.json
└── README.md
\`\`\`

## Features
* **Firebase Integration:** Uses `firebase-admin` to connect securely to Firestore[cite: 6].
* **Schema Validation:** Custom validation ensures Name (string), Email (regex format), Age (number range), and Course (string) are correct before database interaction[cite: 6].
* **Error Handling:** Returns a `400 Bad Request` with specific error details if validation fails[cite: 6].

## How to Run
1. Run `npm install` to grab dependencies.
2. Place your Firebase `serviceAccountKey.json` inside the `config/` folder.
3. Start the server using `node server.js`.
4. Test the API at `http://localhost:3000/api/users` using Postman.