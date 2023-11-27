import connectMongoDB from "@/lib/db";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
export async function GET(req, { params }) {

  const { username } = params

  try {
    await connectMongoDB();
    const user = await User.findOne({ username: username });
    if (!user) {
      return NextResponse.json({
        success: false,
        message: "No User Found",
        status: 403,
      });
    }



    return NextResponse.json({
      success: true,
      message: "User Found",
      user,
      status: 201,
    })

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "An error occurred while fetching User.",
      status: 500,
    });
  }
}

export async function PATCH(req, { params }) {
  const { updateData } = await req.json()
  const { username } = params

  try {
    await connectMongoDB();
    const user = await User.findOne({ username: username });
    if (!user) {
      return NextResponse.json({
        success: false,
        message: "No User Found",
        status: 403,
      });
    }
    const hashedPass = await bcrypt.hash(updateData?.password, 10)
    const updateUser = await User.findOneAndUpdate({ username: username },
      {
        $set: {
          name: updateData?.name,
          username: updateData?.username,
          email: updateData?.email,
          password: hashedPass,

        }
      });



    return NextResponse.json({
      success: true,
      message: "User Details Updated",
      status: 200,
    })

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "An error occurred while Updating User.",
      status: 500,
    });
  }
}
