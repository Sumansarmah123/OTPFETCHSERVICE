// backend/server.js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const otpDatabase = {};

// Dummy endpoint to fetch OTPs based on sender and time range
app.post("/fetch-otps", (req, res) => {
  const { sender, startTime, endTime } = req.body;

  // Dummy logic to fetch OTPs (for demo purposes)
  const otps = otpDatabase[sender] || [];
  const filteredOTPs = otps.filter(otp => otp.timestamp >= startTime && otp.timestamp <= endTime);

  res.json(filteredOTPs);
});

// Dummy endpoint to save OTPs for receiver (not implemented)
// app.post("/save-otp", (req, res) => { ... });

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
