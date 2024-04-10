import React from 'react';

const Filter = ({ books, handleFilter }) => {
  const genres = [...new Set(books.map(book => book.genre))];
  const authors = [...new Set(books.map(book => book.author))];

  const handleGenreFilter = (e) => {
    handleFilter('genre', e.target.value);
  };

  const handleAuthorFilter = (e) => {
    handleFilter('author', e.target.value);
  };

  return (
    <div>
      <label>Filter by Genre:</label>
      <select onChange={handleGenreFilter}>
        <option value="">All Genres</option>
        {genres.map(genre => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>

      <label>Filter by Author:</label>
      <select onChange={handleAuthorFilter}>
        <option value="">All Authors</option>
        {authors.map(author => (
          <option key={author} value={author}>{author}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
