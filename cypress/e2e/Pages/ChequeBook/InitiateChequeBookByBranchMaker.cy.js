export class InitiateChequeBook {


    getinputAccountNumberEl = '#SearchAccountNumberId'
    getserarchAccountNumberEl = '#AccountInfoSerachDiv > :nth-child(2) > .btn'
    getSelectBranchEl = '#ReceivingBranchId'
    getSelectMailingAddress = '#MailingAddressDeliveryId'


    getBranchDelivery = '#BranchDeliveryId'

    getclicksubmitbuttonEl = '.offset-4 > .btn-primary'
    getAccountNumberOrReferenceEl = '#AccountNumberOrReference'
    getSearcButtonEl = '#btnSearch > span'
    getSubmitButtonEl = '.odd > :nth-child(3) > .btn'

    debitcardsucessEl = '.modal-footer > .btn'
    getOkButton = '.modal-footer'


    searchAccoutNumber() {
        return cy.get(this.getinputAccountNumberEl);
        //cy.get(this.getserarchAccountNumberEl).click();
    }

    searchAccoutNumberClick() {
        cy.get(this.getserarchAccountNumberEl).click();
    }

    CloseButtonClick(){
        cy.get('#DynamicModalCloseBtn').click();
    }

    selectBranch() {

        // cy.get(this.getSelectBranchEl).should('be.visible').select('1', { force: true }); // Wait for element to be visible, then select option
        // cy.get(this.getSelectBranchEl).invoke('css', 'display').should('not.equal', 'none'); // Check if element has display property set to 'none'
        // cy.get(this.getSelectBranchEl).scrollIntoView().select('1', { force: true }); // Scroll to element and then select option
        // cy.get(this.getSelectBranchEl).should('not.be.hidden').select('1', { force: true }); // Check if element is hidden behind other elements, then select option
        // cy.get(this.getSelectBranchEl).should('have.css', 'visibility', 'visible').select('1', { force: true }); // Check if element has 'visibility' property set to 'visible', then select option



        cy.get(this.getSelectBranchEl).select('Gulshan Branch', { force: true })
        cy.get(this.getSelectBranchEl).should('have.value', '1')
         cy.get('#select2-ReceivingBranchId-container').should('have.text', 'Gulshan Branch')
        // cy.wait(2000)

    }

    submitButton() {
        cy.get(this.getclicksubmitbuttonEl).click();

    }

    debitCardSucessfullButton() {

        cy.get(this.getOkButton).should('be.visible').click();
        cy.get(this.getOkButton).should('not.be.hidden', { force: true }).click();
        // cy.get(this.getOkButton).scrollIntoView().click();
        //cy.get(this.getOkButton).should('have.css', 'opacity', '1',{force: true}).click();
        //cy.iframe('iframe-selector').find(this.getOkButton).should('be.visible').click();

        // cy.get(".modal-footer").click();
        //cy.get(this.getOkButton).should('be.visible');

        // cy.get(this.getOkButton).click({ force: true });
        // cy.get(this.getOkButton).click();

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

    GetRefernece() {
        cy.get('td.referenceNumber').eq(0).then($el => {
            cy.wait(1000)
            const data = $el.text();
            localStorage.setItem("ReferenceNumber", data);

        });
    }

    accountSubmitButton() {
        cy.get("tr[class='odd'] a[value='Submit']").eq(0).click();
    }




}