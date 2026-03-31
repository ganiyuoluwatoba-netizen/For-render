const express = require("express");
const app = express();

app.use(express.json());

// Get port from environment, default to 3000
const PORT = process.env.EXPRESS_PORT || 3000;

// Test route to check server is running
app.get("/", (req, res) => {
  res.send("Webhook server is running 🚀");
});

// Webhook route to receive data
app.post("/webhook", (req, res) => {
  // For security: log only if allowed
  console.log("Received data:", req.body);

  res.json({
    message: "Webhook received successfully",
    data: req.body
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Webhook server running on port ${PORT}`);
});
