import React, { Component } from "react";
import SearchJumbo from "../components/searchJumbo";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard/BookCard";
import API from "../utils/API";

class Search extends Component {
  state = {
    books: [],
    searchQuery: "",
  };

  componentDidMount() {
    this.loadBooks();
  }

  handleSearch = (query) => {
    this.loadBooks();
    this.setState({ searchQuery: query });
  };

  loadBooks = () => {
    const { searchQuery } = this.state;
    console.log(searchQuery);
    if (searchQuery) {
      API.getGoogleBooks(searchQuery).then((res) =>
        this.setState({
          books: res.data.items.filter((x) => x.volumeInfo.authors),
        })
      );
    }
  };

  handleQueryData = () => {
    let { searchQuery } = this.state;
    return { searchQuery };
  };

  handleSave = (bookData) => {
    const { description, title, infoLink, authors, thumbnail } = bookData;
    console.log(thumbnail, description, title, infoLink, authors);
    API.saveBook({
      title: title,
      authors: authors,
      description: description,
      image: thumbnail,
      link: infoLink,
    })
      .then(() => this.loadBooks())
      .catch((err) => console.log(err));
  };

  render() {
    const { searchQuery } = this.handleQueryData();
    const { books } = this.state;
    // console.log(searchQuery);
    console.log(books);

    return (
      <>
        <SearchJumbo />
        <SearchBar value={searchQuery} onChange={this.handleSearch} />
        <div className="fluid container">
          {books.length ? (
            books.map((book) => (
              <BookCard onSave={this.handleSave} book={book} />
            ))
          ) : (
            <h1>No books to display</h1>
          )}
        </div>
      </>
    );
  }
}

export default Search;
