# ASSIGNMENT-1: SCORE CARD APPLICATION
## Problem Definition
The project aims to develop a Score Card Application for evaluating protein candidates based on their developability attributes. It will:

Accept candidate data files (CSV/Excel).


Generate an interactive scorecard summarizing the evaluation of attributes (e.g., Hydrophobicity, Protein Strand Ratio) with color-coded indicators:
* Green: Within acceptable range.
* Yellow: Near boundary values.
* Red: Outside acceptable range.
Allow users to navigate to protein structure visualizations and interact with them using the Molstar library.


Additionally, an interactive menu bar will enable users to filter and adjust protein visualizations dynamically through dropdown options fetched from a JSON file.

## Users
* Bioinformatics Researchers: Evaluate candidate proteins for potential development.
* Pharmaceutical Scientists: Analyze and visualize protein structures for drug discovery.
* Data Scientists: Use scorecards and visualizations for advanced analysis.
* Stakeholders: Review reports and summaries of protein evaluations.

## Usage:

Upload candidate data.
Review the scorecard with visual indicators.
Navigate to protein visualizations and use interactive menus to analyze structures.
## Plan
Breakdown of the Problem

* Input Handling: Support CSV/Excel uploads and validate data for required attributes.
* Data Processing: Map attributes to ranges and assign color-coded scores.
* Visualization: Create an interactive scorecard and protein structure visualizations.
* Dynamic Menu Bar: Integrate dropdown menus populated from a JSON file.

## Development Steps
* Version 0 (MVP):

Build a basic input uploader for files.
Parse data and compute scores with static ranges.
Generate a static table displaying scores with color codes.
* Version 1:

Make the table interactive with click navigation to a protein structure page.
Integrate the Molstar library for basic protein visualization.
* Version 2:

Add support for dynamic dropdown menus populated via a JSON file.
Ensure menu interactions (e.g., filtering and display modes) reflect on the visualizations.
* Version 3:

Refine the UI/UX for scorecard and protein visualization pages.
Add tooltips, filters, and seamless navigation.
Optimize performance for large datasets.
## Milestones

Input uploader with validation.
Scorecard generation with dynamic attributes and color coding.
Protein visualization integration using the Molstar library.
Dynamic menu bar with dropdowns and interactive features.
## Exit Criteria
The project is complete when:

Users can upload candidate data files and generate scorecards with accurate color-coded evaluations.
Clicking on a score navigates seamlessly to the protein structure visualization page.
The menu bar on the visualization page dynamically updates based on JSON inputs and allows for filtering or adjusting protein properties.
All functionalities pass usability and performance tests.
## Project Deliverables
* Executables:
Web-based application or executable package.
* Documentation:
User guide for uploading data, reviewing scorecards, and navigating to protein visualizations.
Developer guide for extending the application, including adding attributes or JSON-based menu options.
* Source Code:
Hosted on a repository like GitHub with version control and CI/CD pipelines.
* Test Cases:
Comprehensive unit and integration tests for scorecard generation, menu interactions, and protein visualization features.
* API Integration:
API key management guide for accessing protein structure data.
