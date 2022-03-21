import { ACCOUNT_ENDPOINT, STATUS_CODE } from '../api-constants'
import { UserToken } from '../user-token'
import { RequestHelper } from '../request-helper'

export const AuthHelper = {
	generateToken(username, password) {
		let url =
			Cypress.env("apiUrl") +
			ACCOUNT_ENDPOINT.ENDPOINT_GENERATE_TOKEN_CREATE
		cy.request({
			method: 'POST',
			url: url,
			body: {
				userName: username,
				password: password,
			},
		}).then((response) => {
			cy.log(response.body.token)
			UserToken.setToken(response.body.token)
		})
	},

	login(username, password) {
		let url =
			Cypress.env("apiUrl") + ACCOUNT_ENDPOINT.ENDPOINT_AUTHORIZED_CREATE
		cy.request({
			method: "POST",
			url: url,
			body: {
				userName: username,
				password: password,
			},
		}).then((response) => {
			expect(response.status).equal(STATUS_CODE.RESPONSE_CODE_SUCCESSFUL)
			cy.setCookie('userName', response.body.username)
			cy.setCookie('userID', response.body.userId)
			cy.setCookie('token', response.body.token)
			cy.setCookie('expires', response.body.expires)
			UserToken.setToken(response.body.token)
			cy.log(response.body.token)
			cy.log(response.body.expires)
		})
	},
	preserveCookieInfo() {
		Cypress.Cookies.preserveOnce('userName', response.body.username)
		Cypress.Cookies.preserveOnce('userID', response.body.userId)
		Cypress.Cookies.preserveOnce('token', response.body.token)
		Cypress.Cookies.preserveOnce('expires', response.body.expires)
	},
}
