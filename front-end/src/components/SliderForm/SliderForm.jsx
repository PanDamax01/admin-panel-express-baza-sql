import { FormButtonAddRow } from '../FormButtonAddRow/FormButtonAddRow'
import { FormLabel } from '../FormLabel/FormLabel'
import { Title } from '../Title/Title'
import styles from './SliderForm.module.scss'

export function SliderForm({ slidersData }) {
	return (
		<>
			<Title>Edycja</Title>

			<div className={styles.wrapper}>
				{/* <Checkbox hidden={hidden.hideSlider} type='hideSlider' /> */}

                <FormButtonAddRow>Dodaj kolejny wiersz</FormButtonAddRow>

				{slidersData.map((img, index) => (
					<div key={img.slider_id} className={styles.container}>
						<form className={styles.form}>
							<input type='hidden' value={img.slider_id} name='id' />

							<FormLabel id={`img${img.slider_id}`}>
								Zdjęcie {index + 1}
							</FormLabel>

							<input
								className={styles.input}
								name={`img${img.slider_id}`}
								id={`img${img.slider_id}`}
								placeholder={img.img_slider}
								type='text'
							/>

							<button className={styles.update}>Aktualizuj</button>
						</form>

						<form className={styles.form}>
							<input type='hidden' value={img.slider_id} name='id' />
							<button className={styles.delete}>Usuń</button>
						</form>
					</div>
				))}
			</div>
		</>
	)
}
