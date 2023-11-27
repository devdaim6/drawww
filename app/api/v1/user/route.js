import connectMongoDB from "@/lib/db";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function PATCH(req) {

  const { username } = await req.json()

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

    user.isloggedin = false;
    await user.save();

    return NextResponse.json({
      success: true,
      message: "User Login Status Updated",

      status: 201,
    })

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "An error occurred while Logging Out.",
      status: 500,
    });
  }
}



export async function POST(req) {
  const { image, username } = await req.json()

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
    const updateUser = await User.findOneAndUpdate({ username: username },
      {
        $set: {
          image: image,
        }
      });



    return NextResponse.json({
      success: true,
      message: "User Image Updated",
      status: 200,
    })

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "An error occurred while Updating User Profile Picture.",
      status: 500,
    });
  }
}
