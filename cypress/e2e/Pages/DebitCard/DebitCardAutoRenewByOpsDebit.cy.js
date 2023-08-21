export class AutoRenew {


    getAutoRenewButtonEl = '#btnLoadAutoRenew'

    autorenewButton() {
        cy.get(this.getAutoRenewButtonEl).click();
    }

    GetRefernece() {
        cy.get('td.referenceNumber').eq(0).then($el => {
            cy.wait(1000)
            const data = $el.text();
            localStorage.setItem("ReferenceNumber", data);

        });
    }

    accountSubmitButton() {
        cy.get("a[class='btn btn-info btn-xs']").eq(0).click();

    }
}