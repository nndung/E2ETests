import homePage from '../../cypress/integration/page-objects/home-page'

describe('test', () => {
  beforeEach(() => {
    // cy.loginViaAPI('binhle0106@gmail.com', 'Testing@123')
    cy.loginViaAPISession('binhle0106@gmail.com', 'Testing@123')
    cy.pause()
    cy.visit('/')
  })
  it(
    'demo',
    {
      retries: 1,
    },
    () => {
      homePage.newPostMenu.should('not.be.visible')
    },
  )
})
