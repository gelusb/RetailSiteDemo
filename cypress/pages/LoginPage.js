import { commonMethods } from "../configs/common/commonMethods";

export class LoginPage{

    insertValidUsername(){
        commonMethods.typeTextIntoElement(`#username`,`geluandreea@yahoo.com`);
    };

    insertValidPassword(){
        commonMethods.typeTextIntoElement(`#password`,`Crystal94@0123`);
    };

    clickOnLogin(){
        commonMethods.clickOnLogin();
    };

    //Hello bro
    assertUserIsLogedIn(){
        commonMethods.assertElementContainsText(`.woocommerce-MyAccount-content`, `Hello`);
    };

    //Proper error
    assertProperErrorIsDisplayed(){
        commonMethods.assertElementContainsText(`.woocommerce-error`, `not registered`);
        commonMethods.assertElementContainsText(`.woocommerce-error`, ` your email address instead.`);
    };
    
    //Insert invalid username
    insertInvalidUsername(){
        commonMethods.typeTextIntoElement(`#username`,`invalidusername`);
    };

    //Insert invalid password
    insertInvalidPassword(){
        commonMethods.typeTextIntoElement(`#password`,`invalidpassword`);
    };

    //Error,password is required bro
    assertErrorPasswordRequired(){
        commonMethods.assertElementContainsText(`.woocommerce-error`, `Password is required`);
    };

    //Error user name required
    assertErrorUsernameIsREquired(){
        commonMethods.assertElementContainsText(`.woocommerce-error`, `Username is required`);
    };

    //Insert case sensitive username 
    insertCaseSensitiveUsername(){
        commonMethods.typeTextIntoElement(`#username`,`Florin@gelu.com`);
    };

    //Insert case sensitve password
    insertCaseSensitivePassword(){
        commonMethods.typeTextIntoElement(`#password`,`3KPYV+a#dQJ*(rY`);
    };

    //Error worng password
    assertErrorWrongPassword(){
        commonMethods.assertElementContainsText(`.woocommerce-error`, `The password you entered for the username`);
    };

    //Password should be masked
    assertPasswordIsHidden(){
        cy.get(`#password`).should(`have.attr`, `type`, 'password');
    };
    //Lost your password error
    assertErrorLostYourPassword(){
        commonMethods.assertElementContainsText(`.woocommerce-error`, `Lost your password?`);
    };

};

export const loginPage = new LoginPage();
