import React from "react";

const BookFilter = ({ onFilter }) => {
  const filters = ["all", "fiction", "non-fiction", "history", "biography"];

  return (
    <div className="book-filter">
      {filters.map((filter) => (
        <button key={filter} onClick={() => onFilter(filter)}>
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default BookFilter;