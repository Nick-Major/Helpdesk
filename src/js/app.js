import HelpDesk from './HelpDesk';
import TicketService from './TicketService';
import TicketView from './TicketView';

const root = document.getElementById('root');

const controlPanel = document.createElement('div');
controlPanel.classList.add('control-panel');

const dotsContainer = document.createElement('div');
dotsContainer.classList.add('dots-container');

for(let i = 0; i < 3; i++) {
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

root.append(controlPanel);


// const body = document.querySelector('body');

// const controlPanel = document.createElement('div');
// controlPanel.classList.add('control-panel');

// const dotsContainer = document.createElement('div');
// dotsContainer.classList.add('dots-container');

// for(let i = 0; i < 3; i++) {
//     const newEl = document.createElement('span');
//     newEl.classList.add('dot');
//     dotsContainer.appendChild(newEl);
// }

// controlPanel.appendChild(dotsContainer);

// const addBtnContainer = document.createElement('div');
// addBtnContainer.classList.add('add-btn-container');

// const addTicketBtn = document.createElement('button');
// addTicketBtn.classList.add('add-ticket-btn', 'btn');
// addTicketBtn.textContent = 'Добавить тикет';

// addBtnContainer.appendChild(addTicketBtn);

// controlPanel.appendChild(addBtnContainer);

// body.insertBefore(controlPanel, root);



// const ticketService = new TicketService();

// const app = new HelpDesk(root, ticketService);

// app.init();

// УЖЕ БЫЛО!!!

// const ticketInstance = new TicketView(root);

// ticketInstance.bindToDOM();


// document.addEventListener('DOMContentLoaded', () => {
//     const xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//         if(xhr.readyState !== 4) return;

//         console.log(xhr.responseText);
//     }

//     xhr.open('GET', 'http://localhost:7070');

//     xhr.send();
// })