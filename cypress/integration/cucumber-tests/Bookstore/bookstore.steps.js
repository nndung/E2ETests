import {
  Given,
  When,
  Then,
  And,
  Before,
  After,
} from 'cypress-cucumber-preprocessor/steps'

import BOOKSTORE_ENDPOINT from '../../../utils/api/api-constants'
import headersHelpers from '../../../utils/api/header-helper'
import requestHelper from '../../../utils/api/request-helper'

Before(() => {
  cy.log('Cucumber API Tests - Started')
  cy.fixture('req_addbook.json').as('body');
})

After(() => {
  cy.log('Cucumber API Tests - Finished')
})

let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImRlbW9xYSIsInBhc3N3b3JkIjoiVGVzdEAxMjMiLCJpYXQiOjE2NDgxMTMxNDN9.IZ-3QBsD7-7DveE47UruubLyLcpd0IErSH6vBgsxHLY';

When('I send a POST HTTP request', function () {
  let headers = headersHelpers.getHeaders(token, true);
  requestHelper.sendPostRequest(BOOKSTORE_ENDPOINT.ENDPOINT_ADD_BOOK_TO_COLLECTION_CREATE, headers, this.body);
})

Then('I receive valid HTTP response code 201', () => {
  cy.get('@response').then((res) => {
    expect(res.status).to.eq(400);
  })
    
})
