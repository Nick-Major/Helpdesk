//Класс для создания формы создания нового тикета

class TicketForm {
  constructor() {
    this.modal = null;
    this.onSubmit = null;
  }

  showModal(ticket = null, onSubmit) {
    this.ticket = ticket;
    this.onSubmit = onSubmit;
    this.render();
  }

  render() {
    const controlPanel = document.querySelector('.control-panel');

    const modal = document.createElement('form');
    modal.classList.add('ticket-form', 'form');

    form.innerHTML = `
      <h1 class="form-header">${this.ticket === null ? 'Добавить тикет' : 'Изменить тикет'}</h1>
      <div class="short-description description">
        <label for="shortDescription">Краткое описание</label>
        <input type="text" id="shortDescription" value="${this.ticket ? this.ticket.name : ''}" required>
      </div>
      <div class="detailed-description description">
        <label for="ticketDescription">Подробное описание</label>
        <textarea id="ticketDescription">${this.ticket ? this.ticket.description : ''}</textarea>
      </div>
      <div class="btns-container">
        <button class="cancel-btn btn">Отмена</button>
        <button class="confirm-btn btn">Ок</button>
      </div>
    `;

    this.modal = modal;
    controlPanel.appendChild(form);

    this.addModalEventListeners();
  }

  addModalEventListeners() {
    this.modal.addEventListener('submit', (e) => {
      e.preventDefault();
    });

    this.modal.querySelector('.cancel-btn').addEventListener('click', () => this.close());
    this.modal.querySelector('.confirm-btn').addEventListener('click', () => this.handleSubmit());
  }

  handleSubmit() {
    const shortDescription = this.modal.querySelector('.short-description').value.trim();
    const detailedDescription = this.modal.querySelector('.detailed-description').value.trim();

    if (!shortDescription) {
      alert('Краткое описание обязательно к заполнению!');
      return;
    }

    this.onSubmit({ name: shortDescription, description: detailedDescription });
    this.onSubmit = null;
    this.close();
  }

  close() {
    const modal = document.querySelector('.ticket-form');

    if (modal) {
      modal.remove();
    };

    this.modal = null;
  }
}

export default TicketForm;