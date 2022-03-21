const {
  Before,
  After,
  Given,
  Then,
} = require('cypress-cucumber-preprocessor/steps')

Given(/^User is logged to the application$/, () => {
  // cy.loginViaAPI('binhle0106@gmail.com', 'Testing@123')
  cy.loginViaAPISession('binhle0106@gmail.com', 'Testing@123')
})
