export class DebitCardSendToCustomerByGss{

    getAccountSearchEl = "#AccountNumberOrReference"
    getSearcButtonEl = '#btnSearch > span'
    getExportEl='.btn-dark'

    searchaccountnumber() {
        return cy.get(this.getAccountSearchEl).click()
        // cy.get(this.getAccountSearchEl).type()
    }

    buttonSearch() {
        cy.get(this.getSearcButtonEl).click();
    }

    exportFile(){
        cy.get(this.getExportEl).click();
    }

    getFileUpload()
    {
      return cy.get('#inputFile')
    }

    importFile(){
        cy.get("#viewfile").click();
    }


}