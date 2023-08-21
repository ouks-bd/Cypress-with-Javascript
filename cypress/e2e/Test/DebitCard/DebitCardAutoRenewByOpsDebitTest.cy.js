/// <reference types="cypress" />
import { Dashboard } from "../../Pages/DashBoard/Dashboard.cy";
import { LoginPage } from "../../Pages/LogIn/login.cy";
import { AutoRenew } from "../../Pages/DebitCard/DebitCardAutoRenewByOpsDebit.cy";


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
    // const login = new LoginPage()



    it('TC001 - Generate Card By Ops Debit Test', function () {

        const dashboard = new Dashboard()


        const autorenew = new AutoRenew()

        dashboard.AutoRenewDebitCard()

        cy.wait(4000)

        autorenew.autorenewButton();
        autorenew.GetRefernece();
        cy.wait(5000)

        autorenew.accountSubmitButton();



    })

})

