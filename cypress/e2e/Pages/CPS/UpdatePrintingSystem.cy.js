export class UpdatePrintingRequest {

    ShowIssued(){
        cy.get('#ContentMain_btnShowIssued').click();
    }

    DownLoad(){
        cy.get('#ContentMain_btnPrinted').click();
    }
}