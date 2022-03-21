export class UserToken {
	static setToken(authToken) {
		Cypress.env('token', authToken)
	}

	static getAuthToken() {
		return { Authorization: `Bearer ${Cypress.env('token')}` }
	}
}

// Using window.localStorage however it cannot work in parallel
// export class UserToken {

// static setToken(authToken) {
// 	window.localStorage.setItem('token', authToken)
// }

// static getAuthToken() {
// 	return { Authorization: `Bearer ${window.localStorage.getItem('token')}` }
// }

// }

// export const getAuthToken = () => {
//     let accessToken = localStorage.getItem('token')
//     let authToken = { Authorization: `Bearer ${accessToken}`}
//     cy.log(authToken)
//     return authToken
// };
