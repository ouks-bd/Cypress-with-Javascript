/// <reference types="cypress" />
import { Dashboard } from "../../Pages/DashBoard/Dashboard.cy";
import { LoginPage } from "../../Pages/LogIn/login.cy";
import { SendToGss } from "../../Pages/ChequeBook/SendToGSSChequebookRequest.cy";


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


    it('TC001 - Login as Operation User and Request Send to GSS', function () {
        const dashboard = new Dashboard()
        const sendtogss = new SendToGss()


         dashboard.SendToGss();

        const Number = localStorage.getItem("ReferenceNumber");
        sendtogss.searchaccountnumber(Number)

        sendtogss.buttonSearch();
        


    })

})

