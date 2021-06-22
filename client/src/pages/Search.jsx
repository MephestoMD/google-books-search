import React, { Component } from "react";

class Search extends Component {
  state = { books: [] };
  render() {
    return (
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">(React) Google Books Search</h1>
          <p class="lead">
            Search and save books from the Google Books API using the form
            below.
          </p>
        </div>
      </div>
    );
  }
}

export default Search;
