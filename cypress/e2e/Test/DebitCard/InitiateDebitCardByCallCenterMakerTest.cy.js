/// <reference types="cypress" />
import { Dashboard } from "../../Pages/DashBoard/Dashboard.cy";
import { InitiateDebitCardByCallCenter } from "../../Pages/DebitCard/InitiateDebitCardByCallCenterMaker.cy";
import { LoginPage } from "../../Pages/LogIn/login.cy";



describe('E2E Branch User Maker ', function () {

    this.beforeEach(function () {
        cy.fixture('TestData').then(function (testdata) {
            this.testdata = testdata
            const login = new LoginPage()

            login.navigate()

            login.enterUsername().type(this.testdata.CallCenterMaker)
            login.enterPassword().type(this.testdata.password01)
            login.clickLogin()

        })
    })


    context("Debit Card Initiate Call Center", () => {

        it('TC001 - Login as Call Center Maker and Initiate Request', function () {
            const login = new LoginPage()
            const dashboard = new Dashboard()
            const initiatedebitcard = new InitiateDebitCardByCallCenter()



            dashboard.debitCardInitiationPage();

            initiatedebitcard.searchAccoutNumber().type(this.testdata.AccountForCallCenter)
            initiatedebitcard.searchAccoutNumberClick();

            cy.wait(5000)

           // initiatedebitcard.selectCard();
            initiatedebitcard.selectBranch();
            
            initiatedebitcard.submitButton();

            //initiatedebitcard.debitCardSucessfullButton();


        })

        it('TC002 - Submit the Account for Checker Approved', function () {
            const dashboard = new Dashboard()
            const initiatedebitcard = new InitiateDebitCardByCallCenter()

            dashboard.debitCardInitiationPage();

            initiatedebitcard.accountSearch().type(this.testdata.AccountForCallCenter)
            initiatedebitcard.buttonSearch();

            initiatedebitcard.GetRefernece();

            initiatedebitcard.accountSubmitButton();
            cy.wait(2000)





        })

    })


})