import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import colors from "colors";
import { connectDB } from "./config/db";
import { errorHandler, notFound } from "./middlewares/error-middleware";
import userRoutes from "./routes/user-routes";
import authRoutes from "./routes/auth-routes";
import challengesRoutes from "./routes/challenge-routes";
import userChallengesRoutes from "./routes/user-challenges-routes";
import shoppingCartRoutes from "./routes/shopping-cart-routes";
import shopRoutes from "./routes/product-routes";
dotenv.config();
//enable colors for console messages
colors.enable();
//connect to MongoDB backend
connectDB();

//initialize express app
const app = express();
app.use(express.json());
app.use(cors());

// routes link with router
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/challenges", challengesRoutes);
app.use("/api/user-challenges", userChallengesRoutes);
app.use("/api/shop", shopRoutes);
app.use("/api/cart", shoppingCartRoutes);

//options for deploying to heroku
const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("gamify/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "gamify", "build", "index.html")); // relative path
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

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
