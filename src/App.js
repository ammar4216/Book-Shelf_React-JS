import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import BookShelves from "./components/Books/BookShelves";
import Search from "./components/Pages/Search";
import SearchButton from "./components/Layout/SearchButton";
import * as BookAPI from "./components/API/BooksAPI";
import "./App.css";

const App = () => {
  // const [showSearchPage, setShowSearchPage] = useState(false);
  const [books, setBooks] = useState([]);

  // const searchPageUpdate = (state) => {
  //   setShowSearchPage(state);
  // };

  useEffect(() => {
    BookAPI.getAll().then((res) => {
      console.log(res);
      setBooks(res);
    });
  }, []);

  const changeBookShelfHandler = (book, shelf) => {
    BookAPI.update(book, shelf).then(() => {
      BookAPI.getAll().then((res) => {
        setBooks(res);
      });
    });
  };

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <div className="list-books">
                <Navbar />
                <BookShelves
                  books={books}
                  changeBookShelf={changeBookShelfHandler}
                />
                <SearchButton />
              </div>
            )}
          />

          <Route
            exact
            path="/search"
            render={() => (
              <Search changeBookShelf={changeBookShelfHandler} books={books} />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
