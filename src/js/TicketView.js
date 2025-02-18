/**
 *  Класс для отображения тикетов на странице.
 *  Он содержит методы для генерации разметки тикета.
 * */
export default class TicketView {
  constructor(parentElement) {
    this.parentElement = parentElement;
  }

  static get markup() {
    return `
    <div class="ticket">
        <div class="radio-and-description">
          <div class="checkbox ticketBtn"></div>
          <p class="task-description">Поменять краску в принтере, ком. 404</p>
        </div>
        <div class="time-and-btns">
          <time class="time" datetime="YYYY-MM-DDThh:mm">10.03.19 08:40</time>
          <div class="ticket-btns-container">
            <div class="correct-ticket ticketBtn"></div>
            <div class="delete-ticket ticketBtn">X</div>
          </div>
        </div>
      </div>
    `
  }

  static get ticket() {
    return '.ticket';
  }

  static get radioAndDescription() {
    return '.radio-and-description';
  }

  static get checkbox() {
    return '.checkbox';
  }

  static get description() {
    return '.task-description';
  }

  static get timeAndBtns() {
    return '.time-and-btns';
  }

  static get time() {
    return '.time';
  }

  static get ticketBtnsContainer() {
    return '.ticket-btns-container';
  }

  static get correctTicket() {
    return '.correct-ticket';
  }

  static get deleteTicket() {
    return '.delete-ticket';
  }

  bindToDOM() {
    this.parentElement.innerHTML = TicketView.markup;

    this.ticketEl = this.parentElement.querySelector(TicketView.ticket);
    this.ticketEl.dataset.id = id;
    this.radioAndDescriptionEl = this.ticketEl.querySelector(TicketView.radioAndDescription);
    this.checkboxEl = this.radioAndDescriptionEl.querySelector(TicketView.checkbox);
    this.descriptionEl = this.radioAndDescriptionEl.querySelector(TicketView.description);
    this.timeAndBtnsEl = this.ticketEl.querySelector(TicketView.timeAndBtns);
    this.timeEl = this.timeAndBtnsEl.querySelector(TicketView.time);
    this.ticketBtnsContainerEl = this.timeAndBtnsEl.querySelector(TicketView.ticketBtnsContainer);
    this.correctTicketEl = this.ticketBtnsContainerEl.querySelector(TicketView.correctTicket);
    this.deleteTicketEl = this.ticketBtnsContainerEl.querySelector(TicketView.deleteTicket);
  }

}
