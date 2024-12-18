export async function loadStudentData() {
    try {
        const response = await fetch('students.json');
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('Error loading student data:', error);
        return [];
    }
}
