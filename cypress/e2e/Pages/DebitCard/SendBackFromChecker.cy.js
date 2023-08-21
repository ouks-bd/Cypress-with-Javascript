export class sendbackfromchecker {

    getAccountSearchEl = "#AccountNumberOrReference"
    getSearcButtonEl = '#btnSearch > span'
    getRejectEl = ':nth-child(4) > .btn'
    //getRejectEl='Reject'
    getRejectConfirmButtonEl = '.modal-footer > .btn-primary'
    getCheckerRemarksEl = '#CheckerRemarks'

    searchaccountnumber() {
        return cy.get(this.getAccountSearchEl).click()
        // cy.get(this.getAccountSearchEl).type()
    }

    buttonSearch() {

        cy.get(this.getSearcButtonEl).click();
    }

    RejectButton() {
        cy.get(this.getRejectEl).click();
    }

    checkerRemarks() {
        cy.get(this.getCheckerRemarksEl).type('Test Remarks');
    }

    confirmButton() {
        cy.get(this.getRejectConfirmButtonEl).click();
    }

}