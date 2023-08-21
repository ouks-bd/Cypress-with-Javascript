export class DebitCardDeliverToCustomer {

    getAccountSearchEl = "#DeliverAccountNumberOrReference"
    getSearcButtonEl = '#btnDeliverSearch > span'

    // getOkbuttonEl='.modal-footer > .btn-primary'
    // getSucessOkButton="//button[normalize-space()='OK']"

    searchaccountnumber() {
        return cy.get(this.getAccountSearchEl)

    }

    buttonSearch() {

        cy.get(this.getSearcButtonEl).click();
    }

    buttonDeliver() {
       // cy.get("tr[class='odd'] a[value='Submit']").click();
       // cy.get('#DebitcardDeliverRequestTable > tbody > .odd > :nth-child(3) > .btn').click();
        //cy.get("a[value='Submit']").click();
        cy.xpath("//a[normalize-space()='Deliver']").eq(0).click();
    }

}