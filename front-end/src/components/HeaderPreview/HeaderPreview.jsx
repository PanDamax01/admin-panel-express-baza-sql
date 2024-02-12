import styles from './HeaderPreview.module.scss'

import schoolLogo from '../../assets/logo-school.png'
import { Title } from '../Title/Title'

export function HeaderPreview() {
	return (
		<>
            <Title>Wygląd</Title>

			<div className={styles.container}>
				<img
					src={schoolLogo}
					alt='School logo'
					width='300'
					height='90'
					className={styles.logoScholl}
				/>
				<p className={styles.bell}> Do końca leckji $ - $$min</p>
			</div>
		</>
	)
}
