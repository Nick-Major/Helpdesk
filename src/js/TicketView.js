import { locale } from "core-js";

/**
 *  Класс для отображения тикетов на странице.
 *  Он содержит методы для генерации разметки тикета.
 * */
export default class TicketView {
  render(ticket) {
    this.ticketEl = document.createElement('div');

    this.ticketEl.className = 'ticket';
    this.ticketEl.dataset.id = ticket.id;

    this.ticketEl.innerHTML = `
    <div class="radio-and-description">
        <div class="checkbox ticketBtn ${ticket.status ? 'done' : ''}"></div>
        <h1 class="ticket-title">${ticket.name}</h1>
    </div>
    <div class="time-and-btns">
        <time class="time" datetime="YYYY-MM-DDThh:mm">${this.formatDate(ticket.created)}</time>
        <div class="ticket-btns-container">
            <div class="correct-ticket ticketBtn"></div>
            <div class="delete-ticket ticketBtn">X</div>
        </div>
    </div>
    <p class="task-description hidden">${ticket.description}</p>
    `;

    this.addEventListeners();

    return this.ticketEl;
  }

  addEventListeners() {
    const checkbox = this.ticketEl.querySelector('.checkbox');
    const taskDescription = this.ticketEl.querySelector('.task-description');

    checkbox.addEventListener('click', () => {
      checkbox.classList.toggle('done');
    });

    this.ticketEl.addEventListener('click', (e) => {
      const isTicketBtn = e.target.classList.contains('ticketBtn');

      if (isTicketBtn) {
        return;
      }

      if (taskDescription.classList.contains('hidden')) {
        taskDescription.classList.remove('hidden');
      } else {
        taskDescription.classList.add('hidden');
      }
    });
  }

  formatDate(number) {
    const date = new Date(number);
    let options = {year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', second: '2-digit'};
    let formattedDate = date.toLocaleString(options).replace(',','');
    return formattedDate;
  }
}
