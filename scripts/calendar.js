const daysOfWeek = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag'];
const rows = 6;
const cols = 7;

function createCalendar() {
  const calendarContainer = document.getElementById('calendar-container');
  calendarContainer.innerHTML = "";

  // current date
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // display current month view
  const monthsByName = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"]

  // create month div
  let monthDisplay = document.createElement("div");
  monthDisplay.className = "row monthdisplay";
  monthDisplay.textContent = monthsByName[currentMonth] + " " + currentYear;
  calendarContainer.appendChild(monthDisplay);

  // Create the header row
  let headerRow = document.createElement('div');
  headerRow.className = 'row fontsizeSmall';
  daysOfWeek.forEach(day => {
    let col = document.createElement('div');
    col.className = 'border border-dark col w-25 p-3';
    col.textContent = day;
    headerRow.appendChild(col);
  });
  calendarContainer.appendChild(headerRow);

  // get first day of month
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const startingDay = (firstDayOfMonth.getDay() + 6) % 7; // Adjust for Monday start

  // get number of days in month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  let dayCounter = 1;

  // Create the calendar rows
  for (let i = 0; i < rows; i++) {
    let row = document.createElement('div');
    row.className = 'row';
    for (let j = 0; j < cols; j++) {
      let col = document.createElement('div');
      col.className = 'border border-dark col w-25 p-3';

      if (i === 0 && j < startingDay) {
        // Empty cells before the first day of the month
        col.textContent = '';
      } else if (dayCounter > daysInMonth) {
        // Empty cells after the last day of the month
        col.textContent = '';
      } else {
        col.textContent = dayCounter;
        dayCounter++;
      }

      row.appendChild(col);
    }
    calendarContainer.appendChild(row);
  }
}

document.addEventListener('DOMContentLoaded', createCalendar);