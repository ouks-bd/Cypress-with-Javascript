/// <reference types="cypress" />

import { CpsLoginPage } from "../../Pages/LogIn/CPS_LogIn.cy"
// import{clickInitiateRequest} from "../pages/Dashboard.cy"

describe('Log In', function () {

    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })

    const login = new CpsLoginPage()
    //const Dashboard = new searchAccoutNumber()


    it("Login", () => {
        login.navigate();

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        })


        let inputValue;
        if (!inputValue) {
            inputValue = "syed2585";
        }
        login.enterUsername().type(inputValue);


        //   .type(this.CPS_Login_username);


        let inputPassword;
        if (!inputPassword) {
            inputPassword = "Abcd@123";
        }
        login.enterPassword().type(inputPassword);

        // login.enterPassword().type(this.CPS_Login_password);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        })

        login.clickLogin();
        login.ModulesClick();
        login.PrintingSytem();
        login.ChequeManagement();
        login.DownloadFromFinacle();
        login.ShowIssued();
        login.SendToVendor();
        cy.wait(2000)
        
        // login.ChequeManagement();
        // login.DownloadFromFinacle();

        // cy.wait(5000)


    });


})
