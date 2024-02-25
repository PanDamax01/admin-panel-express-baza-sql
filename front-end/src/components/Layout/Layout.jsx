import styles from './Layout.module.scss'

import { Navbar } from '../Navbar/Navbar'
import { Sidebar } from '../Sidebar/Sidebar'
import { Footer } from '../Footer/Footer'
import { Outlet, useNavigation } from 'react-router-dom'

export function Layout() {
	const navigation = useNavigation()

	return (
		<div className={styles.container}>
			<div className={styles.menu}>
				<Sidebar />
			</div>
			<div className={styles.content}>
				<Navbar />
				{navigation.state === 'loading' && <p>ładowanie</p>}
				<Outlet />
				<Footer />
			</div>
		</div>
	)
}
