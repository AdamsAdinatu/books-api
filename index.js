const express = require("express");
const dotenv = require("dotenv");
const router=require("./routes/booksRoute")
const logger = require("express")
const books =require("./books")

dotenv.config();
const app =express();
//middleware

app.use(express.json());
app.use(logger);
//route
app.get("/",(req,res) =>{
    res.send("Welcome to our library stockpile")
})

// get all books
app.get("/books",(req,res) =>{
    res.json(books);
});



const PORT =process.env.PORT ||5000

app.listen(PORT,() => 
     console.log(`server is running on ${PORT}`))
