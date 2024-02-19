import { BACK_END_URL } from '../../constants/api'

export async function slidersLoader() {
	try {
		const response = await fetch(`${BACK_END_URL}/sliders`)

		if (!response.ok) {
			throw new Error('Failed to download sliders')
		}
		return response
	} catch (err) {
		console.log('An error occurred in sliders:', err)
	}
}