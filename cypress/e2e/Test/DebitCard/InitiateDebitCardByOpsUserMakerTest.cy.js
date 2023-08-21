/// <reference types="cypress" />
import { Dashboard } from "../../Pages/DashBoard/Dashboard.cy";
import { InitiateDebitFromOps } from "../../Pages/DebitCard/InitiateDebitCardByOpsUserMaker.cy";
import { LoginPage } from "../../Pages/LogIn/login.cy";



describe('E2E Ops User Maker ', function () {

    this.beforeEach(function () {
        cy.fixture('TestData').then(function (testdata) {
            this.testdata = testdata
            const login = new LoginPage()

            login.navigate()

            login.enterUsername().type(this.testdata.OpsUser)
            login.enterPassword().type(this.testdata.OpsPassword)
            login.clickLogin()

        })
    })


    it('TC001 - Login as Ops User and Initiate Request from First Order', function () {
        const login = new LoginPage()
        const dashboard = new Dashboard()
        const initiatedebitcard = new InitiateDebitFromOps()

        dashboard.InitiateFirstOrderRequest();

        initiatedebitcard.FromDateSelect();
        initiatedebitcard.ToDateSelect();
        initiatedebitcard.DateSearchButton();

        cy.wait(20000)

        initiatedebitcard.GetRefernece();

        // const Number = localStorage.getItem("AccountNumber");
        // initiatedebitcard.searchaccountnumber(Number)
        // initiatedebitcard.DateSearchButton();


        cy.wait(10000)

        initiatedebitcard.selectBranch();
        initiatedebitcard.selectCard();
        cy.wait(5000)

        initiatedebitcard.accountSubmitButton();
        cy.wait(5000)

        //initiatedebitcard.selectCard();
        // cy.wait(50000)
        // initiatedebitcard.accountSubmitButton();
        //initiatedebitcard.sucessButton();



    })


})


