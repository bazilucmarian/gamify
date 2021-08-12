import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const MONGO_URI = `mongodb+srv://bazilucmarian:${process.env.MONGO_PASSWORD}@gamify-cluster.7dq9w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
export const connectDB = async () => {
  try {
    const connectToDatabase = await mongoose.connect(MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(
      `Mongodb Connected : ${connectToDatabase.connection.host}`.cyan.underline
    );
  } catch (error) {
    console.log(`Error - ${error.message}`.red.underline.bold);
  }
};
