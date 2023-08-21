export class PhysicalDest{

    getAccountSearchEl = "#PhysicallyDestroyAccountNumberOrReference"
    getSearcButtonEl = '#btnPhysicallyDestroy > span'
 


    searchaccountnumber() {
         cy.get(this.getAccountSearchEl).click()
         //return cy.get(this.getAccountSearchEl).type()
    }

    buttonSearch() {

        cy.get(this.getSearcButtonEl).click();
    }

    ApproveButton() {
        cy.get("a[class='btn btn-info btn-xs']").eq(0).click();
        //cy.get('.modal-body > .text-center').should('have.text','Physically send successfully')

    }
}