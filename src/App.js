import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList'
import SearchBooks from "./SearchBooks";
import * as BooksAPI from "./BooksAPI"


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    searchBooks: [],
    showSearchPage: true
  };
  componentDidMount = () => {
      BooksAPI.getAll()
          .then((books) => {
              this.setState(() => ({
                  books
              }))
          })
  }

  removeFromCurrentlyReading = (book) => {
      this.setState((currentState) => ({
          currentlyReading: currentState.currentlyReading.filter((b) => {
              return b.id !== book.id
          })
      }))};

  changeBookShelf = (book, newShelf) => {
      if(book) {
          BooksAPI.update(book, newShelf);


          let update = [];
          update = this.state.books.filter(b => b.id !== book.id)
          if (newShelf !== 'none') {
              book.shelf = newShelf;
              update = update.concat(book)
          }

          this.setState({
              books: update
          })
      }
  }



  render() {
    return (
      <div className="app">
          <p>{JSON.stringify(this.state.allBooks)}</p>
        {this.state.showSearchPage ? (
          <SearchBooks/>
        ) : (
              <BookList books={this.state.books} changeBookShelf={this.changeBookShelf}/>
        )}
      </div>
    )
  }
}

export default BooksApp
