import { commonMethods } from "../configs/common/commonMethods"
import { homePage } from "../pages/HomePage";
import { loginPage } from "../pages/LoginPage";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

describe(`My Account`,() => {
    beforeEach(() => {
      // cy.viewport(1920,1080);
        commonMethods.changeViewPort();     
      // Enter the URL “http://practice.automationtesting.in/”
        homePage.visitSite();
      // Click on Shop
        homePage.clickOnShop();
      //Click on Home
        homePage.clickOnHome();
    });

    it(`Homepage should have 3 sliders only` , () =>{
      //ClickNExt arrow
        homePage.clickOnNeArrow();
      //Check first slider
        commonMethods.assertElement1Exists();
      //Click next arrow again
        homePage.clickOnNeArrow();
      //Check 2nd slider
        commonMethods.assertElement2Exists();
      //Click again on next arrow*last time
        homePage.clickOnNeArrow();
      //Check 3rd and last slider
        commonMethods.assertElement3Exists();
    });

    it(`Hompeage should have 3 arrivals only` , () =>{
      //First arrival should be present
        commonMethods.assertElement4Exists();
      //Second arrival should be present
        commonMethods.assertElement5Exists();
      //Third and final arrival should be there
        commonMethods.assertElement6Exists();
    });

    it(`First arrival should be navi to basket and coupon success` , () =>{
      //First arrival should navigate to basket
        homePage.clickOnArrivall1();
      //Check if Description is present(Selenium)
        homePage.assertArrivalText1();
      //Click on Reviews
        homePage.clickOnReview();
      //Review page with comments should be visible
        homePage.assertReview();
      //Insert number of books
        homePage.insertBookNumber();
      //Add that first arrival in the basket nigga
        homePage.clcikOnAddToBasket();
      //Assert the book has been added to the basket message
        homePage.assertArrivalBasket1();
      //Click on View Basket
        homePage.clickOnViewBasket();
      //Insert Coupon discount code
        homePage.insertCouponCode();
      //Click on Apply coupon
        homePage.clickOnApplyCoupon();
      //Assert if coupon code was successfull 
        homePage.assertCouponSuccess();
    });

    it(`Second arrival should navi to basket and add coupon error` , () => {
      //Click on second arrival 
        homePage.clickOnArrivall2();
      //Check if description is there(HTML)
        homePage.assertArrivalText2();
      //Click Review page 
        homePage.clickOnReview();
      //Review page with comments should be visible
        homePage.assertReview();
      //Insert number of books
	      homePage.insertBookNumber();
      //Add the 2nd arrival in the basket
        homePage.clcikOnAddToBasket();
      //Assert the book has been added to the basket message
        homePage.assertArrivalBasket1();
      //Click on View Basket
        homePage.clickOnViewBasket();
      //Insert Coupon discount code
        homePage.insertCouponCode();
      //Click on Apply coupon
        homePage.clickOnApplyCoupon();
      //Assert if coupon code was successfull 
        homePage.assertCouponError();
    });

    it(`3rd and final arrival should navi to basket and add coupon success` , () => {
      //Click on 3rd arrival biatch
        homePage.clickOnArrivall3();
      //Assert descirption is there(JavaScript)
        homePage.assertArrivalText3();
      //click on Review tab
        homePage.clickOnReview();
      //Review page with comments should be visible
        homePage.assertReview();
      //Insert number of books to add to basket   
        homePage.insertBookNumber();
      //Add the 3rd arrival in the basket
        homePage.clcikOnAddToBasket();
      //Assert the book has been added to the basket message
        homePage.assertArrivalBasket1();
      //Click on View Basket
        homePage.clickOnViewBasket();
      //Insert Coupon discount code
        homePage.insertCouponCode();
      //Click on Apply coupon     
        homePage.clickOnApplyCoupon();
      //Assert if coupon code was successfull 
        homePage.assertCouponSuccess();
    });

    it(`User can remove the 1st book from the basket`, () =>{
      //First arrival should navigate to basket
        homePage.clickOnArrivall1();
      //Check if Description is present(Selenium)      
        homePage.assertArrivalText1();
      //Click on Reviews       
        homePage.clickOnReview();
      //Review page with comments should be visible
        homePage.assertReview();
      //Insert number of books
        homePage.insertBookNumber();
      //Add that first arrival in the basket nigga
        homePage.clcikOnAddToBasket();
      //Assert the book has been added to the basket message
        homePage.assertArrivalBasket1();
      //Click on View Basket      
        homePage.clickOnViewBasket();
      //Remove the 1st book from the basket
        homePage.clcikOnRemove();
      //Assert book has been removed
        homePage.assertBookRemoved();
    });

    it(`User can remove the 2nd book from the basket`, () =>{
      //First arrival should navigate to basket
        homePage.clickOnArrivall2();
      //Check if Description is present(Selenium)
        homePage.assertArrivalText2();
      //Click on Reviews
        homePage.clickOnReview();
      //Review page with comments should be visible
        homePage.assertReview();
      //Insert number of books
        homePage.insertBookNumber();
      //Add that first arrival in the basket nigga
        homePage.clcikOnAddToBasket();
      //Assert the book has been added to the basket message
        homePage.assertArrivalBasket1();
      //Click on View Basket
        homePage.clickOnViewBasket();
      //Remove the 1st book from the basket
        homePage.clcikOnRemove();
      //Assert book has been removed
        homePage.assertBookRemoved();
    });

    it(`User can remove the 3rd book from the basket`, () => {
      //First arrival should navigate to basket
        homePage.clickOnArrivall3();
      //Check if Description is present(Selenium)
        homePage.assertArrivalText3();
      //Click on Reviews
        homePage.clickOnReview();
      //Review page with comments should be visible
        homePage.assertReview();
      //Insert number of books
        homePage.insertBookNumber();
      //Add that first arrival in the basket nigga
        homePage.clcikOnAddToBasket();
      //Assert the book has been added to the basket message
        homePage.assertArrivalBasket1();
      //Click on View Basket
        homePage.clickOnViewBasket();
      //Remove the 1st book from the basket
        homePage.clcikOnRemove();
      //Assert book has been removed
        homePage.assertBookRemoved();
    });

    it(`User can remove the 3rd book from the basket and undo the action`, () =>{
      //First arrival should navigate to basket
        homePage.clickOnArrivall3();
      //Check if Description is present(Selenium)
        homePage.assertArrivalText3();
      //Click on Reviews
        homePage.clickOnReview();
      //Review page with comments should be visible
        homePage.assertReview();
      //Insert number of books
        homePage.insertBookNumber();
      //Add that first arrival in the basket nigga
        homePage.clcikOnAddToBasket();
      //Assert the book has been added to the basket message
        homePage.assertArrivalBasket1();
      //Click on View Basket
        homePage.clickOnViewBasket();
      //Remove the 1st book from the basket
        homePage.clcikOnRemove();
      //Assert book has been removed
        homePage.assertBookRemoved();
      //Click on "Undo"
        homePage.clickOnUndo();
      //Assert action has been undone
       homePage.assertUndone();
    });

    it(`User can add to basket 1st book directly from the homepage and update`, () =>{
      //Click on Add to basket homepage
        commonMethods.clickOnAddToBasket1();
      //Click on View cart directly from homepage
        commonMethods.clickOnAddToCart1();
      //Add 3 books in the quantity box
        homePage.insertBookQuantity();
      //Click on Update basket
        homePage.clickOnUpdateBasket();
      //Assert basket is updated
        homePage.assertBasketUpdated();
    });

    it(`User can add to basket,update basket and proceed to cheeckout and place order(signed-in)`, () =>{
      //Click on Add to basket from homepage first book
        commonMethods.clickOnAddToBasket1();
      //Click on  View cart directly from hoempage
        commonMethods.clickOnAddToCart1();
      //Add 3 books as quantity
        homePage.insertBookQuantity();
      //Click on update basket
        homePage.clickOnUpdateBasket();
      //Assert basket is updated
        homePage.assertBasketUpdated();
      //Click on Proceed to checkout
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

    it(`User can navigate to place order and choose cash payment on delivery`, () =>{

      //Click on Add to basket from homepage first book
        commonMethods.clickOnAddToBasket1();
      //Click on  View cart directly from hoempage
        commonMethods.clickOnAddToCart1();
      //Add 3 books as quantity
        homePage.insertBookQuantity();  
      //Click on update basket
        homePage.clickOnUpdateBasket();
      //Assert basket is updated
        homePage.assertBasketUpdated();
      //Click on Proceed to checkout
        homePage.clickOnProceed();
      //Click on link to login 
        homePage.clickOnLoginButtonCart();
      //Insert username
        loginPage.insertValidUsername();
      //Insert password
        loginPage.insertValidPassword();
      //Sign in button
        homePage.clickOnSignIn();
      //Click on pay with cash on delivery
        homePage.clickOnCash();
      //Click on Place Order
        homePage.clickOnPlaceOrder(); 
      //Confirm cash on delivery as method of payment was slected
        homePage.CashOnDelivery();
    });

    it(`User can navigate to place order and choose cash payment on delivery and add coupon code but discount error`, () =>{
      //Click on Add to basket from homepage first book
        commonMethods.clickOnAddToBasket1();
      //Click on  View cart directly from hoempage
        commonMethods.clickOnAddToCart1();
      //Add 3 books as quantity
        homePage.insertBookQuantity();
      //Click on update basket
        homePage.clickOnUpdateBasket();
      //Assert basket is updated
        homePage.assertBasketUpdated();
      //Click on Proceed to checkout
        homePage.clickOnProceed();
      //Click on link to login 
        homePage.clickOnLoginButtonCart();
      //Insert username
        loginPage.insertValidUsername();
      //Insert password
        loginPage.insertValidPassword();
      //Sign in button
        homePage.clickOnSignIn();
      //Click on button to enter coupon code
        homePage.clickOnHaveCoupon();
      //Insert coupon code
        homePage.insertCouponCode();
      //Click on Apply coupon button
        homePage.clickOnApplyCoupon2();
      //Check if coupon was applied succesfully message
        homePage.assertCouponNotApplied();
      //Click on pay with cash on delivery
        homePage.clickOnCash();
      //Click on Place Order
        homePage.clickOnPlaceOrder(); 
      //Confirm order
        homePage.CashOnDelivery();
    });
    

});
