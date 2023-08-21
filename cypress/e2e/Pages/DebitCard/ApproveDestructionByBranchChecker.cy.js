export class ApproveDestruction{

    getAccountSearchEl = "#AccountNumberOrReference"
    getSearcButtonEl = '#btnApprove > span'
 


    searchaccountnumber() {
         cy.get(this.getAccountSearchEl).click()
         //return cy.get(this.getAccountSearchEl).type()
    }

    buttonSearch() {

        cy.get(this.getSearcButtonEl).click();
    }

    ApproveButton() {
        cy.get("a[class='btn btn-info btn-xs']").eq(0).click();

    }

}