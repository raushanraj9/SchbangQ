// import React, { useContext, useEffect, useState } from "react";
// import { BookContext } from "./context/BookContext";
// import BookList from "./components/BookList";
// import BookFilter from "./components/BookFilter";
// // import "./App.css";

// const App = () => {
//   const [books, setBooks] = useContext(BookContext);
//   const [filteredBooks, setFilteredBooks] = useState(books);

//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   const fetchBooks = async () => {
//     const response = await fetch("https://d1krvzwx5oquy1.cloudfront.net/books.json");
//     const data = await response.json();
//     setBooks(data);
//     setFilteredBooks(data);
//   };

//   const handleFilter = (filter) => {
//     if (filter === "all") {
//       setFilteredBooks(books);
//     } else {
//       setFilteredBooks(books.filter((book) => book.genre === filter));
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Book Explorer</h1>
//       <BookFilter onFilter={handleFilter} />
//       <BookList books={filteredBooks} />
//     </div>
//   );
// };

// export default App;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookList from './components/BookList';
import Filter from './components/Filter';

const App = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://d1krvzwx5oquy1.cloudfront.net/books.json');
        setBooks(response.data);
        setFilteredBooks(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchBooks();
  }, []);

  const handleFilter = (filterType, value) => {
    if (filterType === 'genre') {
      const filtered = books.filter(book => book.genre === value);
      setFilteredBooks(filtered);
    } else if (filterType === 'author') {
      const filtered = books.filter(book => book.author === value);
      setFilteredBooks(filtered);
    }
  };

  return (
    <div>
      <h1>Book Explorer</h1>
      <Filter books={books} handleFilter={handleFilter} />
      <BookList books={filteredBooks} />
    </div>
  );
};

export default App;
