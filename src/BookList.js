import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'


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
                                   changeBookShelf={this.props.changeBookShelf}
                                   whichShelf={this.props.whichShelf}/>

                        <BookShelf books={this.props.books.filter((book) => {
                            return book.shelf === "wantToRead"
                        })}
                                   title="Want to Read"
                                   changeBookShelf={this.props.changeBookShelf}
                                   whichShelf={this.props.whichShelf}/>

                        <BookShelf books={this.props.books.filter((book) => {
                            return book.shelf === "read"
                        })}
                                   title="Read"
                                   changeBookShelf={this.props.changeBookShelf}
                                   whichShelf={this.props.whichShelf}/>

                    </div>

                </div>
                <div className="open-search">
                    <Link
                        to='/search'
                    >
                        <button >Add a book</button>
                    </Link>

                </div>
            </div>
        )
    }
    currentlyReading = this.props.books.filter(book => book.shelf === "currentlyReading");
}

export default BookList