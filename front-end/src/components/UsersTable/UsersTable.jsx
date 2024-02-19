import styles from './UsersTable.module.scss'

import AvatarIcon from '../../assets/noavatar.png'
import { Link } from 'react-router-dom'

export function UsersTable({ usersData }) {
	return (
		<table className={styles.table}>
			<thead>
				<tr>
					<td>Avatar</td>
					<td>Imię</td>
					<td>Nazwisko</td>
					<td>Login</td>
					<td>Email</td>
					<td>Admin</td>
					<td>Akcje</td>
				</tr>
			</thead>

			<tbody>
				{usersData.map((user) => {
					return (
						<tr key={user.user_id}>
							<td>
								<img
									src={user.avatar === null ? AvatarIcon : user.avatar}
									alt='Profile icon'
									width={40}
									height={40}
									className={styles.userImage}
								/>
							</td>
							<td>{user.user_name}</td>
							<td>{user.user_lastname}</td>
							<td>{user.login}</td>
							<td>{user.email}</td>
							<td>{user.admin ? 'Tak' : 'Nie'}</td>

							<td>
								<div className={styles.buttonsBox}>
									<Link to={`/panel/uzytkownicy/${user.user_id}`}>
										<button className={`${styles.button} ${styles.view}`}>
											Zobacz
										</button>
									</Link>
									<form>
										<input type='hidden' name='id' value={user.user_id} />
										<button className={`${styles.button} ${styles.delete}`}>
											Usuń
										</button>
									</form>
								</div>
							</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}
