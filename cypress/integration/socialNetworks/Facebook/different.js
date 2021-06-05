import { Given, Then } from "cypress-cucumber-preprocessor/steps";
require('cypress-xpath')

const url = "https://facebook.com";
const username = 'testa.testa';
const testPass = 'testPass'
const firstName = 'f2';
const lastName = 'l2';
const email = 'mr@gmail.com';
const entryName = 'Test Summary23';

Given('I kinda open Facebook page', () => {
  cy.visit(url);
});

Then(`I'm setting up credentials`, () => {
  cy.get('button[label="Register now"]').click();
  cy.get('input[name=firstName]').type(firstName);
cy.wait(3000)
  cy.get('input[name=lastName]').type(lastName);
cy.wait(3000)
cy.get('input[name=email]').type(email);
cy.wait(3000)
cy.get('button[label="Next"]').click();
  cy.wait(10000)
  cy.get('input[name=password]').type(testPass);
  cy.get('div.ui-password-meter').click();
  cy.get('input[name=cPassword]').type(testPass).pause();
  cy.get('button[type=submit]').click();
// cy.wait(9999999999);
cy.get('button[label="Continue"]').click();
cy.get('button[label="Continue"]').click();
cy.get('button[label="Continue"]').click();
cy.get('button[type=submit]').click();
cy.wait(5000);
cy.get('div').contains('Agile').click();
cy.wait(5000);
cy.get('div.whiteBox>div.parent-of-template-nav>div').eq(0).click();
cy.get('button[icon="ui-icon-check"]').click();
cy.wait(10000)
cy.get('i').contains('menu').click()
cy.wait(10000)
// cy.wait(9999999999);
cy.get('span').contains('Logout').click()


// cy.

// cy.get('button[type=submit]').click();
  // cy.get('button[type=submit]').click();
});

Then(`Login with existing user`, () => {
  cy.get('input[name=name]').type(firstName + '.' + lastName);
  cy.get('input[name=password]').type(testPass);
  cy.get('button[type=submit]').click();
});

And('Elements are visible', () => {
  cy.get('span.ui-dialog-title').should('have.text', 'Create Your Workspace'),
  cy.get('div').contains('Agile').click()
});

And('Select Workspace', () => {
  // cy.get('button[label=Cancel]'),
  cy.get('i').contains('home').click()
  cy.wait(2000)
  cy.xpath('//span[contains(@class,"colorbox-name")]/../..').click()
  // cy.wait(99999999)
  cy.get('div').contains('Tasks').click()
  cy.get('div[title="Document view"]').click();
  cy.get('span').contains('New item').click();
  cy.xpath('//label[text()=\'Summary\']/../input').type(entryName)
  cy.xpath('//label[text()=\'Backlog Item\']/../p-autocomplete').type('Basic Radio');
  cy.get('div.title-container>span').contains(' Basic Radio ').click();
  cy.get('div.fr-element').type('Test');
  cy.get('button[type=submit]').click();
cy.wait(2000)
  cy.get('span').contains(entryName).should('be.visible');
  cy.get('div[title="Document view"]').click();
cy.wait(2000)
  cy.get('a.tree-node-link').contains(entryName).should('be.visible');
  cy.get('div[title="List view"]').click();
cy.wait(2000)
  cy.xpath('//span[text()= " ' + entryName + ' "]/../a').click();

cy.xpath('//label[text()="Summary"]/../div').should('have.text', entryName)
// cy.wait(999999999);
cy.xpath('//label[text()="Backlog Item"]/..//a').should('have.text', ' Basic Radio ');
cy.get('span.wikiContent').should('have.text','Test');

});
