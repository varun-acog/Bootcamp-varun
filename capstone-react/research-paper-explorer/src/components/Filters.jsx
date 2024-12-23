import React, { useState } from "react";

const Filters = ({ onFilter, onExport }) => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState(2023);

  const applyFilters = () => {
    onFilter({ author, title, year });
  };

  return (
    <section className="filters">
      <div className="filter-group">
        <label htmlFor="author-filter">Author</label>
        <input
          type="text"
          id="author-filter"
          placeholder="Filter by author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div className="filter-group">
        <label htmlFor="title-filter">Title</label>
        <input
          type="text"
          id="title-filter"
          placeholder="Filter by title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="filter-group">
        <label htmlFor="year-filter">Year Range</label>
        <input
          type="range"
          id="year-filter"
          min="2000"
          max="2023"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          onInput={applyFilters}
        />
        <span id="year-display">{year}</span>
      </div>
      <button onClick={onExport}>Export Filtered Data</button>
    </section>
  );
};

export default Filters;
