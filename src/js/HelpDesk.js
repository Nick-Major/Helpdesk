/**
 *  Основной класс приложения
 * */
export default class HelpDesk {
  constructor(container, ticketService, ticketView, ticketForm, deleteTicketForm) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('This is not HTML element!');
    }
    this.container = container;
    this.ticketService = ticketService;
    this.tickets = [];
    this.ticketView = ticketView;
    this.ticketForm = ticketForm;
    this.deleteTicketForm = deleteTicketForm;
  }

  init() {
    this.addControlPanel();
    this.loadTickets();
    this.render();
    this.addEventListeners();
  }

  addControlPanel() {
    const controlPanel = document.createElement('div');
    controlPanel.classList.add('control-panel');

    const dotsContainer = document.createElement('div');
    dotsContainer.classList.add('dots-container');

    for (let i = 0; i < 3; i++) {
      const newEl = document.createElement('span');
      newEl.classList.add('dot');
      dotsContainer.appendChild(newEl);
    }

    controlPanel.appendChild(dotsContainer);

    const addBtnContainer = document.createElement('div');
    addBtnContainer.classList.add('add-btn-container');

    const addTicketBtn = document.createElement('button');
    addTicketBtn.classList.add('add-ticket-btn', 'btn');
    addTicketBtn.textContent = 'Добавить тикет';

    addBtnContainer.appendChild(addTicketBtn);

    controlPanel.appendChild(addBtnContainer);

    const ticketList = document.createElement('div');
    ticketList.classList.add('ticket-list');

    controlPanel.appendChild(ticketList);

    this.container.append(controlPanel);
  }
}
