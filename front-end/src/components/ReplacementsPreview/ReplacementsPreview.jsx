import styles from './ReplacementsPreview.module.scss'

import { REPLACEMENTS } from '../../constants/categories'
import { Title } from '../Title/Title'
import { FormTable } from '../FormTable/FormTable'

export function ReplacementsPreview() {
	return (
		<>
			<Title>Wygląd</Title>

			<div className={styles.container}>
				<FormTable>
					<thead>
						<tr>
							{REPLACEMENTS.map((item) => (
								<th key={item.key}>{item.title}</th>
							))}
						</tr>
					</thead>

					<tbody>
						{/* {replacement.map((el) => (
							<tr key={el.id}>
								<td>{el.lesson}</td>
								<td>{el.teacher}</td>
								<td>{el.branch}</td>
								<td>{el.subject}</td>
								<td>{el.room}</td>
								<td>{el.replacement}</td>
								<td>{el.data}</td>
							</tr>
						))} */}
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
					</tbody>
				</FormTable>
			</div>
		</>
	)
}
