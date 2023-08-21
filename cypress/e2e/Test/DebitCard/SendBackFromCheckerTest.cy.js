/// <reference types="cypress" />
import { Dashboard } from "../../Pages/DashBoard/Dashboard.cy";
import { sendbackfromchecker } from "../../Pages/DebitCard/SendBackFromChecker.cy";
import { LoginPage } from "../../Pages/LogIn/login.cy";


describe('E2E Branch User Checker ', function () {

    before(function () {
        cy.fixture('TestData').then(function (testdata) {
            this.testdata = testdata

            const login = new LoginPage()

            login.navigate()

            login.enterUsername().type(this.testdata.BranchUserChecker)
            login.enterPassword().type(this.testdata.password01)
            login.clickLogin()

        })
    })


    it('TC001 - Login as Branch Checker and Send Back The DebitCard', function () {
        const login = new LoginPage()
        const dashboard = new Dashboard()
        const sendback = new sendbackfromchecker()


        dashboard.debitCardValidatePage();

        sendback.searchaccountnumber().type(this.testdata.AccountNumber)
        sendback.buttonSearch();
        sendback.checkerRemarks();
        sendback.RejectButton();
        sendback.confirmButton();



    })

})

