import { commonMethods } from "../configs/common/commonMethods";
import { homePage } from "../pages/HomePage";
import { loginPage } from "../pages/LoginPage";
import { MyAccountPage, myAccountPage } from "../pages/MyAccountPage";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

describe(`My Account`,() => {
    beforeEach(() => {
        commonMethods.changeViewPort();
    //Enter the URL “http://practice.automationtesting.in/”
       homePage.visitSite();
        //Click on My Account Menu
       homePage.clickOnMyAccount1();
       //Enter registered username in username textbox
       loginPage.insertValidUsername();
       //Enter password in password textbox
       loginPage.insertValidPassword();
       //Click on login button
       loginPage.clickOnLogin();
       //User must successfully login
       loginPage.assertUserIsLogedIn();
    });

    it(`My Account-Dashboard`, () => {
        //Click on My Dashboard
        myAccountPage.clickOnMyDashboard();
    });

    it(`My Account-Orders1`, () => {
        //9) Click on Orders link
        myAccountPage.clickOnMyOrders();
        //10) User must view their orders on clicking orders link
        myAccountPage.assertOrdersPage();
    });

    it(`My Account-Downloads`, () => {
        //Click on Downloads link
        myAccountPage.clickOnDownloads();
        //User must view Downloads list
        myAccountPage.assertDownloadPage();
    });

    it.only(`My Account-Billing Addresses`, () => {
        //Click on Billing Addresses link
        myAccountPage.clickOnAddresses();
        //User must view the Addresses PAge
        myAccountPage.assertAddressesPage();
        //User must be able to click on Edit Billing Address
        myAccountPage.clickOnBillingAddressEdit();
        //Insert First Name Andreea
        myAccountPage.insertFirstName();
        //Insert Last Name Jucan
        myAccountPage.insertLastName();
        //Insert Phone number
        myAccountPage.insertPhoneNumber();
        //Insert Billing Address
        myAccountPage.insertBillingAddress();
        //Insert Billing Address2
        myAccountPage.insertBillingAddress2();
        //Insert Billing City
        myAccountPage.insertTownCityBilling();
        //Insert Zip Code
        myAccountPage.insertZipCode();
        //Save
        myAccountPage.clickOnSaveAddress();
    });

    it(`My Account-Shipping Address`, () => {
        //Click on Shipping Adresses link
        myAccountPage.clickOnAddresses();
        //User must vew the Addresses Page
        myAccountPage.assertAddressesPage();
        //User must be able to click on Edit Shipping Addresses
        myAccountPage.clickOnShippingAddressEdit();
        //Insert First Name for Shipping address
        myAccountPage.insertFirstNameonShipping();
        //Insert Last Name for Shipping address
        myAccountPage.insertLastNameonShipping();
        //Insert Shipping Address
        myAccountPage.insertShippingAddress();
        //Insert Shipping Address 2
        myAccountPage.insertShippingAddress2();
        //Insert Town/City Shipping
        myAccountPage.insertTownShipping();
        //Insert Shipping postcode
        myAccountPage.insertZipCodeShipping();
        //Click on Save
        myAccountPage.clickOnSaveAddress();

    });

});

