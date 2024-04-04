import { Router } from "express";
import BookController from "../controllers/BookController.js";

const BookRouter = new Router();

BookRouter
.get("/", (req, res) => res.json({"p": "2"}))
.post("/create", BookController.create);

export default BookRouter;