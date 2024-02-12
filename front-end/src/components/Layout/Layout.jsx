import styles from './Layout.module.scss'

import { Navbar } from '../Navbar/Navbar'
import { Sidebar } from '../Sidebar/Sidebar'
import { Footer } from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export function Layout() {
	return (
		<div className={styles.container}>
			<div className={styles.menu}>
				<Sidebar />
			</div>
			<div className={styles.content}>
				<Navbar />
				<Outlet />
				<Footer />
			</div>
		</div>
	)
}
