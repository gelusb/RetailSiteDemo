import { commonMethods } from "../configs/common/commonMethods";
import { homePage } from "../pages/HomePage";
import { myAccountPage } from "../pages/MyAccountPage";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

describe(`My Account Registration`,() => {
    beforeEach(() => {

        commonMethods.changeViewPort();
        // Enter the URL “http://practice.automationtesting.in/”
       homePage.visitSite();
        // Click on My Account Menu
       homePage.clickOnMyAccount1();
        //myAccountPage.reloadPage();
    });

    it(`User should register sucessfully`,() => {
        //Enter email 
        myAccountPage.insertRegistrationEmail();
        //Enter password
        myAccountPage.insertRegistrationPassword();
        //Click on register
        myAccountPage.clickOnRegister();
        //User must successfully register
        myAccountPage.assertUserIsRegistered();
        });

    it(`Register with invalid email`,() => {
        //Enter invalid email
        myAccountPage.insertInvalidEmail();
        //Enter password
        myAccountPage.insertInvalidPassword();
        //Click on register
        myAccountPage.clickOnRegister();
        //Propper error mate invalid email address
        myAccountPage.assertErorInvalidEmail();
    });

    it(`Register with empty email`,() => {
        //Enter the password only
        myAccountPage.insertRegistrationPassword();
        //Click on register
        myAccountPage.clickOnRegister();
        //Propper error mate please provide a valid email address
        myAccountPage.assertErorInvalidEmail();
    });

    it(`Register with empty password`,() => {
        //Enter the email only
        myAccountPage.insertEmailOnly();
        //Click on register
        myAccountPage.clickOnRegister();
        //Propper error mate please provide a valid email address
        myAccountPage.assertErrorPasswordRequired();
    });

    it(`Register with empty email and password`,() => {
        //Click on Register button
        commonMethods.clickOnRegister();
        //Please provide a valid email address we don`t care about the password
        myAccountPage.assertErorInvalidEmail();
    });
    
});
