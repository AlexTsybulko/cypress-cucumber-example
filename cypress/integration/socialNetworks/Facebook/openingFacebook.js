import { Given } from "cypress-cucumber-preprocessor/steps";

const url = "http://localhost:8080/retina/#/";

Given(`I open Retina page`, () => {
  cy.visit(url);
});
