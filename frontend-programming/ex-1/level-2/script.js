import { loadStudentData } from './data-loader.js';
import { renderTable } from './table-renderer.js';

async function initializeDashboard() {
    const data = await loadStudentData();
    renderTable(data);
}

initializeDashboard();
