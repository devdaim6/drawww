import nodemailer from "nodemailer";
import Otp from "@/models/otp";
import User from "@/models/user";
import { NextResponse } from "next/server";
import connectToDB from "@/lib/db";
import bcryptjs from "bcryptjs";
import randomstring from "randomstring";
const handler = async function POST(req) {
  const { email } = await req.json();
  // console.log(email)
  await connectToDB();
  const findUser = await User.findOne({ email });
  if (!findUser) {
    return NextResponse.json({
      message: "No User Found with this Email",
      success: false,
    });
  }
  // Create a transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",

    auth: {
      user: process.env.AUTH_EMAIL, // Your Gmail email address
      pass: process.env.AUTH_PASS, // Your Gmail App Password
    },
  });

  const otp = randomstring.generate({
    length: 4,
    charset: ["numeric"],
  });
  const currentTime = Date.now();
  const updatedTime = currentTime + 5 * 60 * 1000;
  const formattedTime = new Date(updatedTime).toLocaleTimeString();
  const formattedDate = new Date(updatedTime).toLocaleDateString();

  // Define the email data
  const mailOptions = {
    from: process.env.AUTH_EMAIL,
    to: email, // The recipient's email address
    subject: "Password Reset",
    html: ` <div style="width: 100%; background-color: #ccc;">
    <table style="border-collapse: collapse;">
      <tr>
        <td style="padding: 1.25rem;">
          <table style="max-width: 36rem; border-collapse: collapse; border: none; border-color: #f00;">
            <tr>
              <td style="background-color: #666;">
                <a href="https://port-proj.vercel.app">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHDUdlmzh3eRBkEmJmtrbAXeufZ4v1ODFX_w&usqp=CAU"
                    alt="WOOP"
                    style="display: block; margin: 0 auto;"
                  />
                </a>
                <div style="padding: 2.5rem; color: #fff; font-family: sans-serif; font-size: 1rem; line-height: 1.25;">
                  <p  style="font-weight:bold;">Dear ${findUser.name},</p>
                  <div style="padding-top: 1.25rem; padding-bottom: 0.625rem;">
                    <table style="text-align: left;">
                      <tr>
                        <td style="width: 8rem; vertical-align: top;">Verification code:</td>
                        <td style="font-weight: bold; font-size: 1.25rem; color: #f00;">
                          <strong>${otp}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td style="width: 8rem; vertical-align: top;"></td>
                        
                      </tr>
                    </table>
                    </div>
                    <div style="padding-top: 1.25rem;">This Code will Expire at<strong> ${formattedTime} </strong>(${formattedDate})</div>
                  <p style="padding-top: 1.25rem;">
                    Regards,<br />
                    <a href="https://port-proj.vercel.app" style="color: #f44;">Portfolio</a>
                  </p>
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
  `,
  };

  await Otp.deleteOne({ email });

  const hashedotp = await bcryptjs.hash(otp, 12);
  const newOtp = await new Otp({
    email,
    otp: hashedotp,
    createdAt: Date.now(),
    expiredAt: new Date(updatedTime),
  });
  const createdOTPRecord = await newOtp.save();
  var ErrorSendEmail;
  // Send the email
  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error : ", error);
      ErrorSendEmail = true;
      console.log("Info while Error : ", info);
    } else {
      console.log("Info : ", info);
    }
  });
  if (ErrorSendEmail)
    return NextResponse.json({
      message: "Try Again!",
      otp: createdOTPRecord,
      success: false,
    });
  return NextResponse.json({
    message: "Otp Sent",
    otp: createdOTPRecord,
    success: true,
  });
};

export { handler as POST };
