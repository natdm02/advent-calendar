const calendarContainer = document.getElementById('calendar-container');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const overlay = document.getElementById('overlay');
const closeModalButton = document.getElementById('close-modal');


//localStorage
const openedBoxes = JSON.parse(localStorage.getItem('openedBoxes')) || [];


function saveOpenedBox(day) {
  if (!openedBoxes.includes(day)) {
    openedBoxes.push(day);
    localStorage.setItem('openedBoxes', JSON.stringify(openedBoxes));
  }
}


// showmodal
function showModal(content) {

  modalBody.innerHTML = content; 
  modal.classList.remove('hidden'); 
  overlay.classList.remove('hidden'); 
}

// closemodal
function closeModal() {
  modal.classList.add('hidden'); 
  overlay.classList.add('hidden'); 
}

closeModalButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


// generatecalendar
function generateCalendar() {

  for (let day = 1; day <= 25; day++) {
    const dayBox = document.createElement('div');
    dayBox.classList.add('day-box', 'text-center');
    dayBox.textContent = day;

    
    if (day === 25) {
      dayBox.classList.add('day-25');
    }

    
    if (openedBoxes.includes(day)) {
      dayBox.classList.add('open');
    }

    dayBox.addEventListener('click', () => {
      if (dayBox.classList.contains('open')) return;
      dayBox.classList.add('open'); 
      saveOpenedBox(day);
      
      const contentData = source[day - 1];
      const content = contentData.type === "image"
        ? `<img src="${contentData.url}" alt="${contentData.icon}" style="width: 100%;">`
        : `<p>${contentData.text}</p>`;

      showModal(content);
    });
    calendarContainer.appendChild(dayBox);
  }
}
generateCalendar();
