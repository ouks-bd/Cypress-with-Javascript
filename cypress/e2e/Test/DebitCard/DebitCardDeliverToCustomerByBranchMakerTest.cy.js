/// <reference types="cypress" />
import { Dashboard } from "../../Pages/DashBoard/Dashboard.cy";
import { DebitCardDeliverToCustomer } from "../../Pages/DebitCard/DebitCardDeliverToCustomerByBranchMaker.cy";

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


    it('TC001 - Debit Card Deliver To Customer By Branch Maker', function () {
        const login = new LoginPage()
        const dashboard = new Dashboard()
        const BranchDeliver = new DebitCardDeliverToCustomer()




        dashboard.DebitCardDelivertoCustomer();


        const Number = localStorage.getItem("ReferenceNumber");
        BranchDeliver.searchaccountnumber(Number)

        // BranchDeliver.searchaccountnumber().type(this.testdata.AccountNumber)
        BranchDeliver.buttonSearch();
        cy.wait(5000)
        BranchDeliver.buttonDeliver();

        // gssReceive.receiveButton();





    })

})

