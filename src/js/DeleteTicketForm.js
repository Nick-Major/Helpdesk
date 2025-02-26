class DeleteTicketForm {
  constructor() {
    this.modal = null;
    this.onConfirm = null;
  }

  showDeleteForm(onConfirm) {
    this.onConfirm = onConfirm;
    this.render();
  }

  render() {
    this.close();

    const controlPanel = document.querySelector('.control-panel');
    const modal = document.createElement('form');

    modal.innerHTML = `
            <h1 class="form-header">Удалить тикет</h1>
            <p class="operation-description">Вы уверены, что хотите удалить тикет? Это действие необратимо.</p>
            <div class="btns-container">
                <button class="cancel-btn btn">Отмена</button>
                <button class="confirm-btn btn">Ок</button>
            </div>
        `;

    this.modal = modal;
    controlPanel.appendChild(modal);

    this.addModalEventListeners();
  }

  addModalEventListeners() {
    this.modal.querySelector('.cancel-btn').addEventListener('click', () => this.close());
    this.modal.querySelector('.confirm-btn').addEventListener('click', () => {
      this.onConfirm();
      this.onConfirm = null;
      this.close();
    });
  }

  close() {
    const modal = document.querySelector('.ticket-form');

    if (modal) {
      modal.remove();
    }
  }
}

export default DeleteTicketForm;
