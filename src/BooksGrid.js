import React, { Component } from 'react'
import Book from "./Book";
import BookShelf from "./BookShelf";
// import PropTypes from 'prop-types'


const BooksGrid = (props) => {
    return(
        <ol className="books-grid">
            {props.books.length>0 && props.books.map((book) => (
                <li key={book.id} >
                    <Book book={book}
                          changeBookShelf={props.changeBookShelf}
                          whichShelf={props.whichShelf}
                    />

                </li>
            ))}

        </ol>
    )
}

export default BooksGrid
