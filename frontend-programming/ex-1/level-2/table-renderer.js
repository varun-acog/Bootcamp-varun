export function renderTable(data) {
    const tableBody = document.getElementById('studentTableBody');
    tableBody.innerHTML = ''; 

    data.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.grade}</td>
        `;
        tableBody.appendChild(row);
    });
}
