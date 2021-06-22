import React, { Component } from "react";

class Search extends Component {
  state = { books: [] };
  render() {
    return (
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Saved Books</h1>
          <p class="lead">Save books below</p>
        </div>
      </div>
    );
  }
}

export default Search;
