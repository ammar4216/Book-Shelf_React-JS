import React from "react";
import PropTypes from "prop-types";

function BookShelf({ books, title, changeBookShelf }) {
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => {
              return (
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div
                        className="book-cover"
                        style={{
                          width: 128,
                          height: 193,
                          backgroundImage:
                            book.imageLinks !== null &&
                            book.imageLinks !== 0 &&
                            book.imageLinks
                              ? `url(${book.imageLinks.thumbnail})`
                              : `url(//via.placeholder.com/128x192)`,
                        }}
                      />
                      <div className="book-shelf-changer">
                        <select
                          value={book.shelf}
                          onChange={(e) => {
                            changeBookShelf(book, e.target.value);
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
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  changeBookShelf: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default BookShelf;
