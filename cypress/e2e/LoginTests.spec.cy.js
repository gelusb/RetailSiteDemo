import { commonMethods } from "../configs/common/commonMethods";
import { homePage } from "../pages/HomePage";
import { loginPage } from "../pages/LoginPage";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

describe(`My Account Log in`,() => {
    beforeEach(() => {
        commonMethods.changeViewPort();
        //  Enter the URL “https://practice.automationtesting.in/”
        homePage.visitSite();
        //  Click on My Account Menu
        homePage.clickOnMyAccount1();
    });

    it(`Login with valid Username and Password`, () => {
        //  Enter registered username in username textbox
        loginPage.insertValidUsername();
        //  Enter password in password textbox
        loginPage.insertValidPassword();
        //  Click on login button
        loginPage.clickOnLogin();
        //  User must successfully login
        loginPage.assertUserIsLogedIn();
    });

    it(`Login with both invalid Username and Password`, () => {
        //  Enter invalid registered username in username textbox
        loginPage.insertInvalidUsername();
        //  Enter invalid password in password textbox
        loginPage.insertInvalidPassword();
        //  Click on login button
        loginPage.clickOnLogin();
        //  Proper error
        loginPage.assertProperErrorIsDisplayed();
    });

    it(`Login with valid Username and empty Password`, () => {
        //  Enter only valid username in username textbox
        loginPage.insertValidUsername();
        //  Click on login button
        loginPage.clickOnLogin();
        //  Proper error
        loginPage.assertErrorPasswordRequired();
    });

    it(`Login with no Username and valid Password`, () => {
        //  Enter only valid password in password textbox
        loginPage.insertValidPassword();
        //  Click on login button
        loginPage.clickOnLogin();
        //  Proper error
        loginPage.assertErrorUsernameIsREquired();
    });

    it(`Login with no Username and no Password`, () => {
        // No username and no password in any of the textboxes
        // Click on login button
        loginPage.clickOnLogin();
        // Proper error
        loginPage.assertErrorUsernameIsREquired();
    });
    
    it(`Login with case sensitive Username and Password`, () => {
        //  Enter registered username in username textbox
        loginPage.insertCaseSensitiveUsername();
        //  Enter password in password textbox
        loginPage.insertCaseSensitivePassword();
        //  Click on login button
        loginPage.clickOnLogin();
        // Error
        loginPage.assertErrorLostYourPassword();
    });

    it(`Password should be masked like zorro`,() => {
        // Enter the password field with some characters.
        loginPage.insertValidPassword();
        // The password is not visible on the screen.
        loginPage.assertPasswordIsHidden();
    });
});
