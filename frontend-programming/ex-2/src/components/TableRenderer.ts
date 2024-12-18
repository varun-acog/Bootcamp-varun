export function renderTable(data: any[]): void {
  const app = document.getElementById('app');
  if (!app) return;

  const table = `
    <table border="1">
      <thead>
        <tr>
          ${Object.keys(data[0])
            .map((key) => `<th>${key}</th>`)
            .join('')}
        </tr>
      </thead>
      <tbody>
        ${data
          .map(
            (row) =>
              `<tr>${Object.values(row)
                .map((value) => `<td>${value}</td>`)
                .join('')}</tr>`
          )
          .join('')}
      </tbody>
    </table>
  `;

  app.innerHTML = table;
}
