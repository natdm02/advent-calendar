const calendarContainer = document.getElementById('calendar-container');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const overlay = document.getElementById('overlay');
const closeModalButton = document.getElementById('close-modal');

// showmodal
function showModal(content) {

  modalBody.innerHTML = content; 
  console.log('Contenuto attuale nella modale:', modalBody.innerHTML); 
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

    dayBox.addEventListener('click', () => {
      if (dayBox.classList.contains('open')) return;
      dayBox.classList.add('open'); 
      
      const contentData = source[day - 1];
      const content = contentData.type === "image"
        ? `<img src="${contentData.url}" alt="${contentData.icon}" style="width: 100%;">`
        : `<p>${contentData.text}</p>`;

      showModal(content);
    });
    calendarContainer.appendChild(dayBox);
  }
}

overlay.classList.add('hidden');
generateCalendar();
