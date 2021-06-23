import React, { Component } from "react";
import SavedJumbo from "../components/savedJumbo";
import SavedCard from "../components/SavedCard/SavedCard";
import API from "../utils/API";

class Saved extends Component {
  state = { books: [] };

  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
    API.getBooks().then((res) => this.setState({ books: res.data }));
  };

  handleDelete = (id) => {
    API.deleteBook(id)
      .then(() => this.getSavedBooks())
      .catch((err) => console.log(err));
  };

  render() {
    console.log(this.state.books);
    const { books } = this.state;
    return (
      <>
        <SavedJumbo />
        <div className="fluid container">
          {books.length ? (
            books.map((book) => (
              <SavedCard
                key={book._id}
                onDelete={this.handleDelete}
                book={book}
              />
            ))
          ) : (
            <h1>No books to display</h1>
          )}
        </div>
      </>
    );
  }
}

export default Saved;
