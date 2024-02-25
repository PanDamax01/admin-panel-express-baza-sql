import styles from './ReplacementsForm.module.scss'

import { FormRows } from '../FormRows/FormRows'
import { Title } from '../Title/Title'
import { FormButtonAddRow } from '../FormButtonAddRow/FormButtonAddRow'

export function ReplacementsForm({ replacementsData }) {
	return (
		<>
			<Title>Edycja</Title>
			{/* <Checkbox hidden={hidden.hideReplacement} type='hideReplacement' /> */}

			<div className={styles.wrapper}>
				<FormButtonAddRow method='POST' action='/panel/zastepstwa'>
					Dodaj kolejny wiersz
				</FormButtonAddRow>

				<FormRows replacementsData={replacementsData} />
			</div>
		</>
	)
}
