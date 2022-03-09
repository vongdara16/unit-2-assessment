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

function newBook(req, res){
  console.log('add a new book')
  res.render('books/new', {
    title: 'Add a Book'
  })
}

function create(req, res){
  console.log('creating a new book')
  Book.create(req.body)
  .then(book => {
    res.redirect('/books')
  })
  .catch(err =>{
    console.log(err)
    res.redirect('/books')
  })
}

export{
  index,
  newBook as new,
  create,
}