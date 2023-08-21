export class SendToBranch {


    getAccountSearchEl = "#AccountNumberOrReference"
    getSearcButtonEl = '#btnSearch > span'
    getApprovedButtonEl = ".odd > :nth-child(3) > .btn"
    getOkButton = '.modal-footer'



    searchaccountnumber() {
        return cy.get(this.getAccountSearchEl).click({force: true})
        // cy.get(this.getAccountSearchEl).type()
    }

    buttonSearch() {
        cy.get('#btnSearchSendToBranch').click()
        //cy.get(this.getSearcButtonEl).click();
    }

    accountSubmitButton() {
        cy.get("a[class='btn btn-info btn-xs']").eq(0).click();

    }

}