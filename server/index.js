import express from "express";
import { config } from "dotenv";
import cors from "cors";
import helmet from "helmet";
import logger from "morgan";
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";
import connectDB from "./config/db.js";

config({ path: "./config/.env" });
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
//double check doc
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(logger("dev"));
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
  connectDB();
});
