class DeleteTicketForm {
    constructor(parentElement) {
        this.parentElement = parentElement;
    }

    static get markup() {
        return `
        <form class="delete-ticket-form form" method="DELETE" action="http://localhost:7070">
            <h1 class="form-header">Удалить тикет</h1>
            <p class="operation-description">Вы уверены, что хотите удалить тикет? Это действие необратимо.</p>
            <div class="btns-container">
                <button class="cancel-btn btn">Отмена</button>
                <button class="confirm-btn btn">Ок</button>
            </div>
        </form>
        `
    }

    static get form() {
        return '.form';
    }
    
    static get formHeader() {
        return '.form-header';
    }

    static get operationDescription() {
        return `operation-description`;
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
        this.parentElement.innerHTML = DeleteTicketForm.markup();
    
        this.form = this.parentElement.querySelector(DeleteTicketForm.form);
        this.header = this.form.querySelector(DeleteTicketForm.formHeader);
        this.btns = this.form.querySelector(DeleteTicketForm.btnsContainer);
        this.btnCancel = this.btns.querySelector(DeleteTicketForm.cancelBtn);
        this.btnConfirm = this.btns.querySelector(DeleteTicketForm.confirmBtn);
    }

}

export default DeleteTicketForm;