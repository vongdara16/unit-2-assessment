import { Book } from "../models/book.js";

function index(req, res){
  console.log('book index view')
  res.render('books/index')
}

export{
  index
}