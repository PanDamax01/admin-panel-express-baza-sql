import { Title } from '../Title/Title'
import styles from './SliderPreview.module.scss'

export function SliderPreview({ slidersData }) {
	return (
		<>
			<Title>Wygląd</Title>

			<ul className={styles.carousel}>
				{slidersData.map((img) => (
					<li key={img.slider_id} className={styles.card}>
						<img
							className={styles.img}
							src={
								'/add-img.png' && img.img_slider
							}
							alt='Slider image'
							width='230'
							height='200'
						/>
					</li>
				))}
			</ul>
		</>
	)
}
