import React from "react";
import { useParams } from "react-router-dom";
import { BookContext } from "../context/BookContext";
// import "./DetailView.css";

const DetailView = () => {
  const { bookId } = useParams();
  const [book, setBook] = useContext(BookContext);

  useEffect(() => {
    const fetchBook = async () => {
      const response = await fetch("https://d1krvzwx5oquy1.cloudfront.net/books.json");
      const data = await response.json();
      const selectedBook = data.find((book) => book.id === parseInt(bookId));
      setBook(selectedBook);
    };

    fetchBook();
  }, [bookId]);

  return (
    <div className="detail-view">
      <img src={book.coverImage} alt={book.title} />
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <p>{book.rating} ★</p>
      <p>{book.description}</p>
    </div>
  );
};

export default DetailView;