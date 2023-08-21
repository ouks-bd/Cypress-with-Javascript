/// <reference types="cypress" />
import { Dashboard } from "../../Pages/DashBoard/Dashboard.cy";
import { LoginPage } from "../../Pages/LogIn/login.cy";
import { DebitCardSendToCustomerByGss } from "../../Pages/DebitCard/DebitCardDeliverTorCustomerByGSS.cy";


describe('E2E GSS User ', function () {

    before(function () {
        cy.fixture('TestData').then(function (testdata) {
            this.testdata = testdata

            const login = new LoginPage()

            login.navigate()

            login.enterUsername().type(this.testdata.gss)
            login.enterPassword().type(this.testdata.password01)
            login.clickLogin()

        })
    })
    // const login = new LoginPage()


    it('TC001 - Debit Card Send To Customer By Gss ', function () {
        const login = new LoginPage()
        const dashboard = new Dashboard()
        const sendToCustomer = new DebitCardSendToCustomerByGss()



        dashboard.DebitCardSendToCustomerByGss();

        // sendToCustomer.searchaccountnumber().type(this.testdata.AccountNumber);
        // sendToCustomer.buttonSearch();

        cy.wait(5000)
        sendToCustomer.exportFile();


        // sendToCustomer.getFileUpload().attachFile("Downloads\Debit Card Delivery To Customer.xlsx",
        //     {
        //         subjectType: 'drag-n-drop'
        //     })

        // sendToCustomer.importFile();

      

    })

})

