import { BACK_END_URL } from '../../constants/api'

export async function usersLoader() {
	try {
		const response = await fetch(`${BACK_END_URL}/users`)

		if (!response.ok) {
			throw new Error('Failed to download users')
		}
		return response
	} catch (err) {
		console.log('An error occurred in users:', err)
	}
}