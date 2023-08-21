export class Initiatedestruction {

    getCalenderEl = '#SendForDestructionSerachDiv > .row > :nth-child(2) > .form-group > .input-group > .input-group-append > .input-group-text'
    getDeleteButtonEl = '.fa.fa-trash'
    getCloseButtonEl = ':nth-child(3) > a > .fa'
    getDropDownOldEl = '#DaysOldId'
    getSearchButtonEl = "button[id='btnSendForDestruction'] span"
    getFinalCloseButtonEl = '.bootbox-close-button'
    getsSecessFulButtonEl = '.modal-footer > .btn'


    CalenderClose() {
        cy.get(this.getCalenderEl).click()
        cy.get(this.getDeleteButtonEl).click()
        cy.get(this.getCloseButtonEl).click()
    }

    SelectDropdown() {
        cy.get(this.getDropDownOldEl).select('> 90 Days').should('have.value', '2')
    }

    SearchButtonClick() {
        cy.get(this.getSearchButtonEl).click();

    }

    GetRefernece() {
        cy.get('td.referenceNumber').eq(0).then($el => {
            cy.wait(1000)

            const data = $el.text();

            localStorage.setItem("ReferenceNumber", data);

        });
    }
    ConfirmButton() {
        cy.get("a[class='btn btn-info btn-xs']").eq(0).click();

    }

    OkButton() {
        cy.contains("OK").click();
    }

    CloseButton() {
        cy.get(this.getFinalCloseButtonEl).click();
    }

    SucessfulButton() {
        cy.get('button').as('btn'); // Alias the element as '@btn'

        // Perform actions on the aliased element
        cy.get('@btn').click({ multiple: true });
    }
}


