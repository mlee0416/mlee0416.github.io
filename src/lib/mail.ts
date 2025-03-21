import { ERoutes } from "@/types/routes/routeTypes";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/${ERoutes.AUTH_NEW_VERIFICATION}?token=${token}`;

  await resend.emails.send({
    from: "mail@personal-portfolio-0416.com",
    to: email,
    subject: "Confirm your email",
    html: `<p>Click <a href=${confirmLink}> here</a> to confirm email.</p>`,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}${ERoutes.AUTH_NEW_PASSWORD}?token=${token}`;

  await resend.emails.send({
    from: "mail@personal-portfolio-0416.com",
    to: email,
    subject: "Reset your password",
    html: `<p>Click <a href=${confirmLink}> here</a> to rest your password.</p>`,
  });
};

export const sendTwoFactorEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: "mail@personal-portfolio-0416.com",
    to: email,
    subject: "2FA Code",
    html: `<p>Your 2FA code: ${token}</p>`,
  });
};
