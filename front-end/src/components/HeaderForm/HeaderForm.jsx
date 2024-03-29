import { FormBox } from '../FormBox/FormBox'
import { FormLabel } from '../FormLabel/FormLabel'
import { FullWidthButton } from '../FullWidthButton/FullWidthButton'
import { Hint } from '../Hint/Hint'
import { Title } from '../Title/Title'
import styles from './HeaderForm.module.scss'

export function HeaderForm({ headerData: { img_school_logo, bell } }) {
	return (
		<form className={styles.form}>
			<Title>Edycja</Title>

			<FormBox>
				<FormLabel id='logo'>Logo</FormLabel>
				<input
					className={styles.input}
					type='text'
					id='logo'
					name='logo'
					placeholder={img_school_logo ? img_school_logo : 'błąd'}
				/>
			</FormBox>

			<FormBox>
				<FormLabel id='bell'>Dzwonek</FormLabel>
				<input
					className={styles.input}
					type='text'
					id='bell'
					name='bell'
					placeholder={bell}
				/>
                <Hint>*Wpisz słowo godzina, a powróci do originału.</Hint>
			</FormBox>

            <FullWidthButton>Aktualizuj</FullWidthButton>
		</form>
	)
}
