const express = require("express");
const app = express();

// Define RESTful routes
app.get("/api/users", (req, res) => {
  // Get all users
});

app.post("/api/users", (req, res) => {
  // Create a new user
});

app.put("/api/users/:id", (req, res) => {
  // Update a user
});

app.delete("/api/users/:id", (req, res) => {
  // Delete a user
});

// Start the Express server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
