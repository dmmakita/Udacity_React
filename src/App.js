import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList'
import SearchBooks from "./SearchBooks";

// Enum for list names
const lists = {
  CURRENTLY_READING: "currentlyReading",
  WANT_TO_READ: "wantToRead",
  READ: "read",
  SEARCH: "search"
}

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    currentlyReading: [],
    wantToRead: [],
    read: [],
    showSearchPage: false
  };
  isCurrentlyReading = (book) => {

  };
  isWantToRead = (book) => {

  };
  isRead = (book) => {

  };
  whichList = (book) => {

  };
  removeFromCurrentlyReading = (book) => {
      this.setState((currentState) => ({
          currentlyReading: currentState.currentlyReading.filter((b) => {
              return b.id !== book.id
          })
      }))};
  removeFromWantToRead = (book) => {

  };
  removeFromRead = (book) => {

  };


  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks/>
        ) : (
              <BookList/>
        )}
      </div>
    )
  }
}

export default BooksApp
