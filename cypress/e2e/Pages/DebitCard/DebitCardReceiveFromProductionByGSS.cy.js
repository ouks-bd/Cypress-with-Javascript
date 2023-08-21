export class DebitCardReceiveFromProduction {

    getAccountSearchEl = "#AccountNumberOrReference"
    getSearcButtonEl = '#btnSearch > span'
    getReceiveButtonEl = ':nth-child(3) > .btn'

    searchaccountnumber() {
        return cy.get(this.getAccountSearchEl).click()
        // cy.get(this.getAccountSearchEl).type()
    }

    buttonSearch() {

        cy.get(this.getSearcButtonEl).click();
    }

    receiveButton() {
        cy.get("a[value='Submit']").eq(0).click();

       // cy.get(this.getReceiveButtonEl).click();
        //cy.get('#sidebarCollapse').click();
        //cy.get("tr[class='odd'] a[value='Submit']").click();
        //cy.contains('').should('have.text', 'Receive')
    }


}