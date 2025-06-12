// utils/otpService.js
import axios from 'axios';

// In-memory store for OTPs (phoneNumber -> { otp, expiresAt })
const otpStore = new Map();

// ✅ Generate a 6-digit OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

/**
 * Send OTP to the user's WhatsApp-enabled number
 * @param {string} phoneNumber - Phone number in international format (e.g., +1XXXXXXXXXX)
 */
export async function sendOTP(phoneNumber) {
  const otp = generateOTP();

  // Store OTP with 5-minute expiry
  otpStore.set(phoneNumber, {
    otp,
    expiresAt: Date.now() + 5 * 60 * 1000, // 5 minutes
  });

  // ✅ Use Textbelt free API (1 SMS/day)
  try {
    const res = await axios.post('https://textbelt.com/text', {
      phone: phoneNumber,
      message: `Your Uplaud OTP is: ${otp}`,
      key: 'textbelt', // Free testing key
    });

    if (res.data.success) {
      console.log(`📤 OTP sent to ${phoneNumber}: ${otp}`);
    } else {
      console.log(`⚠️ OTP not sent (Textbelt):`, res.data);
    }

    return res.data.success;
  } catch (error) {
    console.error('❌ Error sending OTP via Textbelt:', error.message);
    throw new Error('OTP send failed');
  }
}

/**
 * Verify the OTP entered by the user
 * @param {string} phoneNumber
 * @param {string} userOTP
 * @returns {boolean} true if valid, false otherwise
 */
export async function verifyOTP(phoneNumber, userOTP) {
  const record = otpStore.get(phoneNumber);
  if (!record) return false;

  const { otp, expiresAt } = record;
  const isValid = otp === userOTP && Date.now() < expiresAt;

  if (isValid) {
    otpStore.delete(phoneNumber); // Invalidate after success
  }

  return isValid;
}
