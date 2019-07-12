import React, { Component } from 'react'
import BooksGrid from "./BooksGrid";
import {debounce} from "lodash"
import * as BooksAPI from "./BooksAPI";
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class SearchBooks extends Component {
    state = {
        query: '',
        searchBooks: []
    };

    search = (queryTerm) => {
        console.log("search: " + queryTerm)
        if(queryTerm.length>0){
            BooksAPI.search(queryTerm)
                .then((searchBooks) => {
                    this.setState({searchBooks: searchBooks})
        })
                .catch(err => {
                    console.log(err);
                });}
        else{
            this.setState({searchBooks: []})
        }};

    updateQuery = (query) => {
        console.log("updateQuery: " + query)
        if (query.trim().length>0){
            this.search(query);
        }
        else {
            this.setState({searchBooks: []})
        }
        this.setState(() => ({
            query: query
        }));




    };


    render () {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        to='/'>
                        <button className="close-search">Close</button>
                    </Link>
                     <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            onChange={(event) => this.updateQuery(event.target.value)}
                            value={this.state.query}
                        />

                    </div>
                </div>
                <div className="search-books-results">
                    <BooksGrid
                        books={this.state.query.length>0?this.state.searchBooks:[]}
                        changeBookShelf={this.props.changeBookShelf}
                        whichShelf={this.props.whichShelf}
                    />
                </div>
            </div>
        )
    }
}

export default SearchBooks
