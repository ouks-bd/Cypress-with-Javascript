/// <reference types="cypress" />
import { Dashboard } from "../../Pages/DashBoard/Dashboard.cy";
import { ValidateDebitCard } from "../../Pages/DebitCard/ValidateDebitCardByBranchChecker.cy.js";
import { LoginPage } from "../../Pages/LogIn/login.cy";


describe('E2E Branch User Checker ', function () {

    before(function () {
        cy.fixture('TestData').then(function (testdata) {
            this.testdata = testdata

            const login = new LoginPage()

            login.navigate()

            login.enterUsername().type(this.testdata.CallCenterCheker)
            login.enterPassword().type(this.testdata.password01)
            login.clickLogin()

        })
    })


    it('TC001 - Login as Call Center Checker and Approved The DebitCard', function () {
        const login = new LoginPage()
        const dashboard = new Dashboard()
        const validatedebitcard = new ValidateDebitCard()


        dashboard.debitCardValidatePage();

        // validatedebitcard.searchaccountnumber().type(this.testdata.AccountNumber)

        
        const Number = localStorage.getItem("ReferenceNumber");
        validatedebitcard.searchaccountnumber(Number)
        
        validatedebitcard.buttonSearch();

        cy.wait(5000)

        validatedebitcard.approvedButtonClick();
        validatedebitcard.okButtonClick();


        //validatedebitcard.approvedButton();
        //validatedebitcard.getSucessOkButton();




    })

})

