import { commonMethods } from "../configs/common/commonMethods";

export class HomePage {

//Visit Home Page
visitSite(){
    commonMethods.visitUrl(`https://practice.automationtesting.in`);
};

//Click on Home
clickOnHome(){
    commonMethods.clickOnElement(`#site-logo`);
};

//click on right arrow for sliders
clickOnNeArrow(){
    commonMethods.clickOnElement(`#n2-ss-6-arrow-next > .n2-ow`);
};

//click on first arrivall
clickOnArrivall1(){
    commonMethods.clickOnElement(`.post-160 > .woocommerce-LoopProduct-link > .attachment-shop_catalog`);
};

//click on second arrival
clickOnArrivall2(){
    commonMethods.clickOnElement(`.post-163 > .woocommerce-LoopProduct-link > .attachment-shop_catalog`);
};

//click on 3nd arrival
clickOnArrivall3(){
    commonMethods.clickOnElement(`.post-165 > .woocommerce-LoopProduct-link > .attachment-shop_catalog`)
};

//click on left arrow for sliders
clickOnPrevArrow(){
    commonMethods.clickOnElement(`n2-ss-6-arrow-previous`);
};

//click on the "ADd to basket button"
clcikOnAddToBasket(){
    commonMethods.clickOnBasket();
};

//Click on remove item
clcikOnRemove(){
    commonMethods.clickOnElement(`.remove`);
};
//Select the side bar
clickSideBar(){
    commonMethods.clickOnElement(``)
};

//Click on my account
clickOnMyAccount1(){
    commonMethods.clickOnElement(`#menu-item-50`);
};

//Click on my account 2
clickOnMyAccount2(){
    commonMethods.clickOnElement(`#menu-icon`);
};

//Click on reviews tab for arrivals
clickOnReview(){
    commonMethods.clickOnElement(`.reviews_tab > a`);
};

//Click on Shop
clickOnShop(){
    commonMethods.clickOnElement(`#menu-item-40 > a`);
};

//Set filter for price min 250 max 450
setFilterShop(){
    commonMethods.setFilterMin(`class="ui-slider-handle ui-corner-all ui-state-default",style="left:12%;"`);
};

//Click on view basket
clickOnViewBasket(){
    commonMethods.clickOnElement(`.woocommerce-message > .button `);
};

//Click on Proceed to checkout button
clickOnProceed(){
    commonMethods.clickOnElement(`.checkout-button`);
};

//Click onClick here to login link
clickOnLoginButtonCart(){
    commonMethods.clickOnElement(`.showlogin`);
};

//Click on sign in from checkout
clickOnSignIn(){
    commonMethods.clickOnElement(`:nth-child(5) > .button`);
};

//Click on place order button
clickOnPlaceOrder(){
    commonMethods.clickOnElement(`#place_order`);
};

//Click on apply coupon
clickOnApplyCoupon(){
    commonMethods.clickOnElement(`.coupon > .button`);
};

//Click on Update Basket
clickOnUpdateBasket(){
    commonMethods.clickOnElement(`[name="update_cart"]`);
};

//Select pay with cash on delivery
clickOnCash(){
    commonMethods.clickOnElement(`.wc_payment_method.payment_method_cod> label`);
};

//Click on basket price on homepage
clickOnBasketPrice(){
    commonMethods.clickOnElement(`.wpmenucart-contents > .auntmo`);
};

//Click on the enter your coupon code button
clickOnHaveCoupon(){
    commonMethods.clickOnElement(`.showcoupon`);
};

//Click on the Apply Coupon button on checkout page
clickOnApplyCoupon2(){
    commonMethods.clickOnElement(`.form-row-last > .button`);
};

//Click on Undo
clickOnUndo(){
    commonMethods.clickOnElement(`.woocommerce-message > a`);
};

//Assert if action has been undone-book added back to basket
assertUndone(){
    commonMethods.assertElementContainsText(`.cart_totals`, `Basket Totals`);
};

//Assert if coupon was aplied succesfully message on checkout
assertCouponNotApplied(){
    commonMethods.assertElementContainsText(`.woocommerce`, `Coupon`);
};

//Assert if discount was aaplied in final page
assertCouponValue(){
    commonMethods.assertElementContainsText(`  `, `  `);
};


//Assert cash on delivery was selected 
CashOnDelivery(){
    commonMethods.assertElementContainsText(`.woocommerce-thankyou-order-details`, `Cash`);
};

//Assert first arrival text
assertArrivalText1(){
    commonMethods.assertElementContainsText(`.summary `, `Selenium `);
};

//Assert 2nd arrival text
assertArrivalText2(){
    commonMethods.assertElementContainsText(`.summary`, `HTML`);
};

//Assert 3rd arrival text
assertArrivalText3(){
    commonMethods.assertElementContainsText(`.summary`, `JavaScript`);
};

//Assert the book3 has been added to basket message
assertArrivalBasket1(){
    commonMethods.assertElementContainsText(`.woocommerce-message `, `been added`);
};

//Assert review page has text containing Review
assertReview(){
    commonMethods.assertElementContainsText(`#reviews`, `Review`);
};

//Assert coupon applied succesfully
assertCouponSuccess(){
    commonMethods.assertElementContainsText(`.woocommerce`, `successfully.`);
};

//Assert coupon error   
assertCouponError(){
    commonMethods.assertElementContainsText(`.woocommerce`, `not valid`);
};

//Assert book has been removed
assertBookRemoved(){
    commonMethods.assertElementContainsText(`.page-content `, `removed`);
};

//Assert basket has been updated
assertBasketUpdated(){
    commonMethods.assertElementContainsText(`.woocommerce-message`, `Basket updated`);
};

//Assert Order has been recieved checkout page
assertOrderRecieved(){
    commonMethods.assertElementContainsText(`.woocommerce-thankyou-order-received`, `received`);
};

//Insert coupon code for discount
insertCouponCode(){
    commonMethods.typeTextIntoElement(`#coupon_code`,`krishnasakinala`);
};

//Insert number of books to add to basket
insertBookNumber(){
    commonMethods.typeTextIntoElement(`.input-text`, `2`);
};

//Insert book Quantity 
insertBookQuantity(){
    commonMethods.typeTextIntoElement(`.quantity > .input-text`,`3`);
};


};

export const homePage = new HomePage();
