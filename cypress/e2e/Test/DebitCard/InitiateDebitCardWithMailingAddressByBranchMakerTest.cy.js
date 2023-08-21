/// <reference types="cypress" />
import { Dashboard } from "../../Pages/DashBoard/Dashboard.cy";
import { InitiateDebitCard } from "../../Pages/DebitCard/InitiateDebitCardWithMailingAddressByBranchMaker.cy";
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


    context("E2E Debit Card Initiate", () => {

        it('TC001 - Login as Branch Manager and Initiate Request', function () {
            const login = new LoginPage()
            const dashboard = new Dashboard()
            const initiatedebitcard = new InitiateDebitCard()



            dashboard.debitCardInitiationPage();

            

            initiatedebitcard.searchAccoutNumber().type(this.testdata.AccountForMailingAddress)
            initiatedebitcard.searchAccoutNumberClick();

           // initiatedebitcard.selectCard();
            
            initiatedebitcard.selectMailingAddress();

            initiatedebitcard.selectBranch();
            

            initiatedebitcard.submitButton();

            //initiatedebitcard.debitCardSucessfullButton();


        })


        it('TC002 - Submit the Account for Checker Approved', function () {
            const dashboard = new Dashboard()
            const initiatedebitcard = new InitiateDebitCard()

            dashboard.debitCardInitiationPage();

            initiatedebitcard.accountSearch().type(this.testdata.AccountNumber)
            initiatedebitcard.buttonSearch();

            //initiatedebitcard.getRefernceNumber();

            initiatedebitcard.accountSubmitButton();
            cy.wait(2000)






        })

    })


})