import React, { useEffect, useState } from "react";
import "./styles/styles.css";
import Header from "./components/Header";
import Filters from "./components/Filters";
import PaperCard from "./components/PaperCard";
import data from "./assets/data.json";

const App = () => {
  const [papers, setPapers] = useState([]);
  const [filteredPapers, setFilteredPapers] = useState([]);

  useEffect(() => {
    setPapers(data);
    setFilteredPapers(data);
  }, []);

  const handleSearch = (query) => {
    const lowerQuery = query.toLowerCase();
    const results = papers.filter((paper) =>
      Object.values(paper).some((value) =>
        value.toString().toLowerCase().includes(lowerQuery)
      )
    );
    setFilteredPapers(results);
  };

  const applyFilters = (filters) => {
    const { author, title, year } = filters;
    const results = papers.filter(
      (paper) =>
        (!author || paper.authors.toLowerCase().includes(author)) &&
        (!title || paper.title.toLowerCase().includes(title)) &&
        (!year || paper.year <= year)
    );
    setFilteredPapers(results);
  };

  const exportData = () => {
    const blob = new Blob([JSON.stringify(filteredPapers, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "filtered_papers.json";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="dark-theme">
      <Header onSearch={handleSearch} />
      <Filters onFilter={applyFilters} onExport={exportData} />
      <div className="cards">
        {filteredPapers.length > 0 ? (
          filteredPapers.map((paper) => (
            <PaperCard key={paper.id} paper={paper} />
          ))
        ) : (
          <p>No papers found</p>
        )}
      </div>
    </div>
  );
};

export default App;
