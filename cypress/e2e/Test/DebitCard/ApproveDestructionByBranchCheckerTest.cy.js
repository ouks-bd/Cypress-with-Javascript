/// <reference types="cypress" />
import { Dashboard } from "../../Pages/DashBoard/Dashboard.cy";
import { ApproveDestruction } from "../../Pages/DebitCard/ApproveDestructionByBranchChecker.cy";
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


    it('TC001 - Login as Branch Checker and Approved The Destruction', function () {
        const login = new LoginPage()
        const dashboard = new Dashboard()
        const ApproveDest = new ApproveDestruction()

        dashboard.ApproveDestruction();

        const Number = localStorage.getItem("ReferenceNumber");
        ApproveDest.searchaccountnumber(Number)
        cy.wait(2000)
        ApproveDest.buttonSearch()
        cy.wait(2000)

        ApproveDest.ApproveButton()


    





    })

})

