import { RequestHelper } from '../request-helper'
import { BOOKSTORE_ENDPOINT } from '../api-constants'
import { STATUS_CODE } from '../api-constants'

export const BookstoreHelper = {
	deleteBooks(userToken, userid) {
		let endPoint = BOOKSTORE_ENDPOINT.ENDPOINT_BOOKS_DELETE(userid)
		cy.log(endPoint)
		RequestHelper.sendDeleteRequest(userToken, endPoint)
		// cy.get('@response').then(response => {
		// 	expect(response.status).equal(STATUS_CODE.RESPONSE_CODE_SUCCESSFUL_NO_CONTENT)
		// })
	},

	addBooksToCollection(userToken, userId, isbn) {
		let endPoint = BOOKSTORE_ENDPOINT.ENDPOINT_ADD_BOOK_TO_COLLECTION_CREATE
		let data = {
			userId: userId,
			collectionOfIsbns: [
				{
					isbn: isbn,
				},
			],
		}
		RequestHelper.sendPostRequest(userToken, endPoint, data)

		cy.get('@response').then((response) => {
			// expect(response.status).equal(
			// 	STATUS_CODE.RESPONSE_CODE_CREATE_SUCCESSFUL
			// )
			expect(response.body).to.be.not.null
			console.log(response.body)
		})
	},

	getAllBooks(userToken) {
		let endPoint = BOOKSTORE_ENDPOINT.ENDPOINT_BOOKS_GET
		RequestHelper.sendGetRequest(userToken, endPoint)
		// cy.get('@response').then(response => {
		//     expect(response.status).equal(STATUS_CODE.RESPONSE_CODE_SUCCESSFUL)
		// })
	},
}
