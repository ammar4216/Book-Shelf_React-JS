import { Link } from "react-router-dom";
import React, { useState } from "react";
import * as BookAPI from "../API/BooksAPI";

function SearchPage({ books, changeShelf }) {
  const [search, setSearch] = useState([]);

  const onSearchPage = (query, res) => {
    if (query === "") {
      setSearch(() => {
        return [];
      });
    } else {
      BookAPI.search(query, res).then((books) => {
        console.log(books);

        if (books.error) {
          setSearch(() => {
            return [];
          });
        } else {
          setSearch(() => {
            return [...books];
          });
        }
      });
    }
  };

  const onCheckBookShelf = (id) => {
    const res = books.filter((book) => {
      return book.id === id;
    });

    if (res.length > 0) {
      return res[0].shelf;
    } else {
      return "Not Found";
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={(e) => {
              onSearchPage(e.target.value, 20);
            }}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {search.map((search) => {
            return (
              <li key={search.id}>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage:
                          search.imageLinks !== null &&
                          search.imageLinks !== 0 &&
                          search.imageLinks
                            ? `url(${search.imageLinks.thumbnail})`
                            : `url(//via.placeholder.com/128x192)`,
                      }}
                    />
                    <div className="book-shelf-changer">
                      <select
                        value={onCheckBookShelf(search.id)}
                        onChange={(e) => {
                          changeShelf(search, e.target.value);
                        }}
                      >
                        <option value="move" disabled>
                          Move to...
                        </option>
                        <option value="currentlyReading">
                          Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{search.title}</div>
                  <div className="book-authors">{search.authors}</div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default SearchPage;
