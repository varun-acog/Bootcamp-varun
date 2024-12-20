let papers = [];
let filteredPapers = [];

// Load data from the JSON file
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    papers = data;
    filteredPapers = papers;
    displayPapers(papers);
  })
  .catch((error) => console.error("Error loading data:", error));

// Display papers
function displayPapers(data) {
  const container = document.getElementById("cards-container");
  container.innerHTML = "";

  if (data.length === 0) {
    container.innerHTML = "<p>No papers found</p>";
    return;
  }

  data.forEach((paper) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const abstract = paper.abstract;
    const shortAbstract =
      abstract.length > 100 ? abstract.slice(0, 100) + "..." : abstract;

    card.innerHTML = `
      <h3 class="title">${paper.title}</h3>
      <p class="author"><strong>Author:</strong> ${paper.authors}</p>
      <p><strong>Venue:</strong> ${paper.venue}</p>
      <p><strong>Year:</strong> ${paper.year}</p>
      <p><strong>ID:</strong> ${paper.id}</p>
      <p>
        ${shortAbstract}
        <span class="read-more" onclick="toggleReadMore(this, '${abstract}')">Read more</span>
      </p>
    `;

    container.appendChild(card);
  });
}

// Toggle 'Read more' functionality
function toggleReadMore(element, fullText) {
  const isExpanded = element.textContent === "Read less";
  element.textContent = isExpanded ? "Read more" : "Read less";
  element.previousSibling.textContent = isExpanded
    ? fullText.slice(0, 100) + "..."
    : fullText;
}

// Search functionality
function handleSearch() {
  const query = document.getElementById("search").value.toLowerCase();
  filteredPapers = papers.filter((paper) =>
    Object.values(paper).some((value) =>
      value.toString().toLowerCase().includes(query)
    )
  );
  displayPapers(filteredPapers);
}

// Filter functionality
function applyFilters() {
  const authorFilter = document.getElementById("author-filter").value.toLowerCase();
  const titleFilter = document.getElementById("title-filter").value.toLowerCase();
  const yearFilter = document.getElementById("year-filter").value;

  filteredPapers = papers.filter(
    (paper) =>
      (!authorFilter || paper.authors.toLowerCase().includes(authorFilter)) &&
      (!titleFilter || paper.title.toLowerCase().includes(titleFilter)) &&
      (!yearFilter || paper.year <= yearFilter)
  );

  displayPapers(filteredPapers);
}

// Update year filter display
function updateYearFilter() {
  const year = document.getElementById("year-filter").value;
  document.getElementById("year-display").textContent = year;
  applyFilters();
}

// Export data
function exportData() {
  const blob = new Blob([JSON.stringify(filteredPapers, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "filtered_papers.json";
  link.click();
  URL.revokeObjectURL(url);
}
