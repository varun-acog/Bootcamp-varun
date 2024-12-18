import Papa from 'papaparse';

export function loadCSV(filePath: string): Promise<any[]> {
  return new Promise((resolve, reject) => {
    Papa.parse(filePath, {
      download: true,
      header: true,
      complete: (results) => resolve(results.data),
      error: (error) => reject(error),
    });
  });
}
