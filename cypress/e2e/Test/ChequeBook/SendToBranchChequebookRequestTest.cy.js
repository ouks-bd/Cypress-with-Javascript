/// <reference types="cypress" />
import { Dashboard } from "../../Pages/DashBoard/Dashboard.cy";
import { LoginPage } from "../../Pages/LogIn/login.cy";
import { SendToBranch } from "../../Pages/ChequeBook/SendToBranchChequebookRequest.cy";


describe('E2E Operation User ', function () {

    before(function () {
        cy.fixture('TestData').then(function (testdata) {
            this.testdata = testdata

            const login = new LoginPage()

            login.navigate()

            login.enterUsername().type(this.testdata.OpsCheque)
            login.enterPassword().type(this.testdata.password01)
            login.clickLogin()

        })
    })


    it('TC001 - Login as Operation User and Request Send to Branch', function () {
        const login = new LoginPage()
        const dashboard = new Dashboard()
        const sendToBranch = new SendToBranch()


         dashboard.SendToBranch();

        // const Number = localStorage.getItem("ReferenceNumber");
        // sendToBranch.searchaccountnumber(Number)
        sendToBranch.searchaccountnumber().type(this.testdata.AccountNumberForChequeBook)
            
        sendToBranch.buttonSearch();
        
        sendToBranch.accountSubmitButton();

    })

})

