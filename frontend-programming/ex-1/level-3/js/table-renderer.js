// table-renderer.js

export function renderStudentGrid(studentData) {
    const gridOptions = {
        columnDefs: [
            { headerName: "ID", field: "ID", sortable: true, filter: true },
            { headerName: "Name", field: "Name", sortable: true, filter: true },
            { headerName: "Age", field: "Age", sortable: true, filter: true },
            { headerName: "Grade", field: "Grade", sortable: true, filter: true, cellStyle: params => {
                if (params.value === 'A') {
                    return { backgroundColor: '#d4edda', color: '#155724', fontWeight: 'bold' };
                }
                return null;
            }},
        ],
        rowData: studentData,
    };

    const gridContainer = document.getElementById('gridContainer');

    new agGrid.Grid(gridContainer, gridOptions);
}
