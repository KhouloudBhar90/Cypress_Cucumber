import {
  Given,
  When,
  Then,
  And,
} from "@badeball/cypress-cucumber-preprocessor";

Given("Je charge mon application", () => {
  cy.visit("https://practice.automationbro.com/");
});
Given("Je suis sur la page formulaire", () => {
  cy.get("#menu-item-697 > a").click();
  cy.contains("Support Form").should("be.visible");
});
When("Je renseigne les champs obligatoires", () => {
  cy.get("#evf-680-field_lVizlNhYus-1").type("test");
  cy.get("#evf-680-field_XYnMdkQDKM-3").type("test@gmail.com");
  cy.get("#evf-680-field_xJivsqAS2c-2").type("Cucumber");
});
When("Je clique sur le bouton {string}", (boutonSubmit) => {
  cy.contains(boutonSubmit).click();
  cy.contains(boutonSubmit).click();
});
Then("Je visualise le message {string}", (formulaireCree) => {
  cy.contains(formulaireCree).should("be.visible");
});
Then("Je visualise le fond vert avec ce message", () => {
  cy.get('[role="alert"]').should(
    "have.css",
    "background-color",
    "rgb(75, 206, 97)"
  );
});
