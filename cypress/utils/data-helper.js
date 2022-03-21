export const DataHelper = {
	toTitleCase(phrase) {
		return phrase
			.toLowerCase()
			.split(' ')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ')
	},
	getValueOfField(objectsList, fieldname, filterObject) {
		let key = Object.keys(filterObject)[0]
		let value = Object.values(filterObject)[0]

		for (var i = 0; i < objectsList.length; i++) {
			if (objectsList[i][key] == value) {
				cy.log('you are here')
				cy.log(objectsList[i][fieldname])
				return objectsList[i][fieldname]
			}
		}
	},
}
