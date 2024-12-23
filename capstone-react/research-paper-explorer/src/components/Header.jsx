import React from "react";

const Header = ({ onSearch }) => (
  <header className="header">
    <h1>Research Papers Explorer</h1>
    <input
      type="text"
      placeholder="Search research papers..."
      onChange={(e) => onSearch(e.target.value)}
    />
  </header>
);

export default Header;
