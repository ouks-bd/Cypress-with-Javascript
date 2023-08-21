/// <reference types="cypress" />
import { Dashboard } from "../../Pages/DashBoard/Dashboard.cy";
import { LoginPage } from "../../Pages/LogIn/login.cy";
import { HandoverToGss } from "../../Pages/DebitCard/HandoverToGssByOpsDebit.cy";


describe('E2E OPS Debitcard ', function () {

    before(function () {
        cy.fixture('TestData').then(function (testdata) {
            this.testdata = testdata

            const login = new LoginPage()

            login.navigate()

            login.enterUsername().type(this.testdata.Production)
            login.enterPassword().type(this.testdata.password01)
            login.clickLogin()
        })
    })



    it('TC001 -  HandOver To Gss', function () {
        const login = new LoginPage()
        const dashboard = new Dashboard()
        const handOverToGss = new HandoverToGss()


        dashboard.productionActivityPage();
        // generateCard.sendCardToHandoverToGss();
        handOverToGss.handoverToGss();

        const Number = localStorage.getItem("ReferenceNumber");
        handOverToGss.searchaccountnumber(Number)

        // handOverToGss.searchaccountnumber().type(this.testdata.AccountNumber)
        handOverToGss.buttonSearch();
        handOverToGss.clickHandOverToGss();

    })

})

