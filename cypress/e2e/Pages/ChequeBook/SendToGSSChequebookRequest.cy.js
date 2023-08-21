export class SendToGss{

    getAccountSearchEl = "#AccountNumberOrReference"
    getSearcButtonEl = '#btnSearch > span'
    getApprovedButtonEl = ".odd > :nth-child(3) > .btn"
   
    


    searchaccountnumber() {
        return cy.get(this.getAccountSearchEl).click()
        // cy.get(this.getAccountSearchEl).type()
    }

    buttonSearch() {

        cy.get(this.getSearcButtonEl).click();
    }

    accountSubmitButton() {
        cy.get("a[class='btn btn-info btn-xs']").eq(0).click();

    }
}