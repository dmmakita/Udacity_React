import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import BookShelf from './BookShelf'



class BookList extends Component {



    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>

                        <BookShelf books={this.props.books.filter((book) => {
                            return book.shelf === "currentlyReading"
                        })}
                                   title="Currently Reading"
                                   changeBookShelf={this.props.changeBookShelf} />

                        <BookShelf books={this.props.books.filter((book) => {
                            return book.shelf === "wantToRead"
                        })}
                                   title="Want to Read"
                                   changeBookShelf={this.props.changeBookShelf} />

                        <BookShelf books={this.props.books.filter((book) => {
                            return book.shelf === "read"
                        })}
                                   title="Read"
                                   changeBookShelf={this.props.changeBookShelf} />

                    </div>

                </div>
                <div className="open-search">
                    <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
                </div>
            </div>
        )
    }
    currentlyReading = this.props.books.filter(book => book.shelf === "currentlyReading");
}

export default BookList