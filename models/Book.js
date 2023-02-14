const mongoose = require("mongoose");
const BookSchema = new mongoose.Schema({
    title: { type: String },
    pages: { type: Number },
    authors: [{ type: String }],
});
module.exports = mongoose.model("Book", BookSchema, "MyBooksCollection");
