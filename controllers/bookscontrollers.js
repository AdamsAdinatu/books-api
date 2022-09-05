import books from ("../books")


//get allbooks
const getbooks =(req, res) => {
    res.status(200).json(books);
}
module.exports={getBOOKS}