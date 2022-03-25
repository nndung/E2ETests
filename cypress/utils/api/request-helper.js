import { UserToken } from './user-token'

const RequestHelper = {
	sendGetRequest(userToken = UserToken.getAuthToken(), endPoint) {
		let url = Cypress.env('apiUrl') + endPoint
		cy.request({
			method: 'GET',
			url: url,
		}).as('response')
	},

	sendPostRequest(
		endPoint,
		headers,
		data
	) {
		let url = Cypress.env('apiUrl') + endPoint
		cy.request({
			method: 'POST',
			url: url,
			headers: headers,
			body: data,
			failOnStatusCode: false,
		}).as('response')
	},

	sendPutRequest() {},
	sendPatchRequest() {},

	sendDeleteRequest(userToken, endPoint, data = {}) {
		// if (Object.keys(header).length===0) {
		//     header = {'Content-Type': 'application/json'}
		// }
		// headers= {...headers, ...header}
		let url = Cypress.env('apiUrl') + endPoint
		cy.request({
			method: 'DELETE',
			url: url,
			headers: userToken,
			failOnStatusCode: false,
		}).as('response')
	},
}

export default RequestHelper