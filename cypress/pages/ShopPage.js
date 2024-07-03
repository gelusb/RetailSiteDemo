import { commonMethods } from "../configs/common/commonMethods";

export class ShopPage {

//click on the Android product category link
clickOnAndorid(){
    commonMethods.clickOnElement(`.cat-item-24 > a`);
};

//Click on Andorid -add to basket button
clickOnAndroidButton(){
    commonMethods.clickOnElement(`.post-169 > .button`);
};

//Click on remove andorid book from basket
clickOnAndroidRemove(){
    commonMethods.clickOnElement(`:nth-child(1) > .product-remove > .remove`);
};

//Click on the HTML product category  link
clickOnHtml(){
    commonMethods.clickOnElement(`.cat-item-19 > a`);
};

//click on Java Script Product category link
clickOnJava(){
    commonMethods.clickOnElement(`.cat-item-21 > a`);
};

clickOnSelenium(){
    commonMethods.clickOnElement(`.cat-item-17 > a`);
};

//Click on Java 1st book -add to basket button
clickOnJavaButton1(){
    commonMethods.clickOnElement(`.post-170 > .button`);
};

//Click on Java 2nd book -add to basket
clickOnJavaButton2(){
    commonMethods.clickOnElement(`.post-165 > .button`);
};

//click on Java 3rd book -add to basket
clickOnJavaButton3(){
    commonMethods.clickOnElement(`.post-180 > .button`)
};

//Click on Html 1st book -add to basket button
clickOnHtmlButton1(){
    commonMethods.clickOnElement(`.post-181 > .button`);
};

//Click on HTML 2nd book -add to basket button
clickOnHtmlButton2(){
    commonMethods.clickOnElement(`.post-182 > .button`);
};

//Click on Html 3rd book -add to basket
clickOnHtmlButton3(){
    commonMethods.clickOnElement(`.post-163 > .button`);
};

//click on remove html2 book from basket

clickonRemoveHtml(){
    commonMethods.clickOnElement(`:nth-child(6) > .product-remove > .remove`);
};

//Click on Selenium Ruby -add to basket button
clickOnSeleniumButton(){
    commonMethods.clickOnElement(`.post-160 > .button`);
};

//Click on remove selenium book from basket
clickOnSeleniumRemove(){
    commonMethods.clickOnElement(`:nth-child(4) > .product-remove > .remove`);
};

//Click on the drop down sort items bar
clcikOnDropDown(){
    commonMethods.clickOnElement(`.woocommerce-ordering`);
};

//click on the view basket amaount on top right
clickOnTotalPrice(){
    commonMethods.clickOnElement(`.wpmenucart-contents > .amount`);
};

//Assert Android book removed from basket
AssertAndroidRemoved(){
    commonMethods.assertElementContainsText(`.woocommerce-message`, `Android`);
};

//Assert if Andorid page has one book containing the name android
assertAndoroidSite(){
    commonMethods.assertElementContainsText(`.post-169`, `Android`);
};

//Assert  Shop page HTML product category  3 
assertContentHtml1(){
    commonMethods.assertElementContainsText(`#layout`, `HTML5 Forms`);
};

assertContentHtml2(){
    commonMethods.assertElementContainsText(`#layout`, `HTML5 WebApp Develpment`);
};

assertContentHtml3(){
    commonMethods.assertElementContainsText(`#layout`, `Thinking in HTML`);
};

//Assert HTML book has been removed from the basket
assertHtmlRemoved(){
    commonMethods.assertElementContainsText(`.woocommerce-message`, `HTML`);
};

//Assert Shop page JavaScript product category 3
assertContentJava1(){
	commonMethods.assertElementContainsText(`#content`, `Functional Programming in JS`);
};

assertContentJava2(){
	commonMethods.assertElementContainsText(`#content`, `JS Data Structures`);
};

assertContentJava3(){
	commonMethods.assertElementContainsText(`#content`, `Mastering JavaScript`);
};

//Assert Shop page Selenium product category 1
assertContentSelenium(){
    commonMethods.assertElementContainsText(`#layout`, `Selenium Ruby`);
};


//Assert basket selenium ruby has been removed
assertSeleniumRemoved(){
    commonMethods.assertElementContainsText(`.woocommerce-message`, `Selenium`);
};

};

export const shopPage = new ShopPage();