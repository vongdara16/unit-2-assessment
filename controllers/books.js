import { Book } from "../models/book.js";

function index(req, res){
  console.log('book index view')
  Book.find({})
  .then(books => {
    res.render('books/index', {
      title: 'Unit 2 Assesment',
      books,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/books')
  })
}

export{
  index
}