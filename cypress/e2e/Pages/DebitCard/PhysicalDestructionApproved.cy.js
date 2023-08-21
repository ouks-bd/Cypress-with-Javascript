export class PhysicalApproveDestruction{

    getAccountSearchEl = "#AccountNumberOrReference"
    getSearcButtonEl = '#btnApprove > span'
 


    searchaccountnumber() {
         cy.get(this.getAccountSearchEl).click()
         //return cy.get(this.getAccountSearchEl).type()
    }

    buttonSearch() {

        cy.get(this.getSearcButtonEl).click();
    }

    DestroyButton() {
        cy.get("a[class='btn btn-info btn-xs']").eq(0).click();
        //Debit Card destroyed successfully.



    }

}