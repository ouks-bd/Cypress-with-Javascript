export class ValidateChequeBook {

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

    approvedButton() {
        cy.contains('Approve').should('be.visible').click();
    }

    approvedButtonClick() {
       // cy.get(this.getApprovedButtonEl).click();
       cy.xpath("//a[normalize-space()='Approve']").eq(0).click();
    }

    SucessfullButton() {
        cy.get(this.getOkButton).should('be.visible').click();
        cy.get(this.getOkButton).should('not.be.hidden',{force: true}).click();
 
        cy.wait(2000)
    }

  
}