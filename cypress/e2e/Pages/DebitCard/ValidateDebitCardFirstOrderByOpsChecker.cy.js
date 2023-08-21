export class ValidateFirstOrder {


    getAccountSearchEl = "#AccountNumberOrReference"
    getSearcButtonEl = '#btnSearch > span'
    getApprovedButtonEl = "Approve"
    getOkbuttonEl = '.modal-footer > .btn-primary'
    getSucessOkButton = "//button[normalize-space()='OK']"


    searchaccountnumber() {
         cy.get(this.getAccountSearchEl).click()
         //return cy.get(this.getAccountSearchEl).type()
    }

    buttonSearch() {

        cy.get(this.getSearcButtonEl).click();
    }

    // ApproveButton(){
    //     cy.contains(this.getApprovedButtonEl).eq(1).click();
    // }

    accountSubmitButton() {
        cy.get("a[class='btn btn-info btn-xs']").eq(0).click();
        
    }

    FinalApprovedButton(){
        cy.get('.modal-footer > .btn-primary').click();
        
    }

}