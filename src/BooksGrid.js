import React, { Component } from 'react'
import Book from "./Book";
// import PropTypes from 'prop-types'


const BooksGrid = () => {
    return(
        <ol className="books-grid">

            <li>
                <Book/>

            </li>
        </ol>
    )
}

export default BooksGrid
