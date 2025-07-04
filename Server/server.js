const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const otpGenerator = require('otp-generator');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const otpStore = {}; // In-memory OTP storage

app.post('/send-otp', (req, res) => {
  const { phone } = req.body;
  if (!phone) return res.status(400).json({ message: 'Phone number is required' });

  const otp = otpGenerator.generate(6, { digits: true, alphabets: false, upperCase: false });
  const expiresAt = Date.now() + 5 * 60 * 1000;

  otpStore[phone] = { otp, expiresAt };

  console.log(`OTP for ${phone}: ${otp}`); // Display in terminal
  res.json({ message: 'OTP sent successfully' });
});

app.post('/verify-otp', (req, res) => {
  const { phone, otp } = req.body;
  const record = otpStore[phone];

  if (!record) return res.status(400).json({ message: 'No OTP sent' });
  if (Date.now() > record.expiresAt) {
    delete otpStore[phone];
    return res.status(400).json({ message: 'OTP expired' });
  }
  if (record.otp !== otp) return res.status(400).json({ message: 'Invalid OTP' });

  delete otpStore[phone];
  res.json({ message: 'OTP verified successfully' });
});

app.listen(PORT, () => {
  console.log(`OTP server running at http://localhost:${PORT}`);
});