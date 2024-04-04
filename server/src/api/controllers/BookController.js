import BookModel from "../models/BookModel.js";

class BookController {
    async create (req, res) {
        try {
            const { title, author, publishYear } = req.body;
          
            if (!title || !author || ! publishYear) {
                return res.status(400).json({ message: "Some fields are missing" });
            }

            const bookFields = {
                title,
                author,
                publishYear
            };

            const book = BookModel.create(bookFields);
            
            res.status(201).json({ book, message: "Book successfully created" })

        } catch (err) {
            res.status(500).json({ message: "Server error", error: err });
        }
    }
}


export default new BookController;