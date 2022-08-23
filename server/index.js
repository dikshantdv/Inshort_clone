import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Connection from "./database/db.js";
import DefaultData from "./default.js";
import newsRouter from "./routes/newsRouter.js";

const app = express();
dotenv.config();
app.use(cors());
app.use("/", newsRouter);

Connection();

app.listen(process.env.PORT, () => {
  console.log(`Server started successfully on port ${process.env.PORT}`);
});

DefaultData();
