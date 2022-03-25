const HeadersHelpers = {
	getHeaders(token, content = false) {
		let headers = {
			Authorization: 'Bearer ' + token,
		}
		if (content) {
			headers['Content-Type'] = 'application/json'
		}
		return headers
	},
}
export default HeadersHelpers