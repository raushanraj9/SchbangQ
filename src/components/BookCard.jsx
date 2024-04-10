import React from "react";
// import "./BookCard.css";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.coverImage} alt={book.title} />
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <p>{book.rating} ★</p>
    </div>
  );
};

export default BookCard;