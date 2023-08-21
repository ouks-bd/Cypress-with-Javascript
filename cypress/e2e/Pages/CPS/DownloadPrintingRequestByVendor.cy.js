export class DownloadVendorUser {


    
    ShowIssued(){
        cy.get('#ContentMain_btnShowIssued').click();
    }

    DownLoad(){
        cy.get('#ContentMain_btnDownload').click();
    }
}