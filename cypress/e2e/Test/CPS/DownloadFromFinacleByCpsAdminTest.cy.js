
import { Dashboard } from "../../Pages/DashBoard/Dashboard.cy";
import { DownloadFromFinacle } from "../../Pages/CPS/DownloadFromFinacleByCpsAdmin.cy";
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

            login.enterUsername().type(this.testdata.cps_admin)
            login.enterPassword().type(this.testdata.Cps_Password)
            login.clickLogin()

        })
    })


    it('TC001 - Login as Operation User and Send To Vendor', function () {

        const dashboard = new Dashboard()
        const downloadfromfinacle = new DownloadFromFinacle()

        dashboard.ModulesClick();
        dashboard.PrintingSytem();
        dashboard.ChequeManagement();
        dashboard.DownloadFromFinacle();

        cy.wait(5000)


        downloadfromfinacle.ShowIssued();

        cy.wait(5000)

        downloadfromfinacle.SendToVendor();

        cy.wait(5000)



        dashboard.CpsLogOutOne();  


    })

})

