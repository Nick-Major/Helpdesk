/**
 *  Класс для связи с сервером.
 *  Содержит методы для отправки запросов на сервер и получения ответов
 * */
import createRequest from "./api/createRequest";

export default class TicketService {
  constructor(localServerURL) {
    this.localServerURL = localServerURL;
  }

  list(callback) {
    const url = `${this.localServerURL}?method=allTickets`;
    createRequest({url, method: "GET"}).then(callback);
  }

  get(id, callback) {
    const url = `${this.localServerURL}?method=ticketById&id=${id}`;
    createRequest({url, method: "GET"}).then(callback);
  }

  create(data, callback) {
    const url = `${this.localServerURL}?method=createTicket`;
    createRequest({url, method: "POST", data}).then(callback);
  }

  update(id, data, callback) {
    const url = `${this.localServerURL}?method=updateById&id=${id}`;
    createRequest({url, method: "PUT", data}).then(callback);
  }

  delete(id, callback) {
    const url = `${this.localServerURL}?method=deleteById&id=${id}`;
    createRequest({url, method: "DELETE"}).then(() => callback());
  }
}
