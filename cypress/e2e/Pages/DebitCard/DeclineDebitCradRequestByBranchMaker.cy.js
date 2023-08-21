export class DeclineDebitCardRequest {

    getAccountNumberOrReferenceEl = '#DeclinedAccountNumberOrReference'
    getSearcButtonEl = '#btnDeclinedSearch > span'
    getSubmitButtonEl = '.odd > :nth-child(3) > .btn'



    accountSearch() {

        return cy.get(this.getAccountNumberOrReferenceEl);
    }

    buttonSearch() {

        cy.get(this.getSearcButtonEl).click();
    }

    accountSubmitButton() {
        cy.get(this.getSubmitButtonEl).click();
    }

}