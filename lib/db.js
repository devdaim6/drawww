import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "drawww",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
};

export default connectToDB;