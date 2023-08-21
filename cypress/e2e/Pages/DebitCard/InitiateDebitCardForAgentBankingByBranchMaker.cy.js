export class IntiateDebitCardForAgentBanking{

    
    getinputAccountNumberEl = '#SearchAccountNumberId'
    getserarchAccountNumberEl = '#AccountInfoSerachDiv > :nth-child(2) > .btn'
    getSelectCardTypeEl = '#RequestingCardTypeId'
    getSelectBranchEl = '#ReceivingBranchId'
    //getclickSaveButtonEl='.offset-4 > .btn-primary'

    getBranchDelivery = '#BranchDeliveryId'
    getOutLetDelivery ='#OutletDeliveryId'

    getOutlet='#RecevingOutletId'

    getclicksubmitbuttonEl = '.offset-4 > .btn-primary'
    getAccountNumberOrReferenceEl = '#AccountNumberOrReference'
    getSearcButtonEl = '#btnSearch > span'
    getSubmitButtonEl = '.odd > :nth-child(3) > .btn'
    //getSaveAndSubmitButtonEl='.offset-4 > .btn-success'
    debitcardsucessEl = '.modal-footer > .btn'
    getOkButton = '.modal-footer'


    searchAccoutNumber() {
        return cy.get(this.getinputAccountNumberEl);
        //cy.get(this.getserarchAccountNumberEl).click();
    }

    searchAccoutNumberClick() {
        cy.get(this.getserarchAccountNumberEl).click();
        //cy.get('#DynamicModalCloseBtn').click();

    }

    selectCard() {
        cy.wait(5000)
       // cy.get(this.getSelectCardTypeEl).select('VISA DEBIT CARD').should('have.value', '111')
        cy.get(this.getBranchDelivery).click();

    }
    selectRecevingCategory (){
        cy.get(this.getOutLetDelivery).click();
    }

    selectOutLet() {

        cy.get(this.getOutlet).select('224874',{ force: true })

        cy.get(this.getOutlet).should('have.value', '224874')

        cy.get('#select2-RecevingOutletId-container').should('have.text', 'Nondigram Agent Banking Outlet')

        // cy.get(this.getSelectBranchEl).select('1', { force: true })

        // cy.get(this.getSelectBranchEl).should('have.value', '1')

        // cy.get('#select2-ReceivingBranchId-container').should('have.text', 'Gulshan Branch')

        cy.wait(2000)

    }

    submitButton() {
        cy.get(this.getclicksubmitbuttonEl).click();

    }

    debitCardSucessfullButton() {

        // cy.get(".modal-footer").click();
        //cy.get(this.getOkButton).should('be.visible');

        cy.get(this.getOkButton).click({ force: true });
        cy.get(this.getOkButton).click();

        // cy.contains('OK').should('be.visible');
        cy.wait(2000)

        // cy.xpath(this.getOkButton).should('be.visible');
        // cy.xpath(this.getOkButton).click();
        // cy.contains('OK').should('be.visible');
        // cy.contains('OK').click();
    }

    saveAndSubmitButton() {
        cy.get(this.getSaveAndSubmitButtonEl).click();

    }

    accountSearch() {

        return cy.get(this.getAccountNumberOrReferenceEl);
    }

    buttonSearch() {

        cy.get(this.getSearcButtonEl).click();
    }

    GetRefernece(){
        cy.get('td.referenceNumber').eq(0).then($el => {
             cy.wait(1000)
             const data = $el.text();
            localStorage.setItem("ReferenceNumber", data);

            }); 
        }

    accountSubmitButton() {
        cy.get("a[class='btn btn-info btn-xs']").click();
        
    }


}