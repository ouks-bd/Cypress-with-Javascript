/// <reference types="cypress" />
import { Dashboard } from "../../Pages/DashBoard/Dashboard.cy";
import { LoginPage } from "../../Pages/LogIn/login.cy";
import { GenerateCard } from "../../Pages/DebitCard/GnerateCardByOpsDebit.cy";


describe('E2E OPS Debitcard ', function () {

    before(function () {
        cy.fixture('TestData').then(function (testdata) {
            this.testdata = testdata

            const login = new LoginPage()

            login.navigate()

            login.enterUsername().type(this.testdata.Production)
            login.enterPassword().type(this.testdata.password01)
            login.clickLogin()
        })
    })
    // const login = new LoginPage()



    it('TC001 - Generate Card By Ops Debit Test', function () {
        const login = new LoginPage()
        const dashboard = new Dashboard()


        const generateCard = new GenerateCard()


        dashboard.productionActivityPage();
        // generateCard.sendCardToHandoverToGss();

       // generateCard.searchaccountnumber().type(this.testdata.AccountNumber)

       const Number = localStorage.getItem("ReferenceNumber");
       generateCard.searchaccountnumber(Number)

        generateCard.buttonSearch();
        cy.wait(5000)
        generateCard.selectCardType();

        
        //generateCard.selectCardSubType();






    })

})

