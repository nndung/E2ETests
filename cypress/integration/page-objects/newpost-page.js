class NewPost {
  constructor() {
    if (NewPost._instance) {
      return NewPost._instance
    }
    NewPost._instance = this
    this.TXT_TITLE_XPATH = "//input[@placeholder='Article Title']"
    this.TXT_ABOUT_XPATH =
      "//input[contains(@placeholder,'this article about')]"
    this.TXT_DESCRIPTION_XPATH =
      "//textarea[contains(@placeholder,'Write your article')]"
    this.TXT_TAGS_XPATH = "//input[@placeholder='Enter tags']"
    this.BNT_PUBLISH_XPATH = "//button[contains(text(),'Publish Article')]"
    this.BNT_DELETEPOST_XPATH = "//button[contains(text(),'Delete Article')]"
  }

  get titleTXT() {
    return cy.xpath(this.TXT_TITLE_XPATH)
  }

  get aboutTXT() {
    return cy.xpath(this.TXT_ABOUT_XPATH)
  }

  get descriptionTXT() {
    return cy.xpath(this.TXT_DESCRIPTION_XPATH)
  }

  get tagsTXT() {
    return cy.xpath(this.TXT_TAGS_XPATH)
  }
  get publishBNT() {
    return cy.xpath(this.BNT_PUBLISH_XPATH)
  }

  get deletePostBNT() {
    return cy.xpath(this.BNT_DELETEPOST_XPATH)
  }
}

const newPost = new NewPost()
export default newPost
