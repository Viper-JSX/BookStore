import express from "express";
import path from "path";
import bodyParser from "body-parser";
import cors from "cors";
import BooksRouter from "./routes/BooksRouter.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/books", BooksRouter);



export default app;