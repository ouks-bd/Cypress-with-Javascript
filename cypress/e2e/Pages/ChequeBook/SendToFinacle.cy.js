export class SendToFinacle {

    getAccountSearchEl = "#AccountNumberOrReference"
    getSearcButtonEl = '#btnSearch > span'
    getApprovedButtonEl = ".odd > :nth-child(3) > .btn"
    getOkButton = '.modal-footer'
    


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

    SucessfullButton() {
        cy.get(this.getOkButton).should('be.visible').click();
        cy.get(this.getOkButton).should('not.be.hidden',{force: true}).click();
 
        cy.wait(2000)
    }

    SucessfullButton() {
        cy.get(this.getOkButton).should('be.visible').click();
        cy.get(this.getOkButton).should('not.be.hidden',{force: true}).click();
 
        cy.wait(2000)
    }

    Reports(){
        cy.get('.sidebar-parent.active > .dropdown-toggle').click(); // reports click

        cy.wait(2000)
        
        cy.get('.sidebar-parent.active > .collapse > :nth-child(1) > a').click(); // scheme report click
        cy.get('[onclick="SearchReport()"]').click(); // click one search button
    }

    //Test


  
}