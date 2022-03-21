import loginPage from '../../cypress/integration/page-objects/login-page'
import homePage from '../../cypress/integration/page-objects/home-page'
import { validateSchema } from "./validate-schema-command";

Cypress.Commands.add("validateSchema", validateSchema);

Cypress.Commands.add('loginViaUI', (username, password) => {
  loginPage.open()
  loginPage.emailTxt.type(username)
  loginPage.passwordTxt.type(password)
  loginPage.submitBtn.click()
})

Cypress.Commands.add('loginViaAPI', (email, pwd) => {
  cy.request({
    method: 'POST',
    url: Cypress.env('apiServer') + '/users/login',
    headers: {
      'content-type': 'application/json',
    },
    body: {
      user: { email: email, password: pwd },
    },
  }).then((res) => {
    expect(res.status).to.be.eq(200)
    window.localStorage.setItem('jwt', res.body.user.token)
  })
})

Cypress.Commands.add('loginViaUISession', (username, password) => {
  cy.session(
    [username, password],
    () => {
      loginPage.open()
      loginPage.emailTxt.type(username)
      loginPage.passwordTxt.type(password)
      loginPage.submitBtn.click()
      homePage.homeMenu.should('be.visible')
    },
    {
      validate() {
        cy.visit('/')
        homePage.homeMenu.should('be.enabled')
      },
    },
  )
})

Cypress.Commands.add('loginViaAPISession', (uname, pwd) => {
  cy.session(
    [uname, pwd],
    () => {
      cy.request({
        method: 'POST',
        url: Cypress.env('apiServer') + '/users/login',
        headers: {
          'content-type': 'application/json',
        },
        body: {
          user: { email: uname, password: pwd },
        },
      }).then((res) => {
        expect(res.status).to.eq(200)
        window.localStorage.setItem('jwt', res.body.user.token)
      })
    },
    {
      validate() {
        cy.visit('/')
        homePage.newPostMenu.should('be.visible')
      },
    },
  )
})

Cypress.Commands.add('isVisible', (selector) => {
	cy.get(selector).should('be.visible')
})

Cypress.Commands.add('isHidden', (selector) => {
	cy.get(selector).should('be.hidden')
})

Cypress.Commands.add('acceptAlert', (alertText) => {
	cy.on('window:alert', (message) => {
		expect(message).to.equal(alertText)
	})
})

Cypress.Commands.add('acceptConfirmationAlert', (confirmationText) => {
	cy.on('window:confirm', (message) => {
		expect(message).to.equal(confirmationText)
	})
})

Cypress.Commands.add('getText', (selector) => {
	cy.wrap(selector.text())
})