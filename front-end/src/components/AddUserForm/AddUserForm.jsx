import { FullWidthButton } from '../FullWidthButton/FullWidthButton'
import { UserBox } from '../UserBox/UserBox'
import styles from './AddUserForm.module.scss'

export function AddUserForm() {
	return (
		<form className={styles.form}>
			<UserBox
				name='username'
				autoComplete='given-name'
				pattern='.{3,}'
				type='text'>
				Imię: <pre>(min. 3 znaki)*</pre>
			</UserBox>

			<UserBox
				name='surname'
				autoComplete='family-name'
				pattern='.{3,}'
				type='text'>
				Nazwisko: <pre>(min. 3 znaki)*</pre>
			</UserBox>

			<UserBox name='login' autoComplete='username' pattern='.{3,}' type='text'>
				Login: <pre>(min. 3 znaki)*</pre>
			</UserBox>

			<UserBox
				name='password'
				autoComplete='new-password'
				pattern='.{5,}'
				type='password'>
				Hasło: <pre>(min. 5 znaki)*</pre>
			</UserBox>

			<UserBox name='email' autoComplete='email' pattern='.{3,}' type='email'>
				Email:
			</UserBox>

			<UserBox name='avatar' autoComplete='off' type='text'>
				Avatar:
			</UserBox>

			<div className={styles.selectedBox}>
				<label htmlFor='isAdmin'>Admin:</label>
				<select name='admin' id='isAdmin' defaultValue={0} required>
					<option value={1}>Tak</option>
					<option value={0}>Nie</option>
				</select>
			</div>

			<FullWidthButton>Wyślij</FullWidthButton>
		</form>
	)
}
