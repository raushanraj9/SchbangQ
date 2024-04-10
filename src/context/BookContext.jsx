import { createContext, useState } from "react";

const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  return (
    <BookContext.Provider value={[books, setBooks]}>
      {children}
    </BookContext.Provider>
  );
};

export { BookContext, BookProvider };