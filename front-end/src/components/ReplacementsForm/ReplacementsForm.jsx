import styles from './ReplacementsForm.module.scss'

import { FormRows } from '../FormRows/FormRows'
import { Title } from '../Title/Title'

export function ReplacementsForm({ replacementsData }) {
	return (
		<>
			<Title>Edycja</Title>
			{/* <Checkbox hidden={hidden.hideReplacement} type='hideReplacement' /> */}

			<form>
				<button className={styles.add}>Dodaj wiersz</button>
			</form>

			<FormRows replacementsData={replacementsData} />
		</>
	)
}
