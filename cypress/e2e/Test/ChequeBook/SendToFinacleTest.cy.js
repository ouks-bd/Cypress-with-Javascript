/// <reference types="cypress" />
import { Dashboard } from "../../Pages/DashBoard/Dashboard.cy";
import { SendToFinacle } from "../../Pages/ChequeBook/SendToFinacle.cy";
import { LoginPage } from "../../Pages/LogIn/login.cy";


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


    it('TC001 - Login as Operation User and Request Send to Finacle', function () {
        const login = new LoginPage()
        const dashboard = new Dashboard()
        const sendToFinacle = new SendToFinacle()


         dashboard.SendToFinacle();

        const Number = localStorage.getItem("ReferenceNumber");
        //sendToFinacle.searchaccountnumber(Number)
        sendToFinacle.searchaccountnumber().type(this.testdata.AccountNumberForChequeBook)

        sendToFinacle.buttonSearch();
        sendToFinacle.accountSubmitButton();

        
        sendToFinacle.SucessfullButton();
        // sendToFinacle.Reports();
    })

})

