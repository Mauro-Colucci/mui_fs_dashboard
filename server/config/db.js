import mongoose from "mongoose";

/* just for seeding purposes
import User from "../models/User.js";
import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
import {dataUser,  dataProduct, dataProductStat } from "../data/index.js"; */

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    const conn = await mongoose.connect(process.env.MONGO_URL);

    /* just for seeding purposes
    await User.insertMany(dataUser);
    await Product.insertMany(dataProduct);
    await ProductStat.insertMany(dataProductStat); */
    console.log(`connected to ${conn.connection.name} DB`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;
