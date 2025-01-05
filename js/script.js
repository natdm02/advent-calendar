
const calendarContainer = document.getElementById('calendar-container');

function generateCalendar() {

    for (let day = 1; day <= 25; day++) {

        const dayBox = document.createElement('div');
        dayBox.classList.add('day-box', 'text-center');
        dayBox.textContent = day;
    
    if (day === 25) {
        dayBox.classList.add('day-25');
    }
    
    calendarContainer.appendChild(dayBox);
    }
}

generateCalendar();
