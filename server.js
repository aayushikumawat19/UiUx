const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8080;

app.use(cors({
  origin: "http://localhost:5174",
  credentials: true
}));

app.use(express.json());

app.post("/api/auth/register", (req, res) => {
  const { firstName, lastName, email, roles } = req.body;

  console.log("Received signup data:", req.body);

  if (!firstName || !lastName || !email || !roles?.length) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newUser = {
    id: Date.now(),
    firstName,
    lastName,
    email,
    roles
  };

  console.log("User registered:", newUser);

  return res.status(201).json({
    message: "User registered successfully",
    user: newUser
  });
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
