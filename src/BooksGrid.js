import React, { Component } from 'react'
import Book from "./Book";
import BookShelf from "./BookShelf";
// import PropTypes from 'prop-types'


const BooksGrid = (props) => {
    return(
        <ol className="books-grid">
            {props.books && props.books.map((book) => (
                <li key={book.id} >
                    <Book book={book}
                          changeBookShelf={props.changeBookShelf} />

                </li>
            ))}

        </ol>
    )
}

export default BooksGrid
