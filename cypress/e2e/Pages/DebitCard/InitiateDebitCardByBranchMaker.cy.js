export class InitiateDebitCard {


    getinputAccountNumberEl = '#SearchAccountNumberId'
    getserarchAccountNumberEl = '#AccountInfoSerachDiv > :nth-child(2) > .btn'
    getCloseAccountMessageEl="//li[normalize-space()='Account is closed.']"
    getInvalidAccountEl=".validation-summary-errors > ul > li"
    getSelectCardTypeEl = '#RequestingCardTypeId'
    getSelectBranchEl = '#ReceivingBranchId'
    //getclickSaveButtonEl='.offset-4 > .btn-primary'

    getBranchDelivery = '#BranchDeliveryId'

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

        //need to add in a new function which called close button
        //cy.get('#DynamicModalCloseBtn').click();

        cy.wait(8000)
    }

    selectCard() {
        cy.get(this.getSelectCardTypeEl).select('PB PLATINUM').should('have.value', '666')
        //cy.get(this.getBranchDelivery).click();

    }

    selectBranch() {

        cy.get(this.getBranchDelivery).click();

        cy.wait(1000);
        cy.get(this.getSelectBranchEl).select('Gulshan Branch', { force: true })

        cy.get(this.getSelectBranchEl).should('have.value', '1')

         cy.get('#select2-ReceivingBranchId-container').should('have.text', 'Gulshan Branch')
        cy.wait(2000)


        // cy.get(this.getSelectBranchEl).should('have.value', '1')

        // cy.get('#select2-ReceivingBranchId-container').should('have.text', 'Gulshan Branch')

        // cy.wait(2000)

    }

    submitButton() {
        cy.get(this.getclicksubmitbuttonEl).click();

    }

    debitCardSucessfullButton() {
        cy.get(this.getOkButton).click({ force: true });
        cy.get(this.getOkButton).click();
        cy.wait(2000)
    }

    saveAndSubmitButton() {
        cy.get(this.getSaveAndSubmitButtonEl).click();

    }

    GetRefernece(){
        cy.get('td.referenceNumber').eq(0).then($el => {
             cy.wait(1000)
             const data = $el.text();
            localStorage.setItem("ReferenceNumber", data);

            }); 
        }

    accountSearch() {

        return cy.get(this.getAccountNumberOrReferenceEl);
    }

    GetRefernece(){
        cy.get('td.referenceNumber').eq(0).then($el => {
             cy.wait(1000)
             const data = $el.text();
            localStorage.setItem("ReferenceNumber", data);

            }); 
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


    closeAccountMessage(){
        cy.xpath("//li[normalize-space()='Account is closed.']").should('have.text', 'Account is closed.')
    }

    
    DormentAccountMessage(){
        cy.xpath("//li[normalize-space()='Account is dormant.']").should('have.text', 'Account is dormant.')
    }
   
    InvalidAccountMessage(){
       
        cy.get(this.getInvalidAccountEl).should('have.text', 'Account is not exist in system or invalid account number.')
    }

   
    accountSubmitButton() {
        cy.get("a[class='btn btn-info btn-xs']").eq(0).click();
        
    }




}