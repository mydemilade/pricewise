import mongoose from "mongoose";

let isConnected = false; // variable to track the connection status

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (!process.env.MONGODB_URI) {
    console.log('MONGODB_URI is not defined');
    return; // You should return here to exit the function if MONGODB_URI is not defined.
  }

  if (isConnected) {
    console.log('=> Using existing database connection');
    return; // Also, return here to exit the function if already connected.
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);

    isConnected = true;
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error);
  }
};
