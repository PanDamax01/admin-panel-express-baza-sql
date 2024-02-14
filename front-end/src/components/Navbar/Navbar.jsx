import styles from './Navbar.module.scss'

import { NAME_CONVERSION } from '../../constants/categories'
import { Logout } from '../Logout/Logout'
import { useLocation } from 'react-router-dom'

export function Navbar() {
	const { pathname } = useLocation()

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>{NAME_CONVERSION[pathname.split('/').pop()]}</h2>

			<div className={styles.menu}>
				<p>zmiana tla</p>
				
				<Logout>Wyloguj</Logout>
			</div>
		</div>
	)
}
