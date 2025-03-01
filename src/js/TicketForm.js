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
    const formOpened = controlPanel.querySelector('form');

    const modal = document.createElement('form');
    modal.classList.add('ticket-form', 'form');

    modal.innerHTML = `
      <h1 class="form-header">${this.ticket === null ? 'Добавить тикет' : 'Изменить тикет'}</h1>
      <div class="short-description description">
        <label for="shortDescription">Краткое описание</label>
        <input class="input-sd" type="text" name="shortDescription" value="${this.ticket ? this.ticket.name : ''}" required>
      </div>
      <div class="detailed-description description">
        <label for="ticketDescription">Подробное описание</label>
        <textarea class="input-dd" name="ticketDescription">${this.ticket ? this.ticket.description : ''}</textarea>
      </div>
      <div class="btns-container">
        <button class="cancel-btn btn">Отмена</button>
        <button class="confirm-btn btn">Ок</button>
      </div>
    `;

    this.modal = modal;

    if (formOpened) {
      return
    } else {
      controlPanel.querySelector('.ticket-list').appendChild(modal);
    };

    this.addModalEventListeners();
    if(formOpened) return;
  }

  addModalEventListeners() {
    this.modal.addEventListener('submit', (e) => {
      e.preventDefault();
    });

    this.modal.querySelector('.cancel-btn').addEventListener('click', () => this.close());
    this.modal.querySelector('.confirm-btn').addEventListener('click', () => this.handleSubmit());
  }

  handleSubmit() {
    const shortDescription = this.modal.querySelector('.input-sd').value.trim();
    const detailedDescription = this.modal.querySelector('.input-dd').value.trim();

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