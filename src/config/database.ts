import mongoose from "mongoose";

export const connectToDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection to the database is established");
  } catch (error) {
    console.error("Failed to connect to the database: ", error);
    process.exit(1);
  }
};
