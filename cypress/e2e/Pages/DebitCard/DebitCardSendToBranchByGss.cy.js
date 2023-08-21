//import { eq } from "cypress/types/lodash";

export class DebitCardSendToBranch {

    getAccountSearchEl = "#AccountNumberOrReference"
    getSearcButtonEl = '#btnSearch > span'
    getSendToBranchButtonEl = ':nth-child(3) > .btn'

    searchaccountnumber() {
        return cy.get(this.getAccountSearchEl).click()
        // cy.get(this.getAccountSearchEl).type()
    }

    buttonSearch() {

        cy.get(this.getSearcButtonEl).click();
    }

    sendToBranchButton() {
        
        cy.get("a[value='Submit']").eq(0).click();
        //cy.get(".btn btn-info btn-xs").should('have.value', 'Submit').click
        
        
         //cy.contains('Send To Branch').click({force:true});
    }

}