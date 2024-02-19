import styles from './InformationsForm.module.scss'

import { Title } from '../Title/Title'
import { FormLabel } from '../FormLabel/FormLabel'
import { Hint } from '../Hint/Hint'
import { FormBox } from '../FormBox/FormBox'
import { FullWidthButton } from '../FullWidthButton/FullWidthButton'

export function InformationsForm({ informationsData, showPoster, handleShowPoster }) {
	return (
		<>
			<Title>Edycja</Title>

			<div className={styles.wrapper}>
				{/* <Checkbox hidden={hidden.hideAnnouncements} type='hideAnnouncements'/> */}

				<button onClick={handleShowPoster} className={styles.button}>
					Pokaż {!showPoster ? 'plakat' : 'text'}
				</button>

				<form>
					{!showPoster ? (
						<FormBox>
							<FormLabel id='text'>Text</FormLabel>
							<textarea
								className={`${styles.input} ${styles.textarea}`}
								type='text'
								id='text'
								name='text'
								placeholder={informationsData.text}></textarea>
							<Hint>*Max 609 znaków.</Hint>
						</FormBox>
					) : (
						<FormBox>
							<FormLabel id='poster'>Plakat</FormLabel>
							<input
								className={styles.input}
								type='text'
								id='poster'
								name='poster'
								placeholder={informationsData.img_information}
							/>
						</FormBox>
					)}

					<FullWidthButton>Aktualizuj</FullWidthButton>
				</form>
			</div>
		</>
	)
}
