import config from '../../config'

class PeopleService {
	baseUrl = config.baseUrl
	endpoint = 'people'

	async getPeople() {
		const response = await fetch(`${this.baseUrl}/${this.endpoint}`)
		if (!response.ok) throw new Error(response.statusText)

		const data = await response.json()
		return data
	}
}

export default PeopleService