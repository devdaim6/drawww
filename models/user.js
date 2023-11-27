import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: [true, "Email is Already Taken"] },
  username: { type: String, unique: [true, "Username is Already Taken"] },
  password: String,
  image: String,
  isVerified: { type: Boolean, default: false },
  isloggedin: {
    type: Boolean,
    default: false,
  },
  lastLoggedInTime: {
    type: Date,
  },
  role: { type: String }
},
  { timestamps: true });


const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
