
export class InitiateDebitCardByCallCenter {

    getinputAccountNumberEl = '#SearchAccountNumberId'
    getserarchAccountNumberEl = '#AccountInfoSerachDiv > :nth-child(2) > .btn'

    getSelectCardTypeEl = '#RequestingCardTypeId'
    getSelectBranchEl = '#ReceivingBranchId'


    getMailingAddressEl = '#MailingAddressDeliveryId'
    getclicksubmitbuttonEl = '.offset-4 > .btn-primary'

    getAccountNumberOrReferenceEl = '#AccountNumberOrReference'
    getSearcButtonEl = '#btnSearch > span'

    getRefernceNumberEl = "//td[contains(@class,'referenceNumber')]"
    debitcardsucessEl = '.modal-footer > .btn'
    getOkButton = '.modal-footer'



    searchAccoutNumber() {
        return cy.get(this.getinputAccountNumberEl);
    }

    searchAccoutNumberClick() {
        cy.get(this.getserarchAccountNumberEl).click();

         //need to add in a new function which called close button
         //cy.get('#DynamicModalCloseBtn').click();
    }

    selectCard() {
        cy.get(this.getSelectCardTypeEl).select('VISA DEBIT CARD').should('have.value', '111')


    }

    selectMailingAddress() {
        cy.get(this.getMailingAddressEl).click();
    }

    selectBranch() {

        cy.get(this.getSelectBranchEl).select('1', { force: true })

        cy.get(this.getSelectBranchEl).should('have.value', '1')

        cy.get('#select2-ReceivingBranchId-container').should('have.text', 'Gulshan Branch')

        cy.wait(2000)

    }

    GetRefernece(){
        cy.get('td.referenceNumber').eq(0).then($el => {
             cy.wait(1000)
             const data = $el.text();
            localStorage.setItem("ReferenceNumber", data);

            }); 
        }


    submitButton() {
        cy.get(this.getclicksubmitbuttonEl).click();

        cy.wait(2000)

    }

    accountSearch() {

        return cy.get(this.getAccountNumberOrReferenceEl);
    }

    buttonSearch() {

        cy.get(this.getSearcButtonEl).click();
    }

    // getRefernceNumber() {

    //    cy.readFile('cypress/fixtures/Debit_Card_Delivery_To _Customer.xlsx').then((workbook) => {
    //     const worksheet = workbook.Sheet['Sheet']; // Replace 'Sheet1' with your sheet name
    //     const cellAddress = 'B2'; // Replace with the address of the cell in which you want to write the locator text
    //     const locatorText = '.odd > :nth-child(6)'; // Replace with your locator text

    //     worksheet[cellAddress] = { t: 's', v: locatorText };
    //     cy.writeFile('cypress/fixtures/data.xlsx', workbook, { bookType: 'xlsx', type: 'binary' });
    //   });


    //  }

    accountSubmitButton() {
        cy.get("a[class='btn btn-info btn-xs']").eq(0).click();

    }

}