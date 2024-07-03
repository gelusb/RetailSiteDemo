import { commonMethods } from "../configs/common/commonMethods";
import { homePage } from "../pages/HomePage";
import { testCases } from "../pages/TestCases";


Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

describe(`My Account Log in`,() => {
    beforeEach(() => {
        //  Enter the URL “https://practice.automationtesting.in/”
       homePage.visitSite();
        //  Click on My Account Menu
       testCases.clickOnTestCases();
    });
    it(`click on the first test case elements for Home Page and verify the description`, () => {
        //Assert the Home Page is the first test case scenarios on the page
        testCases.assertHomePagetests();
        cy.wait(500);      
        //Click on the first home page button link
        testCases.clickOnHomePage1();
        cy.wait(500);
        //assert first home page test case has the name "Sliders" in the content
        testCases.assertHomepage1();
        cy.wait(500);
        //Click on 2nd Home page test cases link button
        testCases.clickOnHomePage2();
        cy.wait(500);   
        //Assert the snd test case scenarion includes the word "Arrivals"
        testCases.assertHomepage2();
        cy.wait(500);
        //Click on 3rd Home page test case link button
        testCases.clickOnHomePage3();
        cy.wait(500);
        //assert the 3rd home page test case scenario includes the word "images"
        testCases.assertHomepage3();
        cy.wait(500);
        //Clcik on the 4th home page test case link button
        testCases.clickOnHomePage4();
        cy.wait(500);
        //assert the 4th home page test case scenarion includes the word "Description"
        testCases.assertHomepage4();
        cy.wait(500);
        //click on the 5th home page test case link button
        testCases.clickOnHomePage5();
        cy.wait(500);
        //assert the 5th home page test case scenario includes the name in the description
        testCases.assertHomepage5();
        cy.wait(500);
        //click on the 6th home page test case link button
        testCases.clickOnHomePage6();
        cy.wait(500);
        //assert the 6th home page test case scenario includes the name in the description
        testCases.assertHomepage6();
        cy.wait(500);
        //click on the 7th home page test case link button
        testCases.clickOnHomePage7();
        cy.wait(500);
        //assert the 7th home page test case scenario includes the name in the description
        testCases.assertHomepage7();
        cy.wait(500);
        //click on the 8th home apge test case link button
        testCases.clickOnHomePage8();
        cy.wait(500);
        //assert the 8th home page test case scenario includes the name in the description
        testCases.assertHomepage8();
        cy.wait(500);
        //click on 9th home page test case link button
        testCases.clickOnHomePage9();
        cy.wait(500);
        //assert the 9th home page test case scenario includesz the name in the description
        testCases.assertHomepage9();
        cy.wait(500);
        //click on 10th home page test case link button
        testCases.clickOnHomePage10();
        cy.wait(500);
        //assert the 10th home page test case scenario includesz the name in the description
        testCases.assertHomepage10();
        cy.wait(500);
        //click on 11th home page test case link button
        testCases.clickOnHomePage11();
        cy.wait(500);
        //assert the 11th home page test case scenario includesz the name in the description
        testCases.assertHomepage11();
        cy.wait(500);
        //click on 12th home page test case link button
        testCases.clickOnHomePage12();
        cy.wait(500);
        //assert the 12th home page test case scenario includesz the name in the description
        testCases.assertHomepage12();
        cy.wait(500);
        //click on 13th home page test case link button
        testCases.clickOnHomePage13();
        cy.wait(500);
        //assert the 13th home page test case scenario includesz the name in the description
        testCases.assertHomepage13();
        cy.wait(500);
        //click on 14th home page test case link button
        testCases.clickOnHomePage14();
        cy.wait(500);
        //assert the 14th home page test case scenario includesz the name in the description
        testCases.assertHomepage14();
        cy.wait(500);
        //click on 15th home page test case link button
        testCases.clickOnHomePage15();
        cy.wait(500);
        //assert the 15th home page test case scenario includesz the name in the description
        testCases.assertHomepage15();
        cy.wait(500);
        //click on 16th home page test case link button
        testCases.clickOnHomePage16();
        cy.wait(500);
        //assert the 16th home page test case scenario includesz the name in the description
        testCases.assertHomepage16();
        cy.wait(500);
        //click on 17h home page test case link button
        testCases.clickOnHomePage17();
        cy.wait(500);
        //assert the 17th home page test case scenario includesz the name in the description
        testCases.assertHomepage17();
        cy.wait(500);
        //click on 18th home page test case link button
        testCases.clickOnHomePage18();
        cy.wait(500);
        //assert the 18th home page test case scenario includesz the name in the description
        testCases.assertHomepage18();
        cy.wait(500);
        //click on my account login 1st button link

    });


});