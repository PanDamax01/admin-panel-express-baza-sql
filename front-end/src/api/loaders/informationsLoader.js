import { BACK_END_URL } from '../../constants/api'

export async function informationsLoader() {
	try {
		const response = await fetch(`${BACK_END_URL}/informations`)

		if (!response.ok) {
			throw new Error('Failed to download informations')
		}
		return response
	} catch (err) {
		console.log('An error occurred in informations:', err)
	}
}
