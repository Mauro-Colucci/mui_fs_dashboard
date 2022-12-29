import mongoose from "mongoose";
/* just for seeding purposes
import User from "../models/User.js";
import { dataUser } from "../data/index.js"; */

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    const conn = await mongoose.connect(process.env.MONGO_URL);
    /* just for seeding purpose
    User.insertMany(dataUser); */
    console.log(`connected to ${conn.connection.name} DB`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;
