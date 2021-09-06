import { challengesList, usersChallenges } from "./data/challenges";
import { challengeModel as Challenge } from "./models/challenge-model";
import { userChallengesModel as UserChallenges } from "./models/user-challenges-model";
import { productModel as Product } from "./models/product-model";
import { userModel as User } from "./models/user-model";
import { users } from "./data/users";
import colors from "colors";
import { connectDB } from "./config/db";
import { productsList } from "./data/products";

//connect to MongoDB backend
connectDB();
colors.enable();
const importDataToMongo = async () => {
  try {
    await Challenge.deleteMany();
    // await User.deleteMany();
    await Product.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const sampleChallenges = challengesList.map((challenge) => ({
      ...challenge,
      userId: adminUser,
    }));

    const sampleProducts = productsList.map((eachProduct) => ({
      ...eachProduct,
      userId: adminUser,
    }));
    await Challenge.insertMany(sampleChallenges);
    await Product.insertMany(sampleProducts);
    console.log("Data were successfully imported ✅✅");
  } catch (error) {
    console.error(`${error.message}`.red.inverse);
    process.exit(1);
  }
};

const destroyDataFromMongo = async () => {
  try {
    await Challenge.deleteMany();
    await User.deleteMany();
    await UserChallenges.deleteMany();

    console.log(`Data destroyed !!`.red.inverse);
  } catch (error) {
    console.error(`${error.message}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyDataFromMongo();
} else {
  importDataToMongo();
}
