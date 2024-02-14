import { BACK_END_URL } from '../../constants/api'

export async function headerLoader() {
	try {
		const response = await fetch(`${BACK_END_URL}/headers`)

		if (!response.ok) {
			throw new Error('Failed to download headers')
		}
		return response
	} catch (err) {
		console.log('An error occurred in headers:', err)
	}
}
