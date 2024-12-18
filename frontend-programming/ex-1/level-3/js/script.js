// script.js

import { loadStudentCSV } from './data-loader.js';
import { renderStudentGrid } from './table-renderer.js';

document.getElementById('loadStudents').addEventListener('click', async () => {
    try {
        console.log('Load Students button clicked');
        const studentData = await loadStudentCSV('students.csv');
        renderStudentGrid(studentData);
    } catch (error) {
        console.error('Error loading students:', error);
    }
});

document.getElementById('changeFont').addEventListener('click', () => {
    document.body.style.fontFamily = "'Varela Round', sans-serif";
    console.log("Font changed to Varela Round");
});

// Display browser information
window.onload = function() {
    const browserName = navigator.appName;
    const browserVersion = navigator.appVersion;
    const windowDimensions = `${window.innerWidth} x ${window.innerHeight}`;
    const userAgent = navigator.userAgent;

    document.getElementById('browserName').textContent = browserName;
    document.getElementById('browserVersion').textContent = browserVersion;
    document.getElementById('windowDimensions').textContent = windowDimensions;
    document.getElementById('userAgent').textContent = userAgent;
};
