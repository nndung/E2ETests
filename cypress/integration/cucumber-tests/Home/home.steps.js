import {
  Given,
  When,
  Then,
  And,
  Before,
  After,
} from 'cypress-cucumber-preprocessor/steps'
import homePage from '../../page-objects/home-page'
import newPost from '../../page-objects/newpost-page'

let postTitle
let postDescription

Given('User is in Home page', () => {
  homePage.open()
})

When('User clicks on New Post menu', () => {
  homePage.newPostMenu.click()
  cy.url().should('contain', 'editor')
})

// When(/^User inputs Article title as '(.*)'$/, (title) => {
//   newPost.titleTXT.type(title)
//   postTitle = title
// })

And('User inputs Article title as {string}', (title) => {
  newPost.titleTXT.type(title)
  postTitle = title
})

And(/^User inputs Article about as '(.*)'$/, (about) => {
  newPost.aboutTXT.type(about)
})

And(/^User input Article description as '(.*)'$/, (description) => {
  newPost.descriptionTXT.type(description)
  postDescription = description
})

And(/^User input Article tags as '(.*)'$/, (tags) => {
  newPost.tagsTXT.type(tags)
})

And('User clicks on button Publish Article', () => {
  newPost.publishBNT.click()
})

Then('The new post is published successful', () => {
  newPost.deletePostBNT.should('be.visible')
})

Then(/^The Article title is correct$/, () => {
  cy.contains(postTitle).should('be.visible')
  cy.contains(postDescription).should('be.visible')
})
