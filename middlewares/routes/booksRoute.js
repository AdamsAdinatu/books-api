const {Router} =require("express")
const {getBooks} =require("../controllers/bookscontrollers")

const route =Router()

Router.route("/books").get(getBooks)

module.exports=router