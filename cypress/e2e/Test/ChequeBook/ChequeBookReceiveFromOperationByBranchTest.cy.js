/// <reference types="cypress" />
import { Dashboard } from "../../Pages/DashBoard/Dashboard.cy";
import { LoginPage } from "../../Pages/LogIn/login.cy";
import { ReceiveFromOperation } from "../../Pages/ChequeBook/ChequeBookReceiveFromOperationByBranch.cy";


describe('E2E Branch User ', function () {

    before(function () {
        cy.fixture('TestData').then(function (testdata) {
            this.testdata = testdata

            const login = new LoginPage()

            login.navigate()

            login.enterUsername().type(this.testdata.BranchUserMaker)
            login.enterPassword().type(this.testdata.password01)
            login.clickLogin()

        })
    })


    it('TC001 - Login as Branch User and Recevied ChequeBook From Operation', function () {
        const dashboard = new Dashboard()
        const receviedfromoperation  = new ReceiveFromOperation()


         dashboard.ChequeBookReceivedFromVendor();

        // const Number = localStorage.getItem("ReferenceNumber");
        // receviedfromoperation.searchaccountnumber(Number)

        receviedfromoperation.searchaccountnumber().type(this.testdata.AccountNumberForChequeBook)
        receviedfromoperation.buttonSearch();
        receviedfromoperation.accountSubmitButton();
        


    })

})

