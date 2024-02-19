import styles from './ClassroomTable.module.scss'

export function ClassroomTable({ classromsData }) {
	return (
		<table className={styles.table}>
			<thead>
				<tr>
					<th>Klasa</th>
					<th>Sala</th>
				</tr>
			</thead>

			<tbody>
				{classromsData.map((html) => {
					const startIndex = html.html.indexOf('<span class="tytulnapis">')
					const endIndex = html.html.indexOf('</span>', startIndex)
					const spanContent = html.html.substring(
						startIndex + '<span class="tytulnapis">'.length,
						endIndex
					)

					return (
						<tr key={html.id}>
							<td>{spanContent.split(' ')[0]}</td>
							<td>przesłano</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}
