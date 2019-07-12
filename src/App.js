import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList'
import SearchBooks from "./SearchBooks";
import * as BooksAPI from "./BooksAPI"
import { Route } from 'react-router-dom'


class BooksApp extends React.Component {
    state = {
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        books: [],
    };
    componentDidMount = () => {
        BooksAPI.getAll()
            .then((books) => {
                this.setState(() => ({
                    books
                }))
            })
    };


    whichShelf = (book) => {
        let searchBook = this.state.books.find(b => b.id === book.id);
        if (searchBook) {
            return searchBook.shelf
        }
        else{
            return "none"
        }

    };

    changeBookShelf = (book, newShelf) => {
        if(book) {
            console.log("Atualizando livro: " + book.title);
            BooksAPI.update(book, newShelf);

            let update = this.state.books.filter(b => b.id !== book.id);
            if (newShelf !== 'none') {
                book.shelf = newShelf;
                update = update.concat(book)
            }

            this.setState({
                books: update
            })
        }
    };



    render() {
        return (
            <div className="app">
                <Route path='/search' render={() => (
                    <SearchBooks
                        changeBookShelf={this.changeBookShelf}
                        whichShelf={this.whichShelf}
                    />
                )}
                />
                <Route exact path='/' render={() => (
                    <BookList
                        books={this.state.books}
                        changeBookShelf={this.changeBookShelf}
                        whichShelf={this.whichShelf}
                    />
                )}
                />

            </div>
        )
    }
}

export default BooksApp
