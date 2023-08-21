const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    // Need to Run Bellow Three Test Suite For Cheque Book Regression Branch User one by one

     //specPattern: 'cypress/e2e/TestSuite/ChequeBookInitiateByBranch.cy.js',
     //specPattern : 'cypress/e2e/TestSuite/ChequePrintingSyatem.cy.js',
     //specPattern : 'cypress/e2e/TestSuite/ChequeReceivedAndDelivery.cy.js',

    // Need to Run Bellow Three Test Suite For Cheque Book Regression Call Center User one by one

    // specPattern: 'cypress/e2e/TestSuite/ChequeBookInitiateByCallCenter.cy.js',
    // specPattern : 'cypress/e2e/TestSuite/ChequePrintingSyatem.cy.js',
    // specPattern : 'cypress/e2e/TestSuite/ChequeReceivedAndDelivery.cy.js',
    

    //specPattern: 'cypress/e2e/TestSuite/DebitCardAutoRenewByOpsDebit.cy.js',
    //specPattern: 'cypress/e2e/TestSuite/DebitCardInitiateFromOpsUser.cy.js',
    //specPattern: 'cypress/e2e/TestSuite/DebitCardDestructionByBranch.cy.js',
    //specPattern: 'cypress/e2e/TestSuite/DebitCardInitiateByMailingAddress.cy.js',
    //specPattern: 'cypress/e2e/TestSuite/DebitCardInitiateForCallCenter.cy.js',
    //specPattern: 'cypress/e2e/TestSuite/DebitCardRegression.cy.js',
    //specPattern: 'cypress/e2e/TestSuite/DebitCardInitiateForBanch.cy.js',
    //specPattern: 'cypress/e2e/TestSuite/DebitCardInitiateForAgentBanking.cy.js',

    reporter: 'cypress-mochawesome-reporter',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },

  },
  // "scripts": {
  //   "test": "**/DebitCardInitiateForCallCenter.cy.js",
  //   "test": "**/DebitCardInitiateForBanch.cy.js"

  // },
},
);
