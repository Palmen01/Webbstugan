const dates = new Date()
const month = dates.getMonth()
const year = dates.getFullYear()
const firstDayOfMonth = new Date(year,month, 1)
const firstWeekDay = firstDayOfMonth.getDay()
const swedishDayStyle = firstWeekDay - 1

const months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"]

console.log(swedishDayStyle)

const daysOfWeek = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag'];
const rows = 6;
const cols = 7;

    function createCalendar() {
      const calendarContainer = document.getElementById('calendar-container');

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

      // Create the calendar rows
      for (let i = 0; i < rows; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        for (let j = 0; j < cols; j++) {
          let col = document.createElement('div');
          col.className = 'border border-dark col w-25 p-3';
          col.textContent = j + 1;
          row.appendChild(col);
        }
        calendarContainer.appendChild(row);
      }
    }

    document.addEventListener('DOMContentLoaded', createCalendar);