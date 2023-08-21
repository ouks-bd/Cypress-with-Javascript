export class Dashboard {

    getDebitcardEl = "Debit Card";

    getInitiateDebitCardEl = '.active > .collapse > :nth-child(1) > a'

    getValidateDebitCardEl = ".active > .collapse > :nth-child(1) > a"
    getProductionActivityEl = '.active > .collapse > :nth-child(1) > a'

    getFirstOrderRequestEl = "Initiate First Order Request"
    getGssEl = 'GSS'
    getGssReceiveEl = 'Debit Card Receive'
    getGssSend = 'Debit Card Send'
    getGssDeliver = 'Debit Card Deliver'

    getReceivedAndDeliver = 'Received & Deliver'
    getDebitCardDelivertoCustomerEl = "Debit Card Deliver to Customer"
    getDeclineAndDebitCradRequestEl = '.sidebar-parent.active > .collapse > :nth-child(3) > a'
    getValidateDebitCardOpsEl = 'Validate Debitcard Request'

    getInitiateDestructionEl = 'Initiate Destruction'
    getApproveDestructionEl = '.active > .collapse > :nth-child(2) > a'
    getPhysicalDestructionEl = '#nav-sol-tab'
    getPhysicalApproveEl = '.active > .collapse > :nth-child(3) > a'
    getAutoRenewEl = '.collapse > :nth-child(2) > a'

    //Cheque Book

    getChequeEl = 'Cheque Book'
    getInitiateChequeBookEl = 'Initiate Request'
    getValidateChequeBookEl = 'Validate Request'
    getSendToFinacleEl = 'Send To Finacle'
    getSendBranchAndGss='Send To Branch & GSS'
    getChequeBookdDelivertoCustomerEl= 'Chequebook Deliver to Customer'

    ChequeBookDeliverToCustomer(){
        cy.contains(this.getChequeEl).click()
        cy.contains(this.getReceivedAndDeliver).click()

        cy.contains(this.getChequeBookdDelivertoCustomerEl).click()
    }

    ChequeBookReceivedFromVendor(){
        cy.contains(this.getChequeEl).click()
        cy.contains(this.getReceivedAndDeliver).click()
    }

    ChequeBookInitiate() {
        cy.contains(this.getChequeEl).click()
        cy.contains(this.getInitiateChequeBookEl).click()
    }

    ValidateRequest() {
        cy.contains(this.getChequeEl).click()
        cy.contains(this.getValidateChequeBookEl).click()
    }

    SendToFinacle() {
        cy.contains(this.getChequeEl).click()
        cy.contains(this.getSendToFinacleEl).click()
    }

    SendToBranch(){
        cy.contains(this.getChequeEl).click()
        cy.contains(this.getSendBranchAndGss).click()
    }
    

    debitCardInitiationPage() {
        cy.contains(this.getDebitcardEl).click();
        cy.get(this.getInitiateDebitCardEl).click();
    }

    debitCardValidatePage() {
        cy.contains(this.getDebitcardEl).click();
        cy.get(this.getValidateDebitCardEl).click()

    }

    productionActivityPage() {
        cy.contains(this.getDebitcardEl).click();


        cy.get('a[href="/Debitcard/DebitCardProductionActivity/Index"]').click({ force: true });

    }

    debitCardReceivePage() {
        cy.contains(this.getGssEl).click();
        cy.contains("Debit Card Receive").click();


    }

    debitCardSendPage() {
        cy.contains(this.getGssEl).click();
        cy.contains("Debit Card Send").click()
    }

    receivedFromVendor() {
        cy.contains(this.getDebitcardEl).click();
        cy.get(':nth-child(6) > a').click();
        cy.contains("Debit Card Receive From Vendor").click()
    }

    DebitCardDelivertoCustomer() {
        cy.contains(this.getDebitcardEl).click();
        cy.get(':nth-child(6) > a').click();

        cy.contains(this.getDebitCardDelivertoCustomerEl).click();
    }

    DeclineDebitCard() {
        cy.contains(this.getDebitcardEl).click();
        //cy.contains(this.getDeclineAndDebitCradRequestEl).click();
        cy.get(this.getDeclineAndDebitCradRequestEl).click();
    }

    DebitCardSendToCustomerByGss() {

        cy.contains(this.getGssEl).click();

        cy.contains(this.getGssDeliver).click();

    }

    InitiateFirstOrderRequest() {
        cy.contains(this.getDebitcardEl).click();

        cy.contains(this.getFirstOrderRequestEl).click();

    }

    FirstOrderDebitValidateRequest() {
        cy.contains(this.getDebitcardEl).click();
        cy.contains(this.getValidateDebitCardOpsEl).click();

    }
    InitiateDestrcution() {
        cy.contains(this.getDebitcardEl).click();
        // cy.get('ul.collapse.list-unstyled.sidebar-child').invoke('css', 'display', 'block')
        // cy.contains('a', 'Initiate Destruction').click()
        cy.get('.active > .collapse > :nth-child(2) > a').click()

        //cy.contains(this.getInitiateDestructionEl).click();
    }

    ApproveDestruction() {
        cy.contains(this.getDebitcardEl).click();

        cy.get(this.getApproveDestructionEl).click();

    }

    PysicalDestruction() {
        cy.contains(this.getDebitcardEl).click();

        cy.get(this.getApproveDestructionEl).click();

        cy.get(this.getPhysicalDestructionEl).click();
    }

    ApprovePhysicalDest() {
        cy.contains(this.getDebitcardEl).click();
        cy.get(this.getPhysicalApproveEl).click();
    }
    AutoRenewDebitCard() {
        cy.get('a[href="/Debitcard/AutoRenewDebitCard/Index"]').click({ force: true });

    }


    //ChequeBook Initiate


    //CPS

    Modules = '.sf-menu > :nth-child(2) > :nth-child(1)'
    ChequePrinting = 'body > form:nth-child(2) > div:nth-child(23) > div:nth-child(6) > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(2) > li:nth-child(26) > a:nth-child(1)'

    ModulesClick() {

        cy.get(this.Modules).trigger('onmouseover')

        cy.get(this.Modules).rightclick();
    }
    PrintingSytem() {
        cy.contains("Cheque Printing System").trigger('onmouseover')
        cy.contains("Cheque Printing System").rightclick();
    }

    ChequeManagement() {
        cy.contains("Cheque Management").trigger('onmouseover')
        cy.contains("Cheque Management").rightclick();

    }

    DownloadFromFinacle() {
        cy.get("a[href='/CPS/DownloadFromFinacle.aspx']").click({ force: true })

    }

    ChequePrintingVendor() {
        cy.contains("Cheque Printing System").trigger('onmouseover')
        cy.contains("Cheque Printing System").rightclick();
    }

    ChequeManagementVendor() {
        cy.contains("Cheque Management").trigger('onmouseover')
        cy.contains("Cheque Management").rightclick();
    }

    DownloadPrintingRequest() {
        cy.contains("Download Printing Request").trigger('onmouseover')
        cy.contains("Download Printing Request").click();
    }

    UpdatePrintingRequest() {
        cy.contains("Update Printing Request").trigger('onmouseover')
        cy.contains("Update Printing Request").click();
    }

    CpsLogOutOne(){

        cy.get('.sf-menu > :nth-child(6) > a').click({ multiple: true });

        // cy.get(':nth-child(5) > a').click();
    }

    CpsLogOutTwo(){
        cy.wait(5000)
       // cy.contains("Logout").trigger('onmouseover')
        // cy.contains("Logout").click();
        cy.xpath("/html[1]/body[1]/form[1]/div[3]/div[3]/ul[1]/li[6]/a[1]").click();
        // cy.get(':nth-child(5) > a').click();
    }

}