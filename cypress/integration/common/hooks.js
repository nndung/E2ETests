const {
  Before,
  After,
  Given,
  Then,
} = require('cypress-cucumber-preprocessor/steps')

// this will get called before each scenario
Before(() => {
  cy.log('Cucumber before common')
})

// this will only get called before scenarios tagged with @foo
Before({ tags: '@foo' }, () => {
  cy.log('Cucumber before for specific tags')
})

After(() => {
  cy.log('Cucumber after common')
})

before(() => {
  cy.log('Mocha before all in common')
})

after(() => {
  cy.log('Mocha after all in common')
})

beforeEach(() => {
  cy.log('Mocha before each in common')
})

afterEach(() => {
  cy.log('Mocha after each in common')
})
