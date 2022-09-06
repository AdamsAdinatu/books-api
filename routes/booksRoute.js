const {Router} =require("express")
const {getBooks} =require("../controllers/Bookscontrollers")
const auth = require("../middlewares/books.auth")
const router =Router()


router.route("/books").get(getBooks)
router.delete("/books/:tittle",deleteBook)

module.exports=router