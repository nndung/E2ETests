class Home {
  constructor() {
    if (Home._instance) {
      return Home._instance
    }
    Home._instance = this
    this.MENU_HOME_XPATH = "//a[contains(text(),'Home')]"
    this.MENU_USERNAME_CSS = "a[href*='@']"
    this.MENU_NEWPOST_XPATH = "//a[contains(text(),'New Post')]"
  }

  open() {
    cy.visit('/')
  }
  get homeMenu() {
    return cy.xpath(this.MENU_HOME_XPATH)
  }

  get userNameMenu() {
    return cy.get(this.MENU_USERNAME_CSS)
  }

  get newPostMenu() {
    return cy.xpath(this.MENU_NEWPOST_XPATH)
  }
}

const homePage = new Home()
export default homePage
