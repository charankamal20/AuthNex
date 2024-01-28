import nodemailer from "nodemailer";

const domain = process.env.NEXT_PUBLIC_APP_URL;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.GOOGLE_APP_KEY,
  },
});

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const customLink = `${domain}/auth/new-password?token=${token}`;

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Reset your password",
    html: `<p>Click <a href="${customLink}">here</a> to reset your password.</p>`,
  };

  await transporter.sendMail(
    mailOptions,
    function (error: Error | null, info: any) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email Sent");
        return true;
      }
    }
  );
}

export const sendVerificationEmail = async (email: string, token: string) => {
  const customLink = `${domain}/auth/new-verification?token=${token}`;

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Confirmation Email",
    html: `<p>Click <a href="${customLink}">here</a> to confirm your email.</p>`,
  };

  await transporter.sendMail(
    mailOptions,
    function (error: Error | null, info: any) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email Sent");
        return true;
      }
    }
  );
};

/**
 * Sends a two-factor authentication email to the specified email address.
 * @param email - The recipient's email address.
 * @param token - The two-factor authentication code.
 * @returns A promise that resolves to a boolean indicating whether the email was sent successfully.
 */
export const sendTwoFactorEmail = async (email: string, token: string) => {
  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Two Factor Authentication Code",
    html: `<p>Your two factor authentication code is ${token}</p>`,
  };

  await transporter.sendMail(
    mailOptions,
    function (error: Error | null, info: any) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email Sent");
        return true;
      }
    }
  );
};
