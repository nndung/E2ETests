class Login {
  constructor() {
    if (Login._instance) {
      return Login._instance
    }
    Login._instance = this
    this.TXT_EMAIL_CSS = 'input[type=email'
    this.TXT_PASSWORD_CSS = 'input[type=password'
    this.BNT_SUBMIT_CSS = 'button[type=submit'
    this.MSG_ERROR_CSS = 'ul.error-messages>li'
  }

  open() {
    cy.visit('/login')
  }

  get emailTxt() {
    return cy.get(this.TXT_EMAIL_CSS)
  }

  get passwordTxt() {
    return cy.get(this.TXT_PASSWORD_CSS)
  }

  get submitBtn() {
    return cy.get(this.BNT_SUBMIT_CSS)
  }

  get errorMsg() {
    return cy.get(this.MSG_ERROR_CSS)
  }

  getErrorText() {
    return cy.get(this.error).invoke('text')
  }

  inputEmail(userEmail) {
    cy.get(this.email).type(userEmail)
  }

  inputPassword(password) {
    cy.get(this.password).type(password)
  }

  clickSubmitBtn() {
    cy.get(this.submit).click()
  }
}

const loginPage = new Login()
export default loginPage
