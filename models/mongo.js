const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/myTestDb");
mongoose.connect("mongodb://myUser:localhost:27017/myTestDb"); //schema
const BookSchema = new mongoose.Schema({
    title: { type: String },
    pages: { type: Number },
    authors: [{ type: String }],
});
//model
//const BookModel = mongoose.model("Book", BookSchema);
const BookModel = mongoose.model("Book", BookSchema, "BookCollection");

module.exports = mongoose.model("Book", BookSchema, "MyBooksCollection");
