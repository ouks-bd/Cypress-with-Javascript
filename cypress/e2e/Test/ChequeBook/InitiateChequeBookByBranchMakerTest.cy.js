/// <reference types="cypress" />
import { Dashboard } from "../../Pages/DashBoard/Dashboard.cy";
import { InitiateChequeBook } from "../../Pages/ChequeBook/InitiateChequeBookByBranchMaker.cy"
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


    context("E2E Cheque Book Initiate", () => {



        it('TC001 - Login as Branch Manager and Initiate Request', function () {
            const login = new LoginPage()
            const dashboard = new Dashboard()
            const initiatechequebook = new InitiateChequeBook()



            dashboard.ChequeBookInitiate();

            initiatechequebook.searchAccoutNumber().type(this.testdata.AccountNumberForChequeBook)
            initiatechequebook.searchAccoutNumberClick();

            cy.wait(5000)

            initiatechequebook.CloseButtonClick();

            initiatechequebook.selectBranch();

            initiatechequebook.submitButton();

            initiatechequebook.debitCardSucessfullButton();


        })


        it('TC002 - Submit the Account for Approved', function () {
            const dashboard = new Dashboard()
            const initiatechequebook = new InitiateChequeBook()

            dashboard.ChequeBookInitiate();

            initiatechequebook.accountSearch().type(this.testdata.AccountNumberForChequeBook)
            initiatechequebook.buttonSearch();

            initiatechequebook.accountSubmitButton();

            initiatechequebook.debitCardSucessfullButton();


        })

    })


})