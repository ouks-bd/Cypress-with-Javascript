export class DebitCradReceivedFromGSS {

    getAccountSearchEl = "#ReceivedAccountNumberOrReference"
    getSearcButtonEl = '#btnReceivedSearch > span'

    // getOkbuttonEl='.modal-footer > .btn-primary'
    // getSucessOkButton="//button[normalize-space()='OK']"

    searchaccountnumber() {
        return cy.get(this.getAccountSearchEl)

    }

    buttonSearch() {

        cy.get(this.getSearcButtonEl).click();
    }

    buttonReceive() {

        // cy.get('.collapse.list-unstyled.sidebar-child').click({ multiple: true } )
        // cy.get('[disabled]').click({force: true});
        // cy.contains("Receive").click();
        //cy.get('btn btn-info btn-xs').contains("Receive").isVisible()

        cy.get("a[value='Submit']").eq(0).click();
    }


}