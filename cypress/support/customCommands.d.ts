declare namespace Cypress {
    interface Chainable<Subject> {
        loginViaUI(username: any, password: any): Chainable<any>
        loginViaAPI(email: any, pwd: any): Chainable<any>
        loginViaUISession(username: any, password: any): Chainable<any>
        loginViaAPISession(uname: any, pwd: any): Chainable<any>
  }
}