/// <reference types="cypress" />
import { Dashboard } from "../../Pages/DashBoard/Dashboard.cy";
import { CallCenterValidate } from "../../Pages/ChequeBook/ValidateChequeBookByCallCenterChecker.cy";
import { LoginPage } from "../../Pages/LogIn/login.cy";


describe('E2E Call Center Checker ', function () {

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


    it('TC001 - Login as Call Center Checker and Approved The Cheque Book', function () {
        const login = new LoginPage()
        const dashboard = new Dashboard()
        const validateChequeBook = new CallCenterValidate()


        dashboard.ValidateRequest();

        cy.wait(500)

        const Number = localStorage.getItem("ReferenceNumber");
        validateChequeBook.searchaccountnumber(Number)

        validateChequeBook.buttonSearch();

        cy.wait(5000)

        validateChequeBook.approvedButtonClick();
        //validateChequeBook.SucessfullButton();


    })

})

