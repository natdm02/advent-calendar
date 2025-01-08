const calendarContainer = document.getElementById('calendar-container');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const overlay = document.getElementById('overlay');
const closeModalButton = document.getElementById('close-modal');

// Save an open box to localStorage
const openedBoxes = JSON.parse(localStorage.getItem('openedBoxes')) || [];

function saveOpenedBox(day) {
  if (!openedBoxes.includes(day)) {
    openedBoxes.push(day);
    localStorage.setItem('openedBoxes', JSON.stringify(openedBoxes));
  }
}

// Show modal

function showModal(content) {
  modalBody.innerHTML = `
    <div>
      ${content}
      <button id="close-content-modal" class="btn btn-secondary mt-3">Chiudi</button>
    </div>
  `;
  modal.style.display = 'block';
  overlay.style.display = 'block';

  const closeContentModal = document.getElementById('close-content-modal');
  closeContentModal.addEventListener('click', closeModal);
}

// Close the modal

function closeModal() {
  modal.style.display = 'none';
  overlay.style.display = 'none';
}

closeModalButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Generate the calendar

function generateCalendar() {
  for (let day = 1; day <= 25; day++) {
    const dayBox = document.createElement('div');
    dayBox.classList.add('day-box', 'text-center');

    const icon = document.createElement('div');
    icon.classList.add('day-icon');
    const iconName = source[day - 1]?.icon || "ico-stella";
    icon.innerHTML = `<img src="images/icons/${iconName}.png" alt="Icona">`;

    const number = document.createElement('div');
    number.classList.add('day-number');
    number.textContent = day;

    if (day === 25) dayBox.classList.add('day-25');

    if (openedBoxes.includes(day)) {
      dayBox.classList.add('open');
    } else {
      dayBox.classList.add('closed');
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

    dayBox.appendChild(icon);
    dayBox.appendChild(number);
    calendarContainer.appendChild(dayBox);
  }
}

generateCalendar();
