import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import colors from "colors";
import { connectDB } from "./config/db";
import { errorHandler, notFound } from "./middlewares/error-middleware";

dotenv.config();
//enable colors for console messages
colors.enable();
//connect to MongoDB backend
connectDB();

//initialize express app
const app = express();
app.use(express.json());
app.use(cors());

//test
app.get("/", (_, res) => {
  res.send("API IS RUNNING");
});

// errors for not found routes
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
