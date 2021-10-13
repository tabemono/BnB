// initial-test.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/// <reference types="cypress" />

describe("visits site", () => {
  //   cy.visit("/");
  it("Home page loads", () => {
    cy.viewport(1280, 720);
    cy.visit("http://localhost:3000/#/");
  });

  it("Checks Login modal links", () => {
    cy.viewport(1280, 720);
    cy.get("[data-testid=loginbtn]").click();
    // cy.get("[data-testid=login-button]").click();
    // cy.contains("Demo Login").should("exist");
    // cy.contains("Log in").should("exist");
    // cy.contains("Signup").should("exist");
    // cy.get("[data-testid=other-form-link").click();

    // cy.contains("Sign Up").should("exist");
  });
  //   it("Checks Signup errors", () => {
  // Cypress.on("uncaught:exception", (err, runnable) => {
  //   return false;
  // });
  //   cy.get("[data-testid=firstname]").type("tony");
  //   cy.get("[data-testid=email-input]").type("demo@aa.com");
  //   cy.get("[data-testid=password-input]").type("123456");
  //   //     cy.get("[data-testid=submit-button]").click();
  //   //   });
  //   it("Logs in", () => {
  //     cy.get("[data-testid=submit-button]").click();
  //   });
  it("Checks Login", () => {
    cy.get("[data-testid=email-input]").type("demo@aa.com");
    cy.get("[data-testid=password-input]").type("123456");
    cy.get("[data-testid=submit-button]").click();
  });
});
