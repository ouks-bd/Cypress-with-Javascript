
import { Dashboard } from "../../Pages/DashBoard/Dashboard.cy";
import { DownloadVendorUser } from "../../Pages/CPS/DownloadPrintingRequestByVendor.cy";
import { CpsLoginPage } from "../../Pages/LogIn/CPS_LogIn.cy";

describe('CPS Operation User ', function () {

    before(function () {
        cy.fixture('TestData').then(function (testdata) {
            this.testdata = testdata

            const login = new CpsLoginPage()

            login.navigate()

            cy.on('uncaught:exception', (err, runnable) => {
                return false;
            })

            login.enterUsername().type(this.testdata.cps_vendor)
            login.enterPassword().type(this.testdata.cps_vendor_password)
            login.clickLogin()

        })
    })


    it('TC001 - Login as Operation User and Download Printing Request', function () {

        const dashboard = new Dashboard()
        const downloadvendor = new DownloadVendorUser()

        dashboard.ModulesClick();
        dashboard.ChequePrintingVendor();
        dashboard.ChequeManagementVendor();
        dashboard.DownloadPrintingRequest();

        downloadvendor.ShowIssued();
        downloadvendor.DownLoad();

       // dashboard.CpsLogOutTwo();

        cy.wait(1000)


        

    })

})

