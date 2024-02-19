import { BACK_END_URL } from '../../constants/api'

export async function classroomsLoader() {
	try {
		const response = await fetch(`${BACK_END_URL}/classrooms`)

		if (!response.ok) {
			throw new Error('Failed to download classrooms')
		}
		return response
	} catch (err) {
		console.log('An error occurred in classrooms:', err)
	}
}