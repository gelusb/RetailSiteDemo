import { commonMethods } from "../configs/common/commonMethods";

export class TestCases {

    //click on Test cases from homepage
    clickOnTestCases(){
        commonMethods.clickOnElement(`#menu-item-224 > a`);
    };

    //assert tge Home page test cases
    assertHomePagetests(){
        commonMethods.assertElementContainsText(`#accordion-222-sub_row_1-0-1-0-0 > .module-title `, `Home Page`);
    };

    //assert first home page test case contains the name "Sliders"
    assertHomepage1(){
        commonMethods.assertElementContainsText(`.current > .accordion-content > p`, `Sliders`);
    };

    //assert the 2nd home page test case contains the name in the Description
    assertHomepage2(){
        commonMethods.assertElementContainsText(`.current > .accordion-title > a`, `Arrivals`);
    };

    //assert the 3rd home page test case contains the name Images
    assertHomepage3(){
        commonMethods.assertElementContainsText(`.current > .accordion-title > a`, `Images`);
    };

    //assert the 4th home page test case contains the name in the Description
    assertHomepage4(){
        commonMethods.assertElementContainsText(`.current > .accordion-title > a`, `Description`);
    };

    //assert the 5th home page test case contains the name in the Description
     assertHomepage5(){
        commonMethods.assertElementContainsText(`.current > .accordion-title > a`, `Reviews`);
    };
    
    //assert the 6th home page test case contains the name in the Description
     assertHomepage6(){
        commonMethods.assertElementContainsText(`.current > .accordion-title > a`, `Add to Basket`);
    };

    //assert the 7th home page test case contains the name in the Description
     assertHomepage7(){
        commonMethods.assertElementContainsText(`.current > .accordion-title > a`, `more books`);
    };

    //assert the 8th home page test case contains the name in the Description
     assertHomepage8(){
        commonMethods.assertElementContainsText(`.current > .accordion-title > a`, `Basket-Items`);
    };

    //assert the 9th home page test case contains the name in the Description
     assertHomepage9(){
        commonMethods.assertElementContainsText(`.current > .accordion-title > a`, `Basket-Items-Coupon`);
    };

    //assert the 10th home page test case contains the name in the Description
     assertHomepage10(){
        commonMethods.assertElementContainsText(`.current > .accordion-title > a`, `Basket-Items-Coupon value<450`);
    };

    //assert the 11th home page test case contains the name in the Description
     assertHomepage11(){
        commonMethods.assertElementContainsText(`.current > .accordion-title > a`, `Basket-Items-Remove book`);
    };

    //assert the 12th home page test case contains the name in the Description
     assertHomepage12(){
        commonMethods.assertElementContainsText(`.current > .accordion-title > a`, `Basket-Items-Add book`);
    };

    //assert the 13th home page test case contains the name in the Description
     assertHomepage13(){
        commonMethods.assertElementContainsText(`.current > .accordion-title > a`, `Basket-Items-Check-out-Book Final price`);
    };

    //assert the 14th home page test case contains the name in the Description
     assertHomepage14(){
        commonMethods.assertElementContainsText(`.current > .accordion-title > a`, `Basket-Items-Check-out-Update Basket`);
    };

    //assert the 15th home page test case contains the name in the Description
     assertHomepage15(){
        commonMethods.assertElementContainsText(`.current > .accordion-title > a`, `Basket-Items-Check-out-Total & Sub-total condition`);
     };
    
    //assert the 16th home page test case contains the name in the Description
     assertHomepage16(){
        commonMethods.assertElementContainsText(`.current > .accordion-title > a`, `Basket-Items-Check-out functionality`);
    };

    //assert the 17th home page test case contains the name in the Description
     assertHomepage17(){
        commonMethods.assertElementContainsText(`.current > .accordion-title > a`, `Basket-Items-Check-out-Payment Gateway`);
    };

    //assert the 18th home page test case contains the name in the Description
     assertHomepage18(){
        commonMethods.assertElementContainsText(`.current > .accordion-title > a`, `Basket-Items-Check-out-Payment Gateway-Place order`);
    };

    //Click on the first home page button link
    clickOnHomePage1(){
        commonMethods.clickOnElement(`#accordion-222-sub_row_1-0-1-0-0 > .ui > :nth-child(1) > .accordion-title > a `);
    };

    //click on the 2nd home page test case  button link
    clickOnHomePage2(){
        commonMethods.clickOnElement(`#accordion-222-sub_row_1-0-1-0-0 > .ui > :nth-child(2) > .accordion-title > a`);
    };

    //click on 3rd home page test case button link
    clickOnHomePage3(){
        commonMethods.clickOnElement(`#accordion-222-sub_row_1-0-1-0-0 > .ui > :nth-child(3) > .accordion-title > a`);
    };

    //click on 4th home page test case button link
    clickOnHomePage4(){
        commonMethods.clickOnElement(`#accordion-222-sub_row_1-0-1-0-0 > .ui > :nth-child(1) > .accordion-title > a > .accordion-icon`);
    };

    //click on 5h home page test case button link
    clickOnHomePage5(){
        commonMethods.clickOnElement(`#accordion-222-sub_row_1-0-1-0-0 > .ui > :nth-child(5) > .accordion-title > a`);
    };

    //click on 6th home page test case button link
     clickOnHomePage6(){
        commonMethods.clickOnElement(`#accordion-222-sub_row_1-0-1-0-0 > .ui > :nth-child(6) > .accordion-title > a`);
    };

    //click on 7th home page test case button link
    clickOnHomePage7(){
        commonMethods.clickOnElement(`#accordion-222-sub_row_1-0-1-0-0 > .ui > :nth-child(7) > .accordion-title > a`);
    };

    //click on 8th home page test case button link
    clickOnHomePage8(){
        commonMethods.clickOnElement(`#accordion-222-sub_row_1-0-1-0-0 > .ui > :nth-child(8) > .accordion-title > a`);
    };

    //click on 9th home page test case button link
    clickOnHomePage9(){
        commonMethods.clickOnElement(`#accordion-222-sub_row_1-0-1-0-0 > .ui > :nth-child(9) > .accordion-title > a`);
    };

    //click on 10th home page test case button link
    clickOnHomePage10(){
        commonMethods.clickOnElement(`#accordion-222-sub_row_1-0-1-0-0 > .ui > :nth-child(10) > .accordion-title > a`);
    };

    //click on 11th home page test case button link
    clickOnHomePage11(){
        commonMethods.clickOnElement(`#accordion-222-sub_row_1-0-1-0-0 > .ui > :nth-child(11) > .accordion-title > a`);
    };

    //click on 12th home page test case button link
    clickOnHomePage12(){
        commonMethods.clickOnElement(`#accordion-222-sub_row_1-0-1-0-0 > .ui > :nth-child(12) > .accordion-title > a`);
    };

     //click on 13th home page test case button link
     clickOnHomePage13(){
        commonMethods.clickOnElement(`#accordion-222-sub_row_1-0-1-0-0 > .ui > :nth-child(13) > .accordion-title > a`);
    };

    //click on 14th home page test case button link
    clickOnHomePage14(){
        commonMethods.clickOnElement(`#accordion-222-sub_row_1-0-1-0-0 > .ui > :nth-child(14) > .accordion-title > a`);
    };

    //click on 15th home page test case button link
    clickOnHomePage15(){
        commonMethods.clickOnElement(`#accordion-222-sub_row_1-0-1-0-0 > .ui > :nth-child(15) > .accordion-title > a`);
    };

    //click on 16th home page test case button link
    clickOnHomePage16(){
        commonMethods.clickOnElement(`#accordion-222-sub_row_1-0-1-0-0 > .ui > :nth-child(16) > .accordion-title > a`);
    };

    //click on 17th home page test case button link
    clickOnHomePage17(){
        commonMethods.clickOnElement(`#accordion-222-sub_row_1-0-1-0-0 > .ui > :nth-child(17) > .accordion-title > a`);
    };

    //click on 18th home page test case button link
    clickOnHomePage18(){
        commonMethods.clickOnElement(`#accordion-222-sub_row_1-0-1-0-0 > .ui > :nth-child(18) > .accordion-title > a`);
    };

    //Click on 1st My account login test case button link

    //clickOnMyLogin1(){
       // commonMethods.clickOnElement(`#accordion-222-sub_row_1-0-1-0-0 > .ui > :nth-child(1) > .accordion-title > a`)
   // };
};

export const testCases = new TestCases();