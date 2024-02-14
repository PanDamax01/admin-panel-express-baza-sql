import { BACK_END_URL } from '../../constants/api'

export async function replacementsLoader() {
	try {
		const response = await fetch(`${BACK_END_URL}/replacements`)

		if (!response.ok) {
			throw new Error('Failed to download replacements')
		}
		return response
	} catch (err) {
		console.log('An error occurred in replacements:', err)
	}
}
