/// <reference types="cypress" />
import { Dashboard } from "../../Pages/DashBoard/Dashboard.cy";
import { ValidateChequeBook } from "../../Pages/ChequeBook/ValidateChequeBookByBranchChecker.cy";
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


    it('TC001 - Login as Branch Checker and Approved The Cheque Book', function () {
        const login = new LoginPage()
        const dashboard = new Dashboard()
        const validateChequeBook = new ValidateChequeBook()


        dashboard.ValidateRequest();

        const Number = localStorage.getItem("ReferenceNumber");
        // validateChequeBook.searchaccountnumber(Number)
        validateChequeBook.searchaccountnumber().type(this.testdata.AccountNumberForChequeBook)

        validateChequeBook.buttonSearch();
        validateChequeBook.approvedButtonClick();
        //validateChequeBook.SucessfullButton();


    })

})

