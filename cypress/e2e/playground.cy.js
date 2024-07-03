describe("Demo", () => {
    beforeEach(() => {
      cy.visit("www.google.com");
    });
    it("Only execited when it`s Chrome",{ browser:  "chrome"}, () =>{
        cy.log("test");
    });
});

describe("Demo-viewport", () => {
    beforeEach(() => {
        cy.visit("https://www.google.com/");
    });
    it("test #1 - viewporta and presets" , () => {
       cy.viewport(`ipad-mini`, `portrait`)
    });
    it("test #2 - width and hight" , () => {
        cy.viewport(800,600);
     });
});