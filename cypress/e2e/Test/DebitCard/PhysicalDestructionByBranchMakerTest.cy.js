/// <reference types="cypress" />
import { Dashboard } from "../../Pages/DashBoard/Dashboard.cy";
import { PhysicalDest } from "../../Pages/DebitCard/PhysicalDestructionByBranchMaker.cy";
import { LoginPage } from "../../Pages/LogIn/login.cy";



describe('E2E Branch User Maker ', function () {

    this.beforeEach(function () {
        cy.fixture('TestData').then(function (testdata) {
            this.testdata = testdata
            const login = new LoginPage()

            login.navigate()

            login.enterUsername().type(this.testdata.BranchUserMaker)
            login.enterPassword().type(this.testdata.password01)
            login.clickLogin()

        })
    })

        it('TC001 - Login as Branch Manager and Initiate Physical Destruction', function () {
            const login = new LoginPage()
            const dashboard = new Dashboard()
            const Physicaldestruction = new PhysicalDest()



            dashboard.PysicalDestruction();
            
            const Number = localStorage.getItem("ReferenceNumber");
            Physicaldestruction.searchaccountnumber(Number)

            Physicaldestruction.buttonSearch()

            Physicaldestruction.ApproveButton()
           


        })

})