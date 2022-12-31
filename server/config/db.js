import mongoose from "mongoose";

//just for seeding purposes
/* import User from "../models/User.js";
import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
import Transaction from "../models/Transaction.js";
import OverallStat from "../models/OverallStat.js";
import AffiliateStat from "../models/AffiliateStat.js";
import {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
  dataAffiliateStat,
} from "../data/index.js"; */

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    const conn = await mongoose.connect(process.env.MONGO_URL);

    /* just for seeding purposes
    User.insertMany(dataUser);
    Product.insertMany(dataProduct);
    ProductStat.insertMany(dataProductStat); 
    Transaction.insertMany(dataTransaction);
    OverallStat.insertMany(dataOverallStat);
    AffiliateStat.insertMany(dataAffiliateStat);*/
    console.log(`connected to ${conn.connection.name} DB`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;
