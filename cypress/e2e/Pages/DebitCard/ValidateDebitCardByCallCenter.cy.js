export class ValidateDebitCard {

    getAccountSearchEl = "#AccountNumberOrReference"
    getSearcButtonEl = '#btnSearch > span'
    getApprovedButtonEl = ".odd > :nth-child(3) > .btn"
    getOkbuttonEl = '.modal-footer > .btn-primary'
    getSucessOkButton = "//button[normalize-space()='OK']"


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
       cy.xpath("//a[normalize-space()='Approve']").click();
    }

    okButtonClick() {
        cy.get(this.getOkbuttonEl).click();

    }

    sucessOkButtonClick() {
        cy.xpath(this.getSucessOkButton).click
    }
}