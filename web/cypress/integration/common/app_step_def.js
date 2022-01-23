import {
  Given, Then,
} from 'cypress-cucumber-preprocessor/steps';

Given('I am on the paintings page', () => {
  cy.visit('/paintings');
});

Then('I see {string}', (label) => {
  cy.get('body')
    .contains(label)
    .should('exist');
});

Then('display the following names of the paintings', (datatable) => {
  datatable.hashes().forEach(({ name }) => {
    cy.get('body')
      .contains(name)
      .should('exist');
  });
});
