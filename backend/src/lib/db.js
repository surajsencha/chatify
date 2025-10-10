import mongoose from "mongoose";
export const connectDB = async (url) => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("Database connected :", conn.connection.host);
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); //1 status code means failure,0 means success
  }
};
