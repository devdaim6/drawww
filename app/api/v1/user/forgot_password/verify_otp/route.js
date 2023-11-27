import connectToDB from "@/lib/db";
import Otp from "@/models/otp";
import User from "@/models/user";
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";

const handler = async function POST(req) {
  try {
    await connectToDB();
    const { email, otp, newPassword } = await req.json();
    if (!(email && otp)) {
      throw Error("provide values for email , otp");
    }

    const findUser = await User.findOne({ email });
    if (!findUser) {
      return NextResponse.json({
        message: "No User Found with this Email",
        result: "Password Changed",
        success: true,
      });
    }
    //ensuring otp is correct
    const matchedOtpRecord = await Otp.findOne({ email });

    if (!matchedOtpRecord) {
      throw Error("Request for an OTP first!");
    }
    const { expiredAt } = matchedOtpRecord;
    // console.log(expiredAt)

    if (!(expiredAt > Date.now())) {
      await Otp.deleteOne({ email });
       return NextResponse.json({
        message: "Otp Expired.Request New One.",
        success: true,
      });
    }
    const newHashedPassword = await bcryptjs.hash(newPassword, 12);
    const hashedOtp = matchedOtpRecord.otp;
    const validOtp = await bcryptjs.compare(otp, hashedOtp);
    if (validOtp) {
      const userUpdate = await User.updateOne(
        { email },
        {
          $set: {
            password: newHashedPassword,
          },
        },
        { new: true }
      );
      console.log(userUpdate);
      //   await userUpdate.save();
      await Otp.deleteOne({ email });
      return NextResponse.json({
        message: "Otp Verified",
        result: "Password Changed",
        success: true,
      });
    }
    return NextResponse.json({
      message: "Otp Verification Failed",
      success: false,
    });
  } catch (error) {
    throw error;
  }
};

export { handler as POST };
