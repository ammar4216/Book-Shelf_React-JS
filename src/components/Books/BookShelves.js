import React from "react";
import BookShelf from "./BookShelf";

function BookShelves({ books, changeBookShelf }) {
  const currentlyReading = books.filter((book) => {
    return book.shelf === "currentlyReading";
  });

  const wantToRead = books.filter((book) => {
    return book.shelf === "wantToRead";
  });

  const read = books.filter((book) => {
    return book.shelf === "read";
  });

  return (
    <div className="list-books-content">
      <div>
        <BookShelf
          books={currentlyReading}
          title="Currently Reading"
          changeBookShelf={changeBookShelf}
        />
        <BookShelf
          books={wantToRead}
          title="Want To Read"
          changeBookShelf={changeBookShelf}
        />
        <BookShelf
          books={read}
          title="Read"
          changeBookShelf={changeBookShelf}
        />
      </div>
    </div>
  );
}

export default BookShelves;
