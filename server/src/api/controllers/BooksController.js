import BookModel from "../models/BookModel.js";

class BookController {
      async getBook(req, res) {
        try {
            const id = req.params.id;
            const book = await BookModel.findById(id);
            res.status(200).json(
                {
                    book,
                    message: "Book successfully received"
                }
            );

        } catch (err) {
            res.status(500).json({ message: "Server error", error: err });
        }
    }
    
    async updateBook (req, res) {
        try {
            const id = req.params.id;
            const { title, author, publishYear } = req.body;
            
            if (!title || !author || !publishYear) {
                return res.status(400).json({ message: "Some fields are missing" });
            }

            const bookFields = {
                title,
                author,
                publishYear
            };

            /*const book = await BookModel.findById(id);
            
            if (!book) {
                return res.status(403).json(
                    { message: "Book with such ID is not found" }
                );
            }
            
            const updatedBook = await BookModel.findOneAndUpdate({_id: id}, bookFields);
            
            res.status(200).json({ updatedBook, message: "Book successfully updated" });
            */
            
            const updatedBook = await BookModel.findOneAndUpdate({ _id: id }, bookFields);
            
            if (!updatedBook) { //book does not exist
                return res.status(403).json(
                    { message: "Book with such ID is not found" }
                );
            }
            
            res.status(200).json({ updatedBook, message: "Book successfully updated" });
            
        } catch (err) {
            console.log(err);
            res.status(500).json(
                { 
                    message: "Server error", error: err 
                }
            );
        }
    }
    
    async getAllBooks (req, res) {
        try {
            const books = await BookModel.find({});
            res.status(200).json({ 
                count: books.length,
                books, 
                message: "Books successfully received"
                });
            
        } catch(err) {
            res.status(500).json({ message: "Server error", error: err });
        }
        
    }
  
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

            const book = await BookModel.create(bookFields);
            
            res.status(201).json({ book, message: "Book successfully created" })

        } catch (err) {
            res.status(500).json({ message: "Server error", error: err });
        }
    }
}


export default new BookController;