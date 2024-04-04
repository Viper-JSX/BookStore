import { Router } from "express";
import BookController from "../controllers/BookController.js";

const BookRouter = new Router();

BookRouter
.get("/", (req, res) => res.json({"p": "2"}))
.get("/", BookController.getAllBooks)
.get("/:id", BookController.getBook)
.post("/create", BookController.create)
.put("/:id/update", BookController.updateBook);

export default BookRouter;