import {
  Given,
  When,
  Then,
  And,
  Before,
  After,
} from 'cypress-cucumber-preprocessor/steps'
import loginPage from '../../page-objects/login-page'

Before(() => {
  cy.log('Cucumber Login Tests - Started')
})

After(() => {
  cy.log('Cucumber Login Tests - Finished')
})

Given('The Login Page is opened', () => {
  loginPage.open()
})

Given(
  'Invalid username and password are entered and click submit',
  (dataTable) => {
    dataTable.hashes().forEach((row) => {
      loginPage.emailTxt.clear().type(row.username)
      loginPage.passwordTxt.clear().type(row.password)
      loginPage.submitBtn.click()
      cy.contains(row.error).should('be.visible')
    })
  },
)

Given('Invalid {string} and {string} are entered', (user, pass) => {
  loginPage.emailTxt.type(user)
  loginPage.passwordTxt.type(pass)
})

When('Submit button is clicked', () => {
  loginPage.submitBtn.click()
})

Given(
  'Valid username {string} and password {string} are entered',
  (user, pass) => {
    loginPage.emailTxt.type(user)
    loginPage.passwordTxt.type(pass)
  },
)

Then('An error message {string} is displayed', (message) => {
  loginPage.errorMsg.should('be.visible')
  loginPage.errorMsg.invoke('text').should('eq', message)
})

Then('The text {string} is displayed', (msg) => {
  cy.contains(msg).should('be.visible')
})
