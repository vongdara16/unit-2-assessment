import mongoose from "mongoose";

const Schema = mongoose.Schema

const bookSchema = new Schema({
  name: String,
  isRead: false
})

const Book = mongoose.model('Book', bookSchema)

export{
  Book
}