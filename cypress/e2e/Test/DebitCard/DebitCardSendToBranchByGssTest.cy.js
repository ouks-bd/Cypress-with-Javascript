/// <reference types="cypress" />
import { Dashboard } from "../../Pages/DashBoard/Dashboard.cy";
import { LoginPage } from "../../Pages/LogIn/login.cy";
import { DebitCardSendToBranch, GenerateCard } from "../../Pages/DebitCard/DebitCardSendToBranchByGss.cy";


describe('E2E GSS User ', function () {

    before(function () {
        cy.fixture('TestData').then(function (testdata) {
            this.testdata = testdata

            // login.navigate()

            // login.enterUsername().type(this.testdata.gss)
            // login.enterPassword().type(this.testdata.password01)
            // login.clickLogin()
        })
    })
    // const login = new LoginPage()


    it('TC001 - Debit Card Send To Branch By Gss ', function () {
        const login = new LoginPage()
        const dashboard = new Dashboard()
        const sendToBranch = new DebitCardSendToBranch()


        login.navigate()

        login.enterUsername().type(this.testdata.gss)
        login.enterPassword().type(this.testdata.password01)
        login.clickLogin()

        dashboard.debitCardSendPage();

        const Number = localStorage.getItem("ReferenceNumber");
        sendToBranch.searchaccountnumber(Number)

        // sendToBranch.searchaccountnumber().type(this.testdata.AccountNumber)
        sendToBranch.buttonSearch();

        sendToBranch.sendToBranchButton();




    })

})

