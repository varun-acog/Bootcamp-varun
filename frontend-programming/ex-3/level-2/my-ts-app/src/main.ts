import { loadCSV } from './components/CSVLoader';
import { renderTable } from './components/TableRenderer';

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const data = await loadCSV('/students.csv');
    renderTable(data);
  } catch (error) {
    console.error('Error loading or rendering data:', error);
  }
});
