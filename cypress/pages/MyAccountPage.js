import { commonMethods } from "../configs/common/commonMethods";
import { myAccountPage } from "../pages/MyAccountPage";

export class MyAccountPage{

    reloadPage(){
        cy.reload();
    };

    insertRegistrationEmail(){
        commonMethods.typeTextIntoElement(`#reg_email`,`bboolbassss01@gelu.com`);
    };

    insertRegistrationPassword(){
        commonMethods.typeTextIntoElement(`#reg_password`,`3KPYV+a#dQJ*(rY`);
    };

    clickOnRegister(){
        commonMethods.clickOnRegister();
    };

    assertUserIsRegistered(){
        commonMethods.assertElementContainsText(`.woocommerce`,`From your account dashboard you can view your `);
    };

    insertInvalidEmail(){
        commonMethods.typeTextIntoElement(`#reg_email`,`gelu.florin@cucos`);
    };

    insertInvalidPassword(){
        commonMethods.typeTextIntoElement(`#reg_password`,`3KPYV+a#dQJ*(rY`);
    };

    assertErorInvalidEmail(){
        commonMethods.assertElementContainsText(`.woocommerce`,`Please provide a valid email address`);
    };

    insertEmailOnly(){
        commonMethods.typeTextIntoElement(`#reg_email`,`invalid@gelu.com`);
    };

    assertErrorPasswordRequired(){
        commonMethods.assertElementContainsText(`.woocommerce-error`,`Please enter an account password.`);
    };

    clickOnMyDashboard(){
        commonMethods.clickOnElement(`.woocommerce-MyAccount-navigation-link--dashboard > a`);
    };

    clickOnMyOrders(){
        cy.get(`.woocommerce-MyAccount-navigation-link--orders`).contains(`Orders`).click();
    };

    assertOrdersPage(){
        cy.url().should(`contain`, `orders/`);
    };

    clickOnDownloads(){
        cy.get(`.woocommerce-MyAccount-navigation-link--downloads > a`).contains(`Downloads`).click();
    };

    assertDownloadPage(){
        cy.url().should(`contain`, `downloads/`);
    };

    clickOnAddresses(){
        cy.get(`.woocommerce-MyAccount-navigation-link--edit-address > a`).contains(`Addresses`).click();
    };

    assertAddressesPage(){
        cy.url().should(`contain`, `edit-address/`);
    };

    clickOnBillingAddressEdit(){
        cy.get(`.woocommerce-MyAccount-content`).contains(`Edit`).click();
    };

    clickOnShippingAddressEdit(){
        cy.get(`.u-column2 > .woocommerce-Address-title > .edit`).click();
    };
    
    assertBillingAddress(){
        commonMethods.assertElementContainsText(`.woocommerce-MyAccount-content > form`, `Billing Address`);
    };

    insertFirstNameonShipping(){
        commonMethods.typeTextIntoElement(`#shipping_first_name`,`Andreea`);
    };

    insertLastNameonShipping(){
        commonMethods.typeTextIntoElement(`#shipping_last_name`,`Jucan`);
    };

    insertFirstName(){
        
        commonMethods.typeTextIntoElement(`#billing_first_name`,`Andreea`);
    };

    insertLastName(){
        commonMethods.typeTextIntoElement(`#billing_last_name`,`Jucan`);
    };

    insertPhoneNumber(){
        commonMethods.typeTextIntoElement(`#billing_phone`,`07012345666`);
    };

    insertBillingAddress(){
        commonMethods.typeTextIntoElement(`#billing_address_1`,`Str. Fanfarei`);
    };

    insertShippingAddress(){
        commonMethods.typeTextIntoElement(`#shipping_address_1`,`Str. Fanfarei`);
    };

    insertBillingAddress2(){
        commonMethods.typeTextIntoElement(`#billing_address_2`,`Nr.33 Ap 44, Scara 2`);
    };

    insertShippingAddress2(){
        commonMethods.typeTextIntoElement(`#shipping_address_2`,`Nr.33 Ap 44, Scara 2`);
    };

    insertTownCityBilling(){
        commonMethods.typeTextIntoElement(`#billing_city`,`Cluj-Napoca`);
    };

    insertTownShipping(){
        commonMethods.typeTextIntoElement(`#shipping_city`,`Cluj-Napoca`);
    };

    insertZipCode(){
        commonMethods.typeTextIntoElement(`#billing_postcode`,`E1324TY`);
    };

    insertZipCodeShipping(){
        commonMethods.typeTextIntoElement(`#shipping_postcode`,`E1324TY`);
    };

    clickOnSaveAddress(){
        commonMethods.clickOnSaveAddress();
    };

    clickOnSaveShippingAddress(){
        commonMethods.clickOnSaveAddress();
    };
};

export const myAccountPage = new MyAccountPage();
