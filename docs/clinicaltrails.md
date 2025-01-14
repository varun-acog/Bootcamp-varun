# ASSIGNMENT-3 (PART-1): CLINICAL TRAILS TABLE

## Problem Definition
The goal of this project is to create a web interface that fetches and displays clinical trial data from the ClinicalTrials.gov API in a tabular format. When a user searches for a disease or condition, the application should allow filtering by parameters like study title, NCT ID, status, intervention, sponsor, and a year range. The output should mimic the table style in the provided image.

## Users
* Researchers: To find clinical trials related to their field of study.
* Medical Professionals: To access relevant studies for clinical insights.
* Patients or Caregivers: To explore ongoing or completed trials for specific conditions.
* Regulatory Bodies: To monitor the progress of clinical trials.
* Usage: Users enter a disease or condition and apply filters for customized results.

## Plan
Breakdown of the Problem:
* Data Retrieval: Fetch clinical trials from the ClinicalTrials.gov API based on a user-provided condition or disease.
* Filter Implementation: Include filters for year range, status, sponsor, and interventions.
* UI Design: Display the data in a responsive table format.
* Search Optimization: Add support for synonyms and similar terms to enhance search results.
  
## Development Steps:
* Version 0: Fetch and display data for a hardcoded disease without filters.
* Version 1: Add user input for disease searches and a basic table UI.
* Version 2: Include filtering functionality (status, year range, sponsor, etc.).
* Version 3: Finalize the UI with pagination, sorting, and export options (e.g., CSV).
## Milestones:
API integration for fetching disease-specific data.
Development of a user-friendly table UI.
Implementation of filters for parameters and year range.
Final testing and deployment.

## Exit Criteria
The project is considered complete when:
Users can search for a disease and retrieve results from the ClinicalTrials.gov API.
Filters (status, year range, sponsor, interventions) work as intended.
The table matches the visual and functional standards shown in the provided image.
The application passes functional and usability tests.

## Project Deliverables
* Executables:
A deployed web application or downloadable package.
* Documentation:
API usage guide and endpoints.
User guide for navigating the application and applying filters.
Developer guide for extending the application.
* Source Code:
Hosted on a version control platform like GitHub.
* Test Cases:
Unit tests and integration tests for API calls and filters.

