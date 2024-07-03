export class CommonMethods {

  //this method will visit an url.
  visitUrl(Url){
    cy.visit(Url);
  };

  //this method will click on web element.
  clickOnElement(selector){
    cy.get(selector).click();
  };

  //this method will change the defualt viewport.
  changeViewPort(viewport){
    cy.viewport(1280,1080);
  };

  //this method will click on login button.
  clickOnLogin(){
    cy.get(`[name="login"]`).click({ timeout: 10000 });
  };

  //This method will click on the "add to the basket" button.
  clickOnBasket(){
    cy.get(`.single_add_to_cart_button`).click({ timeout: 10000 });
  };

  //This method will click on basket directly from homepage.
  clickOnAddToBasket1(){
    cy.get(`.post-160 > .button`).click({ timeout: 10000 });
  };

  //This method will add the book to cart from homepage after added to cart.
  clickOnAddToCart1(){
    cy.get(`.added_to_cart`).click({ timeout: 10000 });
  };
  
  //This method will click on Save Address button.
  clickOnSaveAddress(){
    cy.get(`[name="save_address"]`).click({ timeout: 10000 });
  };

  //This method will assert if description1 is present
  assertDescription1(){
    cy.get().should(`exist`);
  };

  //This method will asser if element1 exists on the page.
  assertElement1Exists(){
    cy.get(`.n2-ss-slide-34 > .n2-ss-slide-background > .n2-ss-slide-background-image`).should(`exist`);
  };

  //This method will assert if element2 exists.
  assertElement2Exists(){
    cy.get(`.n2-ss-slide-35 > .n2-ss-slide-background > .n2-ss-slide-background-image`).should(`exist`);
  };

  //This method will assert if element3 exists.
  assertElement3Exists(){
    cy.get(`.n2-ss-slide-36 > .n2-ss-slide-background > .n2-ss-slide-background-image`).should(`exist`);
  };

  //This method will assert if element 4 exists.
  assertElement4Exists(){
    cy.get(`.post-160 > .woocommerce-LoopProduct-link > .attachment-shop_catalog`).should(`exist`);
  };

    //This method will assert if element 5 exists.
    assertElement5Exists(){
    cy.get(`.post-163 > .woocommerce-LoopProduct-link > .attachment-shop_catalog`).should(`exist`);
  };

    //This method will assert if element 6 exists.  
    assertElement6Exists(){
    cy.get(`.post-165 > .woocommerce-LoopProduct-link > .attachment-shop_catalog`).should(`exist`);
  };
  
  //this method will type any text in any selector given.
  typeTextIntoElement(selector, text){
    cy.get(selector, {timeout:0}).clear().type(text);
  };

  //this mdfking method will assert any given selector contains any given text.
  assertElementContainsText(selector, text){
    cy.get(selector).should(`contain.text`, text);
  };

  //Assert method for 3 chained texts
  //assertChainContainsText(selector, text)
  
  //This method will click on Register button.
  clickOnRegister(){
    cy.get(`[name="register"]`).click({ timeout: 10000 });
  };

  //Click on Log Out 
  clickOnLogOut(){  
  cy.get(`[href="http://practice.automationtesting.in/my-account/customer-logout/"]`).click();
  };

  // Set filter for min and max 250 and 450
  setFilterMin(){
    cy.get(`[style="left: 20%;"]`);
  };

  //Set filter for max 450
  setFilterMax(){
    cy.get(`#max_price`).type(`450`);
  };

  //Click on Filter
  clickOnFilter(){
    cy.get(`#filter_button`).click();
  };
};

export const commonMethods = new CommonMethods();
