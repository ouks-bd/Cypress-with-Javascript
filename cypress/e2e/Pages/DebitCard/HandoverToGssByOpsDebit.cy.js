export class HandoverToGss {

    getHandOverToGssTabEl = '[href="#HandoverToGSSTab"]'

    getAccountSearchEl = '#HandoverToGssAccountNumberOrReference'
    getSearcButtonEl = '#btnSearchHandoverToGssItems > span'

    getHandOverToGssButtonEl = '#HandoverToGssDebitCardTable > tbody > :nth-child(1) > :nth-child(3) > .btn'

    getDateEl = '#HandoverToGssDebitCardDiv > #SerachDiv > :nth-child(1) > :nth-child(4) > .form-group > .input-group > .input-group-append > .input-group-text > .fa'
    getDateClearSelectionEl = ':nth-child(2) > a > .fa'
    getDatePickerCloseEl = ':nth-child(3) > a > .fa'



    searchaccountnumber() {
        return cy.get(this.getAccountSearchEl).click()

    }

    buttonSearch() {

        cy.get(this.getSearcButtonEl).click();
    }


    handoverToGss() {
        cy.get(this.getHandOverToGssTabEl).click();
    }


    clickHandOverToGss() {
       //IF Fail Test Case This Account number found in failed request.
        //cy.xpath("//a[@class='btn btn-info btn-xs'][normalize-space()='Handover To GSS']").click();
         
        // cy.get('#HandoverToGssDebitCardTable > tbody > .odd > :nth-child(3) > .btn').click()
        // cy.get("a[class='btn btn-info btn-xs']").eq(0).click({ multiple: true });


          cy.get('a.btn.btn-info.btn-xs').click({ multiple: true });

        //cy.get('a.btn.btn-info.btn-xs').click({force: true});
        cy.wait(2000)

       
    }
}