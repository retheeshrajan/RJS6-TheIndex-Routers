import React, { Component } from "react";

// Components
import SearchBar from "./SearchBar";
import BookTable from "./BookTable";

class BookList extends Component {
  state = {
    filteredBooks: this.props.books
  };

  filterBooks = query => {
    query = query.toLowerCase();
    let filteredBooks = this.props.books.filter(book =>
      book.title.toLowerCase().includes(query)
    );
    this.setState({ filteredBooks: filteredBooks });
  };

  filterColor = bookColor => {
    return this.state.filteredBooks.filter(book => book.color === bookColor);
  };

  //   make sure not to have setState inside render, will result in infinit loop
  render() {
    const color = this.props.match.params.bookColor;
    let books = this.state.filteredBooks;
    if (color) {
      books = this.filterColor(color);
    }
    return (
      <div>
        <h3>Books</h3>
        <SearchBar onChange={this.filterBooks} />
        <BookTable books={books} />
      </div>
    );
  }
}

export default BookList;
