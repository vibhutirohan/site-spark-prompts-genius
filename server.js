import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { sendOTP, verifyOTP } from './utils/otpService.js';

dotenv.config();
const app = express();

// ✅ CORS CONFIGURATION
const allowedOrigin = 'https://glorious-carnival-677wx9rq45rf5r44-8080.app.github.dev';

app.use(cors({
  origin: allowedOrigin,
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

app.post('/api/send-otp', async (req, res) => {
  const { whatsappNumber } = req.body;
  if (!whatsappNumber) return res.status(400).json({ success: false, message: 'Phone number is required' });

  try {
    await sendOTP(whatsappNumber);
    res.json({ success: true, message: 'OTP sent successfully!' });
  } catch (error) {
    console.error('❌ Error sending OTP:', error);
    res.status(500).json({ success: false, message: 'Failed to send OTP.' });
  }
});

app.post('/api/verify-otp', async (req, res) => {
  const { whatsappNumber, otp } = req.body;
  try {
    const isValid = await verifyOTP(whatsappNumber, otp);
    if (!isValid) return res.status(401).json({ success: false, message: 'Invalid or expired OTP' });

    const token = jwt.sign({ whatsappNumber }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ success: true, token });
  } catch (error) {
    console.error('❌ Error verifying OTP:', error);
    res.status(500).json({ success: false, message: 'OTP verification failed.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
