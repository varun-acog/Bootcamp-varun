import { GridOptions } from "ag-grid-community"; // Use import instead of require
import { createGrid } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ModuleRegistry } from "ag-grid-community";
import { ClientSideRowModelModule } from "ag-grid-community";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

export function renderTable(data: any[]): void {
  const gridOptions: GridOptions = {
    columnDefs: Object.keys(data[0]).map((key) => ({ field: key })),
    rowData: data,
    pagination: true,
    paginationPageSize: 10,
    defaultColDef: {
      flex: 1,
    },
  };

  const app = document.getElementById("app");
  if (app) {
    app.innerHTML = "";
    const gridDiv = document.createElement("div");
    console.log(gridDiv);

    gridDiv.className = "ag-theme-alpine";
    gridDiv.style.height = "500px";
    app.appendChild(gridDiv);
    createGrid(gridDiv, gridOptions);
  }
}
