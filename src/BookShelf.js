import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import BooksGrid from './BooksGrid'

const BookShelf = () => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
                <BooksGrid/>
            </div>
        </div>
    )
}

export default BookShelf