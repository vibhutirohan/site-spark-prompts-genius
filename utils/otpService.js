import twilio from 'twilio';

const otpStore = new Map();
const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

export function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function sendOTP(whatsappNumber) {
  const otp = generateOTP();
  otpStore.set(whatsappNumber, {
    otp,
    expiresAt: Date.now() + 5 * 60 * 1000
  });

  await client.messages.create({
    body: `Your Uplaud OTP is: ${otp}`,
    from: process.env.TWILIO_WHATSAPP_NUMBER,
    to: `whatsapp:${whatsappNumber}`
  });
}

export async function verifyOTP(whatsappNumber, userOTP) {
  const record = otpStore.get(whatsappNumber);
  if (!record) return false;

  const { otp, expiresAt } = record;
  const isValid = otp === userOTP && Date.now() < expiresAt;

  if (isValid) otpStore.delete(whatsappNumber);
  return isValid;
}
