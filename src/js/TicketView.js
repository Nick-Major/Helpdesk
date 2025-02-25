/**
 *  Класс для отображения тикетов на странице.
 *  Он содержит методы для генерации разметки тикета.
 * */
export default class TicketView {

  render(ticket) {
    const ticketList = document.querySelector('.ticket-list');
    this.ticketEl = document.createElement('div');

    this.ticketEl.className = 'ticket';
    this.ticketEl.dataset.id = ticket.id;

    this.ticketEl.innerHTML = `
    <div class="radio-and-description">
        <div class="checkbox ticketBtn ${ticket.status ? 'done' : ''}"></div>
        <h1 class="ticket-title">${ticket.name}</h1>
    </div>
    <div class="time-and-btns">
        <time class="time" datetime="YYYY-MM-DDThh:mm">${ticket.created}</time>
        <div class="ticket-btns-container">
            <div class="correct-ticket ticketBtn"></div>
            <div class="delete-ticket ticketBtn">X</div>
        </div>
    </div>
    <p class="task-description hidden">${ticket.description}</p>
    `
    ticketList.append(ticketEl);

    this.addEventListeners();
  }

  addEventListeners() {
    const checkbox = this.ticketEl.querySelector('.checkbox');
    const changeTicketBtn = this.ticketEl.querySelector('.correct-ticket');
    const deleteTicketBtn = this.ticketEl.querySelector('.delete-ticket');
    const taskDescription = this.ticketEl.querySelector('.task-description');

    checkbox.addEventListener('click', ()=> {
      checkbox.classList.toggle('done');
    });

    changeTicketBtn.addEventListener('click', ()=> {
      //должен вызывать форму изменения тикета
    });

    deleteTicketBtn.addEventListener('click', ()=> {
      //должен вызывать форму удаления тикета
    });

    this.ticketEl.addEventListener('click', (e)=> {
      const isTicketBtn = e.target.classList.contains('ticketBtn');

      if (isTicketBtn) { return };

      if (taskDescription.classList.contains('hidden')) {
        taskDescription.classList.remove('hidden');
      } else {
        taskDescription.classList.add('hidden');
      };
    })
  }

}
