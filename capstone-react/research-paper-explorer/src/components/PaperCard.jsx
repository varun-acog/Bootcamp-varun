import React, { useState } from "react";

const PaperCard = ({ paper }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => setIsExpanded(!isExpanded);

  return (
    <div className="card">
      <h3 className="title">{paper.title}</h3>
      <p className="author"><strong>Author:</strong> {paper.authors}</p>
      <p><strong>Venue:</strong> {paper.venue}</p>
      <p><strong>Year:</strong> {paper.year}</p>
      <p><strong>ID:</strong> {paper.id}</p>
      <p>
        {isExpanded ? paper.abstract : `${paper.abstract.slice(0, 100)}...`}
        <span className="read-more" onClick={toggleReadMore}>
          {isExpanded ? "Read less" : "Read more"}
        </span>
      </p>
    </div>
  );
};

export default PaperCard;
