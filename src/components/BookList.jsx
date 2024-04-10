// import React from "react";
// import BookCard from "./BookCard";
// // import "./BookList.css";

// const BookList = ({ books }) => {
//   return (
//     <div className="book-list">
//       {books.map((book) => (
//         <BookCard key={book.id} book={book} />
//       ))}
//     </div>
//   );
// };

// export default BookList;

import React from 'react';

const BookList = ({ books }) => {
  return (
    <div>
      {books.map(book => (
        <div key={book.id}>
          <img src={book.coverImage} alt={book.title} />
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Rating: {book.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
