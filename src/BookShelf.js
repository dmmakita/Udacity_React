import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import BooksGrid from './BooksGrid'

const BookShelf = (props) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <BooksGrid books={props.books}
                           changeBookShelf={props.changeBookShelf} />
            </div>
        </div>
    )
}

export default BookShelf