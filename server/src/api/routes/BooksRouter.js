import { Router } from "express";
import BooksController from "../controllers/BooksController.js";

const BookRouter = new Router();

BookRouter
.get("/", (req, res) => res.json({"p": "2"}))
.get("/", BooksController.getAllBooks)
.get("/:id", BooksController.getBook)
.post("/create", BooksController.create)
.put("/:id/update", BooksController.updateBook);

export default BookRouter;