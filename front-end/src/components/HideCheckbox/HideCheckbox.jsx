import styles from './HideCheckbox.module.scss'

import { useState } from 'react'
import { fetchData } from '../../api/fetchData'

export function HideCheckbox({ hidden, name }) {
	const [checked, setChecked] = useState(hidden)

	const handleCheckboxChange = async () => {
		setChecked(!checked)

		try {
			const updateFields = {
				id: 1,
				[name]: !checked,
			}

			return await fetchData('PUT', updateFields, 'hidden-sections')
		} catch (error) {
			console.error(`Error updating hidden section ${name}:` , error)
		}
	}

	return (
		<form method='PUT' className={styles.toggle}>
			<input
				checked={checked}
				onChange={handleCheckboxChange}
				type='checkbox'
				name={name}
				id='hide'
			/>

			<label htmlFor='hide'>{checked ? 'Schowaj' : 'Pokaż'} element</label>
		</form>
	)
}
