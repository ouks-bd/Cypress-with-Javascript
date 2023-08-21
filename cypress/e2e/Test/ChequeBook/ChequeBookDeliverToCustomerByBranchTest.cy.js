/// <reference types="cypress" />
import { Dashboard } from "../../Pages/DashBoard/Dashboard.cy";
import { LoginPage } from "../../Pages/LogIn/login.cy";
import { DeliverdToCustomer } from "../../Pages/ChequeBook/ChequeBookDeliverToCustomerByBranch.cy";


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


    it('TC001 - Login as Branch User and Deliver To Customer', function () {
        const dashboard = new Dashboard()
        const deliveredtocustomer  = new DeliverdToCustomer()


         dashboard.ChequeBookDeliverToCustomer();

        // const Number = localStorage.getItem("ReferenceNumber");
        // deliveredtocustomer.searchaccountnumber(Number)

        deliveredtocustomer.searchaccountnumber().type(this.testdata.AccountNumberForChequeBook);
        deliveredtocustomer.buttonSearch();
            cy.on('uncaught:exception', (err, runnable) => {
            return false;
        })

        deliveredtocustomer.accountSubmitButton();
        


    })

})

