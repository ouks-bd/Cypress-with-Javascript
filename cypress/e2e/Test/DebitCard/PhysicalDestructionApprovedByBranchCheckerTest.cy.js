/// <reference types="cypress" />
import { Dashboard } from "../../Pages/DashBoard/Dashboard.cy";
import { PhysicalApproveDestruction } from "../../Pages/DebitCard/PhysicalDestructionApproved.cy";
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


    it('TC001 - Login as Branch Checker and Approved Pysical Destruction In DebitCard', function () {
        const login = new LoginPage()
        const dashboard = new Dashboard()
        const PhyApproveDest = new PhysicalApproveDestruction()

        dashboard.ApprovePhysicalDest();

        const Number = localStorage.getItem("ReferenceNumber");
        PhyApproveDest.searchaccountnumber(Number)

        PhyApproveDest.buttonSearch()

        PhyApproveDest.DestroyButton()

   


    })

})

