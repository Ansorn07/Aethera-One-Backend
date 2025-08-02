import mongoose from "mongoose";
import { logger } from "./logger";

const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://babjirakhi123:nRzeMreEwhmeNZTQ@aethera-one.nxeaeg9.mongodb.net/Aethera-one?retryWrites=true&w=majority&appName=Aethera-One";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    logger.info("Connected to MongoDB Atlas");
  } catch (error) {
    logger.error("MongoDB connection error:", error);
    process.exit(1);
  }
};