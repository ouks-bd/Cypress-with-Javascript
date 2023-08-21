/// <reference types="cypress" />
import { Dashboard } from "../../Pages/DashBoard/Dashboard.cy";
import { ValidateFirstOrder } from "../../Pages/DebitCard/ValidateDebitCardFirstOrderByOpsChecker.cy";
import { LoginPage } from "../../Pages/LogIn/login.cy";
import { InitiateDebitFromOps } from "../../Pages/DebitCard/InitiateDebitCardByOpsUserMaker.cy";



describe('E2E Opa User Maker ', function () {

    this.beforeEach(function () {
        cy.fixture('TestData').then(function (testdata) {
            this.testdata = testdata
            const login = new LoginPage()

            login.navigate()

            login.enterUsername().type(this.testdata.OpsChecker)
            login.enterPassword().type(this.testdata.password01)
            login.clickLogin()

        })
    })


    it('TC001 - Login as Ops User and Validate Request', function () {
        const login = new LoginPage()
        const dashboard = new Dashboard()
        const validatedebitcard = new ValidateFirstOrder()
        const reference = new InitiateDebitFromOps()

        dashboard.FirstOrderDebitValidateRequest();

        const Number = localStorage.getItem("ReferenceNumber");
        validatedebitcard.searchaccountnumber(Number)


        validatedebitcard.buttonSearch()
        // validatedebitcard.ApproveButton()
        cy.wait(6000)
        validatedebitcard.accountSubmitButton()
        validatedebitcard.FinalApprovedButton();


    })


})

