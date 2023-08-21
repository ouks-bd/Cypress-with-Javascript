/// <reference types="cypress" />
import { Dashboard } from "../../Pages/DashBoard/Dashboard.cy";
import { DebitCardReceiveFromProduction } from "../../Pages/DebitCard/DebitCardReceiveFromProductionByGSS.cy";

import { LoginPage } from "../../Pages/LogIn/login.cy";



describe('E2E GSS User ', function () {

    before(function () {
        cy.fixture('TestData').then(function (testdata) {
            this.testdata = testdata

            const login = new LoginPage()

            login.navigate()

            login.enterUsername().type(this.testdata.gss)
            login.enterPassword().type(this.testdata.password01)
            login.clickLogin()
        })
    })



    it('TC001 - Debit Card Receive from Production User In GSS User ', function () {
        const login = new LoginPage()
        const dashboard = new Dashboard()
        const gssReceive = new DebitCardReceiveFromProduction()



        // login.navigate()


        // login.enterUsername().type(this.testdata.gss)
        // login.enterPassword().type(this.testdata.password01)
        // login.clickLogin()


        dashboard.debitCardReceivePage();

        const Number = localStorage.getItem("ReferenceNumber");
        gssReceive.searchaccountnumber(Number)

        // gssReceive.searchaccountnumber().type(this.testdata.AccountNumber)
        gssReceive.buttonSearch();
        gssReceive.receiveButton();





    })

})

