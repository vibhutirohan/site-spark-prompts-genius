import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { sendOTP, verifyOTP } from './utils/otpService.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/send-otp', async (req, res) => {
  const { whatsappNumber } = req.body;
  try {
    await sendOTP(whatsappNumber);
    res.json({ message: 'OTP sent successfully!' });
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).json({ message: 'Failed to send OTP.' });
  }
});

app.post('/api/verify-otp', async (req, res) => {
  const { whatsappNumber, otp } = req.body;
  try {
    const isValid = await verifyOTP(whatsappNumber, otp);
    if (!isValid) return res.status(401).json({ message: 'Invalid or expired OTP' });

    const token = jwt.sign({ whatsappNumber }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error('Error verifying OTP:', error);
    res.status(500).json({ message: 'OTP verification failed.' });
  }
});

// ✅ This line was probably missing:
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
