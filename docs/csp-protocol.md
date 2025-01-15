# Assignment-4: Crystal Structure Prediction (CSP) Protocol-Algorithm UI Documentation

## **Problem Definition**
To build UI for Crystal Structure Prediction (CSP), which is an essential computational process used to explore and evaluate the potential structures of molecular crystals. This project aims to create an application that aids researchers in three critical CSP steps:

1. **3D Conformation Search**: Generate and visualize 3D cluster representatives of molecular conformers based on SMILES input.
2. **Sampling the Crystal Structure Landscape**: Generate and analyze candidate crystal structures while providing user-driven control over parameters such as methods, space groups, and molecular configurations.
3. **Preliminary Screening**: Rank candidate crystal structures using AI/ML models based on crystal density and lattice energy, while enabling visualization and comparison.

The application will feature a user-friendly interface with three tabs, supporting visualization, input parameter selection, and advanced analysis capabilities.

---

## **Users**
- **Researchers and Scientists**: Working in the fields of crystallography, computational chemistry, and materials science.
- **Industry Professionals**: Involved in drug discovery, materials design, and molecular engineering.
- **Academicians and Students**: Learning about CSP workflows and utilizing the tool for research projects.

Users interact with the application by:
1. Inputting molecular data (e.g., SMILES).
2. Choosing parameters for crystal structure sampling.
3. Visualizing and analyzing results such as 3D conformers, histograms, and lattice energy plots.

---

## **Plan**

### **Step 1: Initial Framework Development**
- **Milestone 1**: Create the base UI framework with three tabs for each CSP stage.
- **Milestone 2**: Integrate APIs for:
  - Generating 3D conformers.
  - Sampling crystal structures.
  - Running AI/ML models for preliminary screening.

### **Step 2: 3D Conformation Search**
- Implement the input form for SMILES strings.
- Display cluster representatives of the top 5 conformers using visualization libraries like nglview.

### **Step 3: Crystal Structure Landscape Sampling**
- Build input fields for parameters such as the number of candidates, method (PyXtal, Crystalmath, CDVAE), space group (Sg), and Z value.
- Display results in histogram format showing crystal densities.

### **Step 4: Preliminary Screening**
- Generate rank-ordered results in a table format with columns for CIF name, rank, and predicted lattice energy.
- Implement an interactive density vs lattice energy plot allowing users to click and visualize individual or overlayed structures.

### **Step 5: Enhancements**
- Enable toggling between visualization tools (nglview/ASE).
- Add overlay comparison for selected crystal structures.

### **Step 6: Testing and Debugging**
- Ensure data flow integrity across all tabs.
- Validate API integrations with test cases.

### **Step 7: Documentation and Deployment**
- Write user manuals and guides.
- Package and deploy the application for end-users.

---

## **Exit Criteria**
The project will be considered complete when:

1. Users can seamlessly perform all three CSP stages through the application.
2. The system reliably generates, visualizes, and ranks crystal structures.
3. The UI meets usability and accessibility standards.
4. Deliverables, including executables and documentation, are finalized and distributed.

---

## **Project Deliverables**

1. **Application Executables**: A fully functional CSP Protocol-Algorithm UI application.
2. **Technical Documentation**:
   - Installation and setup guide.
   - User guide detailing application features and workflows.
3. **Source Code**: Well-documented codebase with API integration.
4. **Test Cases**: Test scripts and results for validation of features and functionalities.
5. **Deployment Package**: Bundled application with dependencies for easy installation.
