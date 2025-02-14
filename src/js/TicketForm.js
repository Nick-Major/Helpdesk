/**
 *  Класс для создания формы создания нового тикета
 * */
export default class TicketForm {
  constructor(container) {
    this.container = container;
  }

  static get markup() {
    return `
    <form class="add-ticket-form" action="" method="get">
        <h1 class="form-header">Добавить тикет</h1>
        <div class="short-description description">
          <label for="shortDescription">Краткое описание</label>
          <input type="text" name="shortDescription">
        </div>
        <div class="detailed-description description">
          <label for="ticketDescription">Подробное описание</label>
          <textarea name="ticketDescription" id="td"></textarea>
        </div>
        <div class="btns-container">
          <button class="cancel-btn btn">Отмена</button>
          <button class="confirm-btn btn">Ок</button>
        </div>
      </form>
    `
  }

  static get addTicketForm() {
    return '.add-ticket-form';
  }

  static get formHeader() {
    return '.form-header';
  }

  static get shortDescription() {
    return '.short-description description';
  }

  static get detailedDescription() {
    return '.detailed-description description';
  }

  static get btnsContainer() {
    return '.btns-container';
  }

  static get cancelBtn() {
    return '.cancel-btn btn';
  }

  static get confirmBtn() {
    return '.confirm-btn btn';
  }

  bindToDOM() {
    this.container.innerHTML = TicketForm.markup();

    this.form = this.container.querySelector(TicketForm.addTicketForm);
    this.header = this.form.querySelector(TicketForm.formHeader);
    this.shortDes = this.form.querySelector(TicketForm.shortDescription);
    this.detailedDes = this.form.querySelector(TicketForm.detailedDescription);
    this.btns = this.form.querySelector(TicketForm.btnsContainer);
    this.btnCancel = this.btns.querySelector(TicketForm.cancelBtn);
    this.btnConfirm = this.btns.querySelector(TicketForm.confirmBtn);
  }

}
