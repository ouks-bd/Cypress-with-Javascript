export class GenerateCard {

    getAccountSearchEl = "#AccountNumberOrReference"
    getSearcButtonEl = '#btnSearch > span'

    getSendButtonEl = '.odd > :nth-child(3) > .btn'
    getCardType = "#cardType_1503230321010001"

    getNavBar = '.sidebar-header'
    getCardSubType = "#cardSubType_1503230321010001"



    searchaccountnumber() {
        return cy.get(this.getAccountSearchEl).click()
        // cy.get(this.getAccountSearchEl).type()
    }

    buttonSearch() {

        cy.get(this.getSearcButtonEl).click();
        cy.wait(2000)

    }


    sendCardToHandoverToGss() {
        cy.get(this.getSendButtonEl).click();
    }

    selectCardType() {

        //cbs factch
        cy.get('.btn.btn-success.btn-xs').eq(0).click();

        cy.wait(1000)

        cy.get('td.referenceNumber').eq(0).then($el => {
            cy.wait(1000)
            // Use jQuery to get data from the element
            const data = $el.text();
            // Construct a locator string using the data
            const locator = `#cardType_${data}`;
            const SubType = `#cardSubType_${data}`;
            cy.wait(1000)
            cy.get(this.getNavBar).click({ force: true });
            cy.wait(2000)
            cy.get(locator).select(1);
            cy.get(SubType).select(1);
            cy.get("a[class='btn btn-info btn-xs']").eq(0).click();
            cy.wait(2000)
        });
    }

    selectCardTypeForAgentBanking() {

        cy.get('td.referenceNumber').eq(0).then($el => {
            // cy.get('#GenerateDebitCardTable > tbody > .odd > .referenceNumber').then($el => {
            cy.wait(1000)
            // Use jQuery to get data from the element
            const data = $el.text();

            // Construct a locator string using the data
            const locator = `#cardType_${data}`;
            cy.wait(1000)
            cy.get(this.getNavBar).click({ force: true });

            cy.wait(2000)
            // Use the locator to select another element

            //var getValue = document.getElementById('ddlViewBy').selectedOptions[0].value;

            cy.get(locator).select('VEPTM').should('have.value', 'VEPTM')
            // yields <option value="456">apples</option>
            //cy.get(locator).select(0);

            cy.wait(2000)
            //cy.xpath("(//a[@value='Send'][normalize-space()='Send'])[1]").click();
            //cy.get('.odd > :nth-child(3) > .btn').click();
            // cy.xpath("//a[@value='Send']").click();

            cy.get("a[class='btn btn-info btn-xs']").eq(0).click();
        });
    }


    //No need to select because IF I select card type than system automatically select Card Sub-Type

    selectCardSubType() {
        cy.get(this.getCardSubType).select('VECLS').should('have.value', 'VECLS')

    }

}