import { sendOtpMailTemplate } from '../convert_from_mjml_to_html.services.mail';
import { sendMail } from '../smtp.services.mail';

export const sendOtpToUsersMail = async (receiver: string, otp: string) => {
  const subject = 'Here is Your OTP';
  await sendMail(subject, sendOtpMailTemplate({ otp }), receiver);
};
