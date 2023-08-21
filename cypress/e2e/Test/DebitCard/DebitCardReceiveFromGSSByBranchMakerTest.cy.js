/// <reference types="cypress" />
import { Dashboard } from "../../Pages/DashBoard/Dashboard.cy";
import { DebitCradReceivedFromGSS } from "../../Pages/DebitCard/DebitCardReceiveFromGSSByBranchMaker.cy";

import { LoginPage } from "../../Pages/LogIn/login.cy";



describe('E2E Branch User Maker ', function () {

    before(function () {
        cy.fixture('TestData').then(function (testdata) {
            this.testdata = testdata

            const login = new LoginPage()

            login.navigate()


            login.enterUsername().type(this.testdata.BranchUserMaker)
            login.enterPassword().type(this.testdata.password01)
            login.clickLogin()
        })
    })


    it('TC001 - Debit Card Receive from GSS User In Branch Maker', function () {
        const login = new LoginPage()
        const dashboard = new Dashboard()
        const gssReceive = new DebitCradReceivedFromGSS()






        dashboard.receivedFromVendor();

        const Number = localStorage.getItem("ReferenceNumber");
        gssReceive.searchaccountnumber(Number)

        // gssReceive.searchaccountnumber().type(this.testdata.AccountNumber);
        gssReceive.buttonSearch()
        gssReceive.buttonReceive()









    })

})

