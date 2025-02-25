/**
 *  Класс для создания формы создания нового тикета
 * */
export default class TicketForm {
  constructor() {
    this.container = null;
    this.modal = null;
  }

  static get markup() {
    return `
    <form class="add-ticket-form form" method="POST" action="http://localhost:7070">
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

}
