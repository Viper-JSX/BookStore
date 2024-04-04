import express from "express";
import path from "path";
import bodyParser from "body-parser";
import cors from "cors";
import BookRouter from "./routes/BookRouter.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/books", BookRouter);



export default app;