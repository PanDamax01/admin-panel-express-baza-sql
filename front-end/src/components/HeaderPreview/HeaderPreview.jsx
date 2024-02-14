import styles from './HeaderPreview.module.scss'

import schoolLogo from '../../assets/logo-school.png'
import { Title } from '../Title/Title'

export function HeaderPreview({ headerData: { img_school_logo, bell } }) {

	return (
		<>
			<Title>Wygląd</Title>

			<div className={styles.container}>
				<img
					src={img_school_logo ? img_school_logo : schoolLogo}
					alt='School logo'
					width='300'
					height='90'
					className={styles.logoScholl}
				/>
				<p className={styles.bell}>{!bell === 'godzina' ? bell : 'Do końca leckji $ - $$min'}</p>
			</div>
		</>
	)
}
