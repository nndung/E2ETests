Feature: Home Page
    Test Feature in Home Page

    Background: Logged in user
        Given User is logged to the application

@addNewPost
    Scenario: As a user, I want to add a new post
        Given User is in Home page
        When User clicks on New Post menu
        And User inputs Article title as 'My First Post'
        And User inputs Article about as 'cypress test'
        And User input Article description as 'Cypress can do component, api and E2E testing'
        And User input Article tags as 'cypress, testing'
        And User clicks on button Publish Article
        Then The new post is published successful
        And The Article title is correct
        
        


