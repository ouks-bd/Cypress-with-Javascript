/// <reference types="cypress" />
import { Dashboard } from "../../Pages/DashBoard/Dashboard.cy";
import { InitiateChequeBookCallCenter } from "../../Pages/ChequeBook/InitiateChequeBookByCallCenterMaker.cy"
import { LoginPage } from "../../Pages/LogIn/login.cy";



describe('E2E Call Center User Maker ', function () {

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


    context("E2E Cheque Book Initiate", () => {



        it('TC001 - Login as Call Center and Initiate Cheque Request', function () {
            const login = new LoginPage()
            const dashboard = new Dashboard()
            const initiatechequebook = new InitiateChequeBookCallCenter()



            dashboard.ChequeBookInitiate();

            initiatechequebook.searchAccoutNumber().type(this.testdata.AccountNumberForChequeBook)
            initiatechequebook.searchAccoutNumberClick();


            initiatechequebook.selectBranch();

            initiatechequebook.submitButton();

            initiatechequebook.ChequeBookSucessfullButton();


        })


        it('TC002 - Submit the Account for Approved', function () {
            const dashboard = new Dashboard()
            const initiatechequebook = new InitiateChequeBookCallCenter()

            dashboard.ChequeBookInitiate();

            initiatechequebook.accountSearch().type(this.testdata.AccountNumberForChequeBook)
            initiatechequebook.buttonSearch();

            cy.wait(5000)

            initiatechequebook.accountSubmitButton();

            initiatechequebook.ChequeBookSucessfullButton();


        })

    })


})