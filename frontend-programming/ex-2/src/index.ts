import { loadCSV } from './components/CSVLoader';
import { renderTable } from './components/TableRenderer';

loadCSV('/data.csv')
  .then((data) => renderTable(data))
  .catch((error) => console.error('Error loading CSV:', error));
