/// <reference types="cypress" />
describe("Input form Cypress", () => {
  beforeEach("Je charge mon application", function () {
    cy.visit("https://practice.automationbro.com/support-form/");
    cy.fixture("inputForm.json").then((formulaire) => {
      this.formulaire = formulaire;
    });
  });
 

  it.only("Renseigner le formulaire de contact", function () {
    cy.get("#evf-680-field_lVizlNhYus-1").type("Demo input form");
    cy.get("#evf-680-field_XYnMdkQDKM-3").type("demo@gmail.com");
    cy.get("#evf-680-field_xJivsqAS2c-2").type("Remboursement");
    cy.get("#evf-680-field_YalaPcQ0DO-4")
      .type("Je souhaite avoir un remboursement")

    cy.get("#evf-submit-680").click();
    cy.get(".everest-forms-notice").should(
      "contain.text",
      "Thanks for contacting us! We will be in touch with you shortly."
    );
  
  });
});
