import styles from './ClassroomForm.module.scss'

import { Title } from '../Title/Title'
import { FormButtonAddRow } from '../FormButtonAddRow/FormButtonAddRow'
import { FormLabel } from '../FormLabel/FormLabel'
import { Form } from 'react-router-dom'
import { HideCheckbox } from '../HideCheckbox/HideCheckbox'

export function ClassroomForm({ classromsData, hiddenSectionsData }) {
	return (
		<>
			<Title>Edycja</Title>

			<div className={styles.wrapper}>
				<HideCheckbox
					name='classrooms'
					hidden={hiddenSectionsData[0].classrooms}
				/>

				<FormButtonAddRow>Dodaj kolejny plan lekcji</FormButtonAddRow>

				{classromsData.map((file, index) => (
					<div key={file.classroom_id} className={styles.container}>
						<Form className={styles.form}>
							<input type='hidden' value={file.classroom_id} name='id' />

							<FormLabel id={`file${file.classroom_id}`}>
								Zdjęcie {index + 1}
							</FormLabel>

							<input
								className={styles.input}
								name='html'
								id={`file${file.classroom_id}`}
								type='file'
								accept='text/plain, text/html'
							/>

							<button className={styles.update}>Aktualizuj</button>
						</Form>

						<Form className={styles.form}>
							<input type='hidden' value={file.classroom_id} name='id' />
							<button className={styles.delete}>Usuń</button>
						</Form>
					</div>
				))}
			</div>
		</>
	)
}
