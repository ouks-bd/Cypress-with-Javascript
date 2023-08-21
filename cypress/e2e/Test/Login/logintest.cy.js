/// <reference types="cypress" />

import { LoginPage } from "../../Pages/LogIn/login.cy"
// import{clickInitiateRequest} from "../pages/Dashboard.cy"

describe('E2E Revamp Log In', function () {

  before(function () {
    cy.fixture('example').then(function (data) {
      this.data = data
    })
  })


  const login = new LoginPage()
  //const Dashboard = new searchAccoutNumber()


  it("Login", () => {
    login.navigate();
    login.enterUsername();
    login.enterPassword();
    login.clickLogin();


    // Dashboard.clickDebitCard();
    // Dashboard.clickInitiateRequest();
    // Dashboard.inputAccountNumber();
    // Dashboard.cliclickOnSearchButton();
    // cy.wait(50000)

    //  login.clickDebitCard();
    //    login.clickInitiateRequest();

  });



  // it("Initiate Debit Card Request", () => {

  //     Dashboard.clickDebitCard();

  //     cy.wait(500)
  //     Dashboard.clickInitiateRequest();
  //     cy.wait(500)
  //     Dashboard.inputAccountNumber();
  //     cy.wait(500)
  //     Dashboard.cliclickOnSearchButton();

  //     cy.wait(50000)

  // });


})
