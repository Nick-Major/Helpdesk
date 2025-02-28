import HelpDesk from './HelpDesk';
import TicketService from './TicketService';
import TicketView from './TicketView';
import TicketForm from './TicketForm';
import DeleteTicketForm from './DeleteTicketForm';

const root = document.getElementById('root');

const ticketService = new TicketService('http://localhost:3000');
const ticketView = new TicketView();
const ticketForm = new TicketForm();
const deleteTicketForm = new DeleteTicketForm();

const app = new HelpDesk(root, ticketService, ticketView, ticketForm, deleteTicketForm);

app.init();