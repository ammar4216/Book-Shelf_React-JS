import React from "react";
import SearchPage from "./SearchPage";

function Search(props) {
  const changeShelf = (book, shelf) => {
    props.changeBookShelf(book, shelf);
  };
  return (
    <div>
      <SearchPage
        changeShelf={changeShelf}
        changeBookShelf={props.changeBookShelfHandler}
        books={props.books}
      />
    </div>
  );
}

export default Search;
