import connectToDB from "@/lib/db";
import User from "@/models/user";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {

  const { userDetails } = await req.json();


  await connectToDB();
  try {
    //check if the user is exists or not

    const emailAlreadyExists = await User.findOne({ email: userDetails?.form?.email });
    const usernameAlreadyExists = await User.findOne({ username: userDetails?.form?.username });

    if (emailAlreadyExists) {
      return NextResponse.json({
        success: false,
        message: "User already exists.Please try with different Email",
      });
    } else if (usernameAlreadyExists) {
      return NextResponse.json({
        success: false,
        message: "User already exists.Please try with different Username",
      });
    } else {
      const hashPassword = await hash(userDetails?.form?.password, 12);

      const newlyCreatedUser = await User.create({
        name: userDetails?.form?.name,
        email: userDetails?.form?.email,
        username: userDetails?.form?.username,
        password: hashPassword,
        image: userDetails?.image,
        role: userDetails?.form?.role
      });

      if (newlyCreatedUser) {
        return NextResponse.json({
          success: true,
          message: "Account created successfully.",
        });
      }
    }
  } catch (error) {
    console.log("Error while new user registration. Please try again");

    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again later",
    });
  }
}
