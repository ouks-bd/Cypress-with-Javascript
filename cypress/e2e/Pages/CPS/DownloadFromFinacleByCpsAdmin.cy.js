export class DownloadFromFinacle{

    ShowIssued(){
        cy.get('#ContentMain_btnShowFromFinacle').click();
    }

    SendToVendor(){
        cy.get('#ContentMain_btnDownload').click();
    }
    
}