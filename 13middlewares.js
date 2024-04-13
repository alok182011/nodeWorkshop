// Example of middleware function
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  if (!req.body) {
    res.send("error");
  }
  next();
};

// Using middleware in Express.js
app.use(logger);

app.get("/api/users", logger, auth, (req, res) => {
  // Get all users
});
