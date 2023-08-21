export class InitiateDebitFromOps {


    getSearchButtonEl = '#btnSearch > span'
    getCardType = '#CardTypeId'
    getBranchDelivery = '#RecevingBranch05161094'
    getSearchNumber='#AccountNumberOrReference'
    
    // getCardTypeXpath='(//select[@id='CardTypeId'])[1]'

    FromDateSelect() {

        cy.get(':nth-child(2) > .form-group > .input-group > .input-group-append > .input-group-text').click()

        cy.get('#FromDate').invoke('removeAttr', 'readonly')
        cy.get('#FromDate').clear()
        cy.get('#FromDate').type('12/01/2021', { force: true });

        cy.get(':nth-child(3) > a > .fa').click();

    }
    ToDateSelect() {

        cy.get(':nth-child(3) > .form-group > .input-group > .input-group-append > .input-group-text > .fa')
        cy.get('#ToDate').invoke('removeAttr', 'readonly')
        cy.get('#ToDate').clear()
        cy.get('#ToDate').type('12/12/2021', { force: true });

        //cy.get(':nth-child(1) > a > .fa')

    }

    DateSearchButton() {
        cy.get(this.getSearchButtonEl).click()
    }

    searchaccountnumber(){
        return cy.get('#AccountNumberOrReference')  
        //cy.get('#btnSearch > span').click();
     }

    GetRefernece() {
        cy.get('tbody > :nth-child(1) > .accountNo').then($el => {
            // cy.get('#GenerateDebitCardTable > tbody > .odd > .referenceNumber').then($el => {
            // Use jQuery to get data from the element
            const data = $el.text();

            // Construct a locator string using the data
            //  const locator = `${data}`;
            //console.log(`${data}`)

            localStorage.setItem("AccountNumber", data);
            

        });
    }
    accountSubmitButton() {
        // cy.get('a.btn.btn-info.btn-xs[value="Submit"]').eq(0).click({ force: true });

        // cy.get(':nth-child(1) > :nth-child(3) > .btn').click();
        cy.get("a[class='btn btn-info btn-xs']").eq(0).click();

        cy.wait(1000)

    }
    selectBranch() {
        cy.get('td.cifId').eq(0).then($el => {
            cy.wait(1000)
            // Use jQuery to get data from the element
            const data = $el.text();
            // Construct a locator string using the data
            const locator = `#RecevingBranch${data}`;
			 cy.get(locator).select('Gulshan Branch').should('have.value', '1')
		
        });
		
	}	

        

    selectCard() {

    
            // Construct a locator string using the data
            // const locator = `CardTypeId`;
			//  cy.get(locator).select('VISA DEBIT CARD').should('have.value', '111')
            // cy.get("#CardTypeId").select('VISA DEBIT CARD');
            // cy.get("#CardTypeId option:selected").should('have.value', '111');
            
            // cy.get("#CardTypeId option[value='111'][label='VISA DEBIT CARD']").first().then((option) => {
            //     cy.get("#CardTypeId").select(option.val());
            //   });
              
            // cy.get("#CardTypeId option").contains('VISA DEBIT CARD').then((option) => {
            //     cy.get("#CardTypeId").eq(0).select(option.val());
            //   });

        cy.get("#CardTypeId").select('VISA DEBIT CARD').eq(0).should('have.value', '111');
              

        // cy.get(this.getCardType).find('option').filter(':contains("VISA DEBIT CARD")').select().should('have.value', '111');
        // cy.get("#CardTypeId").first().select('VISA DEBIT CARD').eq(0).should('have.value', '111');
       // cy.xpath("(//select[@id='CardTypeId'])[1]").select('VISA DEBIT CARD').should('have.value', '111');
        // cy.xpath("(//select[@id='CardTypeId'])[1]").select('option:contains("VISA DEBIT CARD")').eq(1).should('have.value', '111');
        // cy.get("#CardTypeId")
        //     .select('VISA DEBIT CARD').eq(1)
        //     .should('have.value', '111');

        //cy.get(':nth-child(1) > :nth-child(5) > #CardTypeId').select('VISA DEBIT CARD').eq(0).should('have.value', '111')
        //cy.get(this.getCardType).select('VISA DEBIT CARD').eq(0).should('have.value', '111');
        // cy.get(':nth-child(1) > :nth-child(5) > #CardTypeId')
        //     .contains('option', 'VISA DEBIT CARD')
        //     .eq(0)
        //     .should('have.value', '111');


    }

    sucessButton() {
        cy.get('.modal-body > .text-center').should('have.Text', '1 out of 1 Debit Card request for validation submitted successfully.')
    }




}