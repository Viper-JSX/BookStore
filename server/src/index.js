import dotenv from "dotenv";
import connectToDB from "./config/db.js";

import app from "./api/server.js";

const PORT = process.env.PORT || 1337;
 
dotenv.config(); //Allows to use variables defined in .env file


//redo into async/await, try/catch
connectToDB() //connect to the database
.then(() => {
    app.listen(PORT, () => console.log("Server is listening to", PORT));
})
.catch((err) => console.log("Cannot connect"));

