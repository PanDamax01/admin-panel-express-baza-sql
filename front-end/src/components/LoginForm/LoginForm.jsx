import styles from './LoginForm.module.scss'
import loginIcon from '../../assets/icon-login.png'
import PasswordIcon from '../../assets/icon-password.png'

import { useState } from 'react'
import { FullWidthButton } from '../FullWidthButton/FullWidthButton'

export function LoginForm() {
	const [showPassword, setShowPassword] = useState(false)

	function handleShownPassword(e) {
		e.preventDefault()
		setShowPassword(!showPassword)
	}

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h1 className={styles.title}>Logowanie</h1>

				<form>
					<div className={styles.box}>
						<input
							className={styles.input}
							type='text'
							name='login'
							id='login'
							autoComplete='login'
							required
						/>
						<label className={styles.label} htmlFor='login'>
							Login
						</label>
						<img className={styles.img} src={loginIcon} alt='Icon login' />
					</div>

					<div className={styles.box}>
						<input
							className={styles.input}
							type={showPassword ? 'text' : 'password'}
							name='password'
							id='password'
							autoComplete='off'
							required
						/>
						<label className={styles.label} htmlFor='password'>
							Hasło
						</label>
						<img
							className={styles.img}
							src={PasswordIcon}
							alt='Icon password'
						/>
						<button onClick={handleShownPassword} className={styles.eyes}>
							👀
						</button>
					</div>

					<FullWidthButton>Zaloguj się</FullWidthButton>
				</form>
			</div>
		</div>
	)
}
