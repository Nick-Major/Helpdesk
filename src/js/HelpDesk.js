// Основной класс приложения

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
    this.addEventListeners();
  }

  loadTickets() {
    this.ticketService.list((tickets) => {
      this.tickets = tickets;
      this.renderTickets();
    });
  }

  renderTickets() {
    const ticketList = this.container.querySelector('.ticket-list');
    ticketList.innerHTML = '';
    this.tickets.forEach((ticket) => {
      const ticketEl = this.ticketView.render(ticket);
      ticketList.append(ticketEl);
      this.addTicketEventListeners(ticketEl, ticket);
    });
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

  addEventListeners() {
    const addTicketBtn = this.container.querySelector('.add-ticket-btn');
    addTicketBtn.addEventListener('click', () => {
      this.ticketForm.showModal(null, (data) => this.createTicket(data));
    });
  }

  addTicketEventListeners(ticketEl, ticket) {
    const correctTicket = ticketEl.querySelector('.correct-ticket');
    correctTicket.addEventListener('click', () => {
      this.ticketForm.showModal(ticket, (updatedData) => this.updateTicket(ticket.id, updatedData));
    });

    const deleteTicket = ticketEl.querySelector('.delete-ticket');
    deleteTicket.addEventListener('click', () => {
      this.deleteTicketForm.showDeleteForm(() => this.deleteTicket(ticket.id));
    });

    const checkbox = ticketEl.querySelector('.checkbox');
    checkbox.addEventListener('click', () => {
      this.updateTicket(ticket.id, { status: !ticket.status });
    });
  }

  createTicket(data) {
    this.ticketService.create(data, (newTicket) => {
      this.tickets.push(newTicket);
      this.loadTickets();
    });
  }

  updateTicket(id, data) {
    this.ticketService.update(id, data, () => {
      this.loadTickets();
    });
  }

  deleteTicket(id) {
    this.ticketService.delete(id, () => {
      this.loadTickets();
    });
  }
}
