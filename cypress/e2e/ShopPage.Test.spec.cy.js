import { commonMethods } from "../configs/common/commonMethods";
import { homePage } from "../pages/HomePage";
import { loginPage } from "../pages/LoginPage";
import { shopPage } from "../pages/ShopPage";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});


describe(`Shop Page`,() => {
    beforeEach(() => {

        commonMethods.changeViewPort();
        //Enter the URL “http://practice.automationtesting.in/”
        homePage.visitSite();
        //Click on Shop
        homePage.clickOnShop();
    });

    it(`Shop Product categories should have 4 navigable categories`, () => {
        //Android product category should be visible and clickable
        shopPage.clickOnAndorid();
        //Andorid product category link has been accessed
        shopPage.assertAndoroidSite();
        //Click on Html product category link
        shopPage.clickOnHtml();
        //Assert content has 3 html books
        shopPage.assertContentHtml1();
        shopPage.assertContentHtml2();
        shopPage.assertContentHtml3();
        //Click on Java Script product category link
        shopPage.clickOnJava();
        //Verify if content has 3 books in the layout
        shopPage.assertContentJava1();
        shopPage.assertContentJava2();
        shopPage.assertContentJava3();
        //Now click on Selenium product category link
        shopPage.clickOnSelenium();
        //Assert selenium product category link has 1 book Selenium Ruby
        shopPage.assertContentSelenium();    
    });

    it('Should click on slider and change price to min 200', () => { 
        // Get the slider handle
        cy.get('.ui-slider-handle').first().as('sliderHandle');
        // Drag the slider to the desired position
        cy.get('@sliderHandle')
            .trigger('mousedown', { which: 1 })
            .trigger('mousemove', { clientX: 200 }) // You may need to adjust clientX based on your slider's position
            .trigger('mouseup');
        // Verify the slider's value is set to 200
        // This will depend on how the value is reflected in the DOM
        cy.get('.ui-slider-value') // Adjust this selector to the actual element displaying the value
            .should('contain', '200');
    });
    // it(`Should click on slider and change price to min 200`, () => { 

    //     cy.get('.ui-slider-range').as('range').invoke(`attr`,'style', `left: 9.42857%`, `right: 80%`);

    // });

    it(`Should be able to drop down on shop page and sort items`, () => { 
       //Click on the drio down sort items bar
       shopPage.clcikOnDropDown();
    });

    it(`Can add all 8 books to basket from -add to cart button on shop page, remove first and last and proceed to checkout `, () => { 

        cy.wait(500);
        //Add 1st book in the basket
        shopPage.clickOnAndroidButton();
        cy.wait(500);
        //Add 2nd book in the basket
        shopPage.clickOnJavaButton1();
        //Add 3rd book to the basket
        shopPage.clickOnHtmlButton1();
        //add 4th book to the basket
        shopPage.clickOnHtmlButton2();
        //add 5th book to the basket
        cy.wait(500);
        shopPage.clickOnSeleniumButton();
        //add 6th book to the basket
        shopPage.clickOnJavaButton2();
        //add 7th book to basket
        shopPage.clickOnJavaButton3();
        //add 8th book and final to the basket
        shopPage.clickOnHtmlButton3();
        //click on basket amount to view basket      
        shopPage.clickOnTotalPrice();
        //Remove Android book from basket
        shopPage.clickOnAndroidRemove();
        //Confirm android has been removed message
        shopPage.AssertAndroidRemoved();
        //Remove Selenium from basket
        shopPage.clickOnSeleniumRemove();
        //Confirm selenium has been removed
        shopPage.assertSeleniumRemoved();
        //Remove Html 2nd book from the basket
        shopPage.clickonRemoveHtml();
        cy.wait(500);
        //Confirm the Html book has been removed
        shopPage.assertHtmlRemoved();
        cy.wait(500);
        //Proceed to checkout
        homePage.clickOnProceed();
        //Click on link called "Click here to login" 
        homePage.clickOnLoginButtonCart();
        //Insert username
        loginPage.insertValidUsername();
        //Insert password
        loginPage.insertValidPassword();
        //Sign in button
        homePage.clickOnSignIn();
        //Place order
        homePage.clickOnPlaceOrder();
        //Assert order recieved
        homePage.assertOrderRecieved();
    });

});
