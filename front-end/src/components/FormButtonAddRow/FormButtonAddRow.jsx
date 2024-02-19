import styles from './FormButtonAddRow.module.scss'

export function FormButtonAddRow({ children, action }) {
	return (
		<form>
			<button className={styles.button}>{children}</button>
		</form>
	)
}
