import axios from "axios";

export default {
  // Gets all books matching query from Google Books API
  getGoogleBooks: function (queryBook) {
    return axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${queryBook}`
    );
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (id) {
    return axios.post("/api/books/" + id);
  },
};
