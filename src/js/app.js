import { Date } from 'core-js';
import HelpDesk from './HelpDesk';
import TicketService from './TicketService';
import TicketView from './TicketView';

const root = document.getElementById('root');

const data = {
    id: '1988',
    name: 'Поменять краску в принтере, ком. 404',
    description: 'Принтер HP LJ 1210, картриджи на складе',
    status: true,
    created: '10.03.19 08:40',
}

const ticketEl = document.createElement('div');

ticketEl.className = 'ticket';

ticketEl.dataset.id = data.id;

ticketEl.innerHTML = `
    <div class="radio-and-description">
        <div class="checkbox ticketBtn ${data.status ? 'done' : ''}"></div>
        <h1 class="ticket-title">${data.name}</h1>
    </div>
    <div class="time-and-btns">
        <time class="time" datetime="YYYY-MM-DDThh:mm">${data.created}</time>
        <div class="ticket-btns-container">
            <div class="correct-ticket ticketBtn"></div>
            <div class="delete-ticket ticketBtn">X</div>
        </div>
    </div>
    <p class="task-description hidden">${data.description}</p>
`

root.append(ticketEl);

const checkbox = ticketEl.querySelector('.checkbox');
const taskDescription = ticketEl.querySelector('.task-description');

checkbox.addEventListener('click', ()=> {
    checkbox.classList.toggle('done');
})

ticketEl.addEventListener('click', (e)=> {
    const isTicketBtn = e.target.classList.contains('ticketBtn');
    
    if (isTicketBtn) { return };

    if(taskDescription.classList.contains('hidden')) {
        taskDescription.classList.remove('hidden');
    } else {
        taskDescription.classList.add('hidden');
    };
})