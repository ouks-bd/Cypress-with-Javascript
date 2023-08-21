/// <reference types="cypress" />
import { Dashboard } from "../../Pages/DashBoard/Dashboard.cy";
import { Initiatedestruction } from "../../Pages/DebitCard/InitiateDestructionByBranchMaker.cy";
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

        it('TC001 - Login as Branch Manager and Initiate Destruction', function () {
            const login = new LoginPage()
            const dashboard = new Dashboard()
            const destruction = new Initiatedestruction()



            dashboard.InitiateDestrcution();
            destruction.CalenderClose();
            destruction.SelectDropdown();
            destruction.SearchButtonClick();
            cy.wait(2000)
            destruction.GetRefernece();
            
            destruction.ConfirmButton();
            destruction.OkButton();
            destruction.CloseButton();
            //destruction.SucessfulButton();

           


        })

})